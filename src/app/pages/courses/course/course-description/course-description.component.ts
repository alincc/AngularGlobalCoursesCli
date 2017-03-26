import {
  Component, OnInit, trigger, state, transition, style, animate, ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'agc-course-description',
  templateUrl: './course-description.component.html',
  styleUrls: ['./course-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('expanded', [
      state('false', style({height: '2.5em'})),
      state('true', style({height: '*'})),
      transition('1 <=> 0', animate('300ms ease-out'))
    ])
  ]
})
export class CourseDescriptionComponent implements OnInit {

  public expanded = false;

  constructor() {
  }

  ngOnInit() {
  }

  public expand() {
    this.expanded = true;
  }

  public collapse() {
    this.expanded = false;
  }
}
