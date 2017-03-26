import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'agc-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
