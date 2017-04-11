import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'agc-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateComponent implements OnInit {

  public date: Date;

  constructor() { }

  ngOnInit() {
  }

}
