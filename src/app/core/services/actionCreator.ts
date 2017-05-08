import { Injectable } from '@angular/core';

export class ActionCreator<T> {
  constructor(
    public type: string = 'NOT_SET',
    public payload?: T
  ) {}
}
@Injectable()
export class ActionCreatorFactory {
  static create?<T>(type: string, defaultPayloadValue?: any) {
    return (payload?: T): ActionCreator<T> => {
      const _payload = payload || typeof payload !== 'undefined' ? payload : defaultPayloadValue;
      return new ActionCreator<T>(type, _payload);
    };
  }
}
