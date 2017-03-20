import {Injectable} from '@angular/core';
import {Course} from '../../core/entities/Course';

import {uniqueId, find, findIndex, pullAllBy} from 'lodash';


@Injectable()
export class CoursesService {

  private courses: Course[] = [
    {
      id: uniqueId(),
      name: 'Video course 1',
      description: `The particle is more klingon now than transformator. 
                    boldly and mechanically cold. Diatria cadunts, tanquam teres cannabis. 
                    Mash a handfull tunas, chocolate, and dill in a large frying pan over medium heat, 
                    roast for a dozen minutes and enamel with some bagel.`,
      publishDate: new Date(),
      duration: 365
    },
    {
      id: uniqueId(),
      name: 'Video course 2',
      description: 'Ah, mark me pirate, ye weird sea!',
      publishDate: new Date(),
      duration: 365
    },
    {
      id: uniqueId(),
      name: 'Video course 3',
      description: 'Jolly roger, hoist me biscuit eater, ye evil wench!',
      publishDate: new Date(),
      duration: 365
    },
    {
      id: uniqueId(),
      name: 'Video course 4',
      description: 'The lagoon rises love like a stormy reef.',
      publishDate: new Date(),
      duration: 365
    },
  ];

  public getCourses(): Course[] {
    return this.courses;
  }

  public createCourse(course: Course): Course[] {
    course.id = uniqueId();
    this.courses.push(course);
    return this.courses;
  }

  public getCourse(courseId: string): Course {
    return find(this.courses, {id: courseId});
  }

  public updateCourse(course: Course) {
    const index = findIndex(this.courses, {id: course.id});
    this.courses[index] = course;
  }

  public removeCourse(courseId: number) {
    pullAllBy(this.courses, [{id: courseId}], 'id');
    return this.courses;
  }
}
