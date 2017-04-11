import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'agc-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DurationComponent implements OnInit {

  public duration: number;

  constructor() { }

  ngOnInit() {
  }

}
