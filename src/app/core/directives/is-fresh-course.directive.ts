import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[agcIsFreshCourse]'
})
export class IsFreshCourseDirective {

  @Input()
  set agcIsFreshCourse(publishDate: Date) {
    const currentDate = new Date();
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(currentDate.getDate() - 14);

    if (publishDate < currentDate && publishDate >= twoWeeksAgo) {
      this.renderer.addClass(this.el.nativeElement, 'fresh');
    } else if (publishDate > currentDate) {
      this.renderer.addClass(this.el.nativeElement, 'upcoming');
    }
  };

  constructor(private renderer: Renderer2, private el: ElementRef) {}


}
