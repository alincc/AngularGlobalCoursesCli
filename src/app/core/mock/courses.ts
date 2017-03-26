import {uniqueId} from 'lodash';
import {Course} from '../entities/Course';

export const mockCourses: Course[] = [
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
