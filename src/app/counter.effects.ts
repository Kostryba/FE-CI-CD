import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { ActionTypes } from "./counter.actions";

@Injectable()
export class CounterEffects {
  // Listen for the 'LOGIN' action
  @Effect({dispatch: false})
  login$ = this.actions$.pipe(
    ofType(ActionTypes.Increment),
   map(action => {
      console.log('hello');
    }
      // this.http.post('/auth', action.payload).pipe(
      //   // If successful, dispatch success action with result
      //   map(data => ({ type: 'LOGIN_SUCCESS', payload: data })),
      //   // If request fails, dispatch failed action
      //   catchError(() => of({ type: 'LOGIN_FAILED' }))
      // )
    )
  );

  constructor( private actions$: Actions) {}
}
