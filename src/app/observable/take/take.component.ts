import { Component, OnInit } from '@angular/core';
import { CommonUtilityComponent } from '../../includes/common-utility/common-utility.service';
import {
  from,
  fromEvent,
  interval,
  map,
  take,
  takeLast,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrl: './take.component.css',
})
export class TakeComponent implements OnInit {
  Array = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Six', 'Seven'];
  constructor(private _commonUtility: CommonUtilityComponent) {}
  ngOnInit(): void {
    //Example 01
    from(this.Array)
      .pipe(take(4))
      .subscribe((res) => {
        console.log('Result : ', res);
        this._commonUtility.print(res, 'elContainer1');
      });

    //Example 02
    from(this.Array)
      .pipe(takeLast(4))
      .subscribe((res) => {
        console.log('result : ', res);
        this._commonUtility.print(res, 'elContainer2');
      });

    //Example 03
    interval(1000)
      .pipe(
        takeUntil(fromEvent(document, 'click')),
        map((x) => 'Number ' + x)
      )
      .subscribe((res) => {
        console.log('Result : ', res);
        this._commonUtility.print(res, 'elContainer3');
      });
  }
}
