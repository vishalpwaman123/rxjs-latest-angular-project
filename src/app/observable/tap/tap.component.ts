import { Component, OnInit } from '@angular/core';
import { CommonUtilityComponent } from '../../includes/common-utility/common-utility.service';
import { Subscribable, Subscription, from, interval, map, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrl: './tap.component.css',
})
export class TapComponent implements OnInit {
  nameArray = ['Name1', 'Name2', 'Name3', 'Name4', 'Name5'];
  colorArray = ['red', 'blue', 'yellow', 'orange', 'violet', 'purple'];
  nameSubscribe: Subscription | undefined;
  colorSubscription: Subscription | undefined;
  customColor: string = 'black';
  constructor(private _commonUtility: CommonUtilityComponent) {}

  ngOnInit(): void {
    let intervals = interval(1000);

    // Example 01

    this.nameSubscribe = intervals
      .pipe(
        tap((x: any) => {
          console.log('tap 1 : ', x);
          if (this.nameArray[x] === undefined) {
            this.nameSubscribe?.unsubscribe();
          }
        }),
        map((x) => this.nameArray[x])
      )
      .subscribe((res) => {
        // console.log('Result : ', res);
        this._commonUtility.print(res, 'elContainer1');
      });

    // Example 02

    this.colorSubscription = intervals
      .pipe(
        tap((x: any) => {
          console.log('Tap 2 : ', x);
          if (this.colorArray[x] === undefined) {
            this.colorSubscription?.unsubscribe();
          }
        }),
        map((x) => this.colorArray[x])
      )
      .subscribe((res) => {
        // console.log('Result : ', res);
        this.customColor = res;
        this._commonUtility.print(res, 'elContainer2');
      });
  }
}
