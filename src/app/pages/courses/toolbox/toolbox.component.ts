import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'agc-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolboxComponent implements OnInit {

  public searchValue: string;

  constructor() {
  }

  ngOnInit() {
  }

  find() {
    console.log(this.searchValue);
  }

}
