import {Component, OnInit} from '@angular/core';
import {LoaderBlockService} from './loader-block.service';

@Component({
  selector: 'agc-loader-block',
  templateUrl: './loader-block.component.html',
  styleUrls: ['./loader-block.component.scss']
})
export class LoaderBlockComponent implements OnInit {

  public visible;

  constructor(private loaderBlockService: LoaderBlockService) {
  }

  ngOnInit() {
    this.visible = this.loaderBlockService.visible;
  }

}
