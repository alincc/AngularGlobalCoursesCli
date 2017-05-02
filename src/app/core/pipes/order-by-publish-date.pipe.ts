import {Pipe, PipeTransform} from '@angular/core';
import {Course} from '../entities/Course';


@Pipe({
  name: 'orderByPublishDate'
})
export class OrderByPublishDatePipe implements PipeTransform {
  transform(courses?: Course[]): Course[] {
    return Array.isArray(courses) ? courses.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else if (a.date > b.date) {
        return -1;
      } else {
        return 0;
      }
    }) : [];
  }
}
