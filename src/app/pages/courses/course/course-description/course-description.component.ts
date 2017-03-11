import {
  Component, OnInit, trigger, state, transition, style, animate, ViewChild, ElementRef, AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'agc-course-description',
  templateUrl: './course-description.component.html',
  styleUrls: ['./course-description.component.scss'],
  animations: [
    trigger('expanded', [
      state('false', style({height: '2.5em'})),
      state('true', style({height: '*'})),
      transition('1 <=> 0', animate('300ms ease-out'))
    ])
  ]
})
export class CourseDescriptionComponent implements OnInit, AfterContentInit {

  public hasOverflow: boolean = null;
  public expanded = false;

  @ViewChild('descriptionContainer')
  descriptionBlock: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.checkOverflow();
  }

  public triggerExpand() {
    this.expanded = !this.expanded;
  }

  public checkOverflow() {
    if (!this.hasOverflow) {
      this.hasOverflow = this.descriptionBlock.nativeElement.offsetHeight < this.descriptionBlock.nativeElement.scrollHeight;
    }
  }


}
