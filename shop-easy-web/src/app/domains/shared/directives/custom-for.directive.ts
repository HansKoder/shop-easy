import { Directive, Input, IterableDiffer, IterableDiffers, TemplateRef, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[customFor]',
  standalone: true
})
export class CustomForDirective {

  private differ!: IterableDiffer<any>;

  template = inject(TemplateRef<any>);
  viewContainer = inject(ViewContainerRef);
  differs = inject(IterableDiffers);

  constructor() {
    this.differ = this.differs.find([]).create();
  }

  @Input()
  set appCustomFor (collection: Iterable<any>) {
    if (!this.differ) return;

    const changes = this.differ.diff(collection);
    console.log(changes);
    
    if (!changes) return;

    changes.forEachAddedItem((change) => {
      this.viewContainer.createEmbeddedView(this.template, {
        $implicit: change.item,
        index: change.currentIndex
      })
    })

    changes.forEachRemovedItem((change) => {
      this.viewContainer.remove(change.previousIndex as any);
    })
  }

}
