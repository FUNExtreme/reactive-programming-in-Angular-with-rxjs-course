import { Component, OnInit } from '@angular/core';
import { of, Observable, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-operator-uppercase',
  template: '{{ uppercaseName$ | async }}'
})
export class OperatorUppercaseComponent {

  name$ = of('Robin Maenhaut');
  uppercaseName$ = this.name$.pipe(uppercase());
}

/**
 * Custom pipeable operator using existing operators
 */
export function uppercase(): OperatorFunction<string, string> {
  return function uppercaseOperation(source: Observable<string>): Observable<string> {
    return source.pipe(map((value: string) => value.toUpperCase()));
  };
}

/**
 * You can also use a lambda like so
 */
export const uppercaseShorter = (): OperatorFunction<string, string> => {
  return (source: Observable<string>) => source.pipe(map((value: string) => value.toUpperCase()));
};

/**
 * And since pipeable operators return functions, you can further simplify like so
 */
export const uppercaseShortest = () => map((value: string) => value.toUpperCase());

