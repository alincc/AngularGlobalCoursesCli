import {
  Component, OnInit, ChangeDetectionStrategy, ViewChild, Renderer2, ElementRef, AfterViewChecked,
} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'agc-course-description',
  templateUrl: './course-description.component.html',
  styleUrls: ['./course-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('expanded', [
      state('collapsed', style({height: '2.5em'})),
      state('expanded', style({height: '*'})),
      transition('* <=> *', animate('300ms ease-out'))
    ])
  ]
})
export class CourseDescriptionComponent implements OnInit, AfterViewChecked {

  @ViewChild('descriptionContainer')
  private cont: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewChecked() {

    if (40 < this.cont.nativeElement.scrollHeight) {
      this.renderer.listen(this.cont.nativeElement, 'mouseenter', () => this.expand());
      this.renderer.listen(this.cont.nativeElement, 'mouseleave', () => this.collapse());
    }
  }

  ngOnInit() {
  }

  public expand() {
    this.renderer.setProperty(this.cont.nativeElement, '@expanded', 'expanded');
  }

  public collapse() {
    this.renderer.setProperty(this.cont.nativeElement, '@expanded', 'collapsed');
  }
}
