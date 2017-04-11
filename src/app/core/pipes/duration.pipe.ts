import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(minutes: number): string {
    if (!minutes || Number.isNaN(minutes)) {
      return '';
    }

    if (minutes > 60) {
      return `${Math.trunc(minutes / 60)}h ${minutes % 60}min`;
    } else {
      return `${minutes % 60}min`;
    }
  }

}
