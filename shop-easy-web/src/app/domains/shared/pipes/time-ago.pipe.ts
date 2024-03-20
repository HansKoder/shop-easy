import { Pipe, PipeTransform } from '@angular/core';

interface StackNode {
  next(): StackNode,
  isNext() : Boolean,
  get(): String
}

enum TimeAgoEnum {
  SECONDS = 1000,
  MINUTES = 60,
  HOURS = 60,
  DAYS = 24,
  WEEK = 7,
  MONTH = 4
}

enum TimeLimitEnum {
  SECONDS = 60,
  MINUTES = 60,
  HOURS = 24,
  DAYS = 7,
  WEEK = 4,
  MONTH = 12
}

interface Data {
  v: TimeAgoEnum,  
  t: 'Just Now' | 'Minutes' | 'Hours' | 'Days' | 'Weeks' | 'Months',
  l: TimeLimitEnum,
}

class TimeAgo implements StackNode {
  params: Data[] = [
    { v: TimeAgoEnum.SECONDS, t: 'Just Now', l: TimeLimitEnum.SECONDS},
    { v: TimeAgoEnum.MINUTES,  t: 'Minutes', l: TimeLimitEnum.MINUTES},
    { v: TimeAgoEnum.HOURS,  t: 'Hours', l: TimeLimitEnum.HOURS},
    { v: TimeAgoEnum.DAYS, t: 'Days', l: TimeLimitEnum.DAYS},
    { v: TimeAgoEnum.WEEK, t: 'Weeks', l: TimeLimitEnum.WEEK},
    { v: TimeAgoEnum.MONTH, t: 'Months', l: TimeLimitEnum.MONTH}
  ]

  idxParams = -1;
  createdAt! : number;
  diffTime! : number;
  shouldContinue = true;

  resultTimeAgo = "";

  constructor(createdAt: number) {
    this.createdAt = createdAt;
    this.diffTime = Math.floor(Date.now() - createdAt);
  }

  next(): StackNode {
    if (this.shouldContinue == false) throw new Error('Cannot next')

    const currenParam = this.params[this.idxParams];
    const compare = Math.floor(this.diffTime / currenParam.v.valueOf());
    
    if (compare <= 0 || compare < currenParam.l.valueOf()) this.shouldContinue = false;
    if (compare > 0) this.diffTime = compare;

    this.resultTimeAgo = `${this.diffTime} ${currenParam.t} ago!`.toLowerCase();
    
    return this;
  }

  isNext(): Boolean {
    this.idxParams += 1;

    if (this.idxParams == this.params.length) return false;

    return this.shouldContinue;
  }

  get(): string {
    return this.resultTimeAgo;
  }
}

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    const timeAgo = new TimeAgo(Number(value))
    while (timeAgo.isNext()) timeAgo.next();
    return timeAgo.get();
  }

}
