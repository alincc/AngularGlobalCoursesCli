import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'agc-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationDialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<ConfirmationDialogComponent>) { }

  ngOnInit() {
  }

}
