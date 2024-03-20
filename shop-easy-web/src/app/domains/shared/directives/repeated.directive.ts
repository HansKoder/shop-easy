import { Directive, Input, SimpleChanges, TemplateRef, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[repeated]',
  standalone: true
})
export class RepeatedDirective {

  template = inject(TemplateRef<any>);
  viewContainer = inject(ViewContainerRef);

  @Input() times!: number;

  ngOnChanges(changes: SimpleChanges): void {
    const changeItems = changes['times'];
    if (!changeItems) return;

    this.viewContainer.clear();

    const v = changeItems.currentValue;
    if (!v || v === null || v < 0 ) return;
    
    for (let i = 0; i < v; i++) this.viewContainer.createEmbeddedView(this.template);
  }

}
