import {Pipe, PipeTransform} from '@angular/core';
import {Course} from '../entities/Course';


@Pipe({
  name: 'orderByPublishDate'
})
export class OrderByPublishDatePipe implements PipeTransform {
  transform(courses: Course[]): Course[] {
    return courses.sort((a, b) => {
      if (a.publishDate < b.publishDate) {
        return 1;
      } else if (a.publishDate > b.publishDate) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}
