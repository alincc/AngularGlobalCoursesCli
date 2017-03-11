import {
  Component, OnInit, ElementRef, ChangeDetectorRef,
  AfterContentChecked, ViewChild
} from '@angular/core';

@Component({
  selector: 'agc-course-description',
  templateUrl: './course-description.component.html',
  styleUrls: ['./course-description.component.scss']
})
export class CourseDescriptionComponent implements OnInit, AfterContentChecked {

  public hasOverflow = false;
  public expanded = false;

  public blockHeight = '2.5em';

  @ViewChild('description') descriptionBlock: ElementRef;

  constructor(private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {}

  ngAfterContentChecked(): void {
    this.hasOverflow = this.descriptionBlock.nativeElement.offsetHeight < this.descriptionBlock.nativeElement.scrollHeight;
    this.cdRef.detectChanges();
  }

  public triggerExpand() {
    if (this.expanded) {
      this.blockHeight = '2.5em';
    } else {
      this.blockHeight = this.descriptionBlock.nativeElement.scrollHeight + 'px';
    }
    setTimeout(() => this.hasOverflow = true, 100);


    this.expanded = !this.expanded;
  }

}
