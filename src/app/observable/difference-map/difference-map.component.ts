import { Component, OnInit } from '@angular/core';
import { CommonUtilityComponent } from '../../includes/common-utility/common-utility.service';
import {
  concatMap,
  delay,
  from,
  mergeMap,
  Observable,
  of,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-difference-map',
  templateUrl: './difference-map.component.html',
  styleUrl: './difference-map.component.css',
})
export class DifferenceMapComponent implements OnInit {
  array = ['Tech', 'Comedy', 'News'];
  constructor(private _commonUtilityComponent: CommonUtilityComponent) {}
  ngOnInit(): void {
    //Example 01
    from(this.array)
      .pipe(mergeMap((x) => this.getData(x)))
      .subscribe((res) => {
        console.log(res);
        this._commonUtilityComponent.print(res, 'elContainer1');
      });

    //Example 02
    from(this.array)
      .pipe(concatMap((x) => this.getData(x)))
      .subscribe((res) => {
        console.log(res);
        this._commonUtilityComponent.print(res, 'elContainer2');
      });

    //Example 03
    from(this.array)
      .pipe(switchMap((x) => this.getData(x)))
      .subscribe((res) => {
        console.log(res);
        this._commonUtilityComponent.print(res, 'elContainer3');
      });
  }

  getData(data: string): Observable<string> {
    return of(data + ' Video Uploaded').pipe(delay(1000));
  }
}
