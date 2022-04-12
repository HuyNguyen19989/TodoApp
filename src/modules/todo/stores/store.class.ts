/**
  - output: streamline
  - method:
   - updateState
   - getState

   **/

import { BehaviorSubject } from "rxjs";

export class Store<T> extends BehaviorSubject<T> {
  getState(): T {
    // TODO: add deep clone here to avoid object, array mutation issue
    return this.getValue();
  }
  updateState(data: Partial<T>) {
    try {
      this.next({
        ...this.getState(),
        ...data
      });
    } catch (e) {
      console.error(e);
    }
  }
}
