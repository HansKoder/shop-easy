import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input({required: true}) duration = 0;

  counter = signal<number>(0);
  counterRef!: number | undefined;

  ngOnInit(): void {
    this.counterRef = window.setInterval(()=> {
      this.counter.update(statePrev => statePrev + 1);
    }, 1000)
  }

  ngOnDestroy(): void {
    window.clearInterval(this.counterRef);
  }

}
