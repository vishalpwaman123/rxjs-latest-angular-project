import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, Observable, of } from 'rxjs';
import { CommonUtilityComponent } from '../../includes/common-utility/common-utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.css',
})
export class MergeMapComponent implements OnInit {
  arrList = ['Tech', 'Comedy', 'News'];
  constructor(private _commonUtilityComponent: CommonUtilityComponent) {}
  ngOnInit(): void {
    // Example - 01
    from(this.arrList)
      .pipe(map((x) => this.getData(x)))
      .subscribe((res) => {
        // res.subscribe((res) => {
        //   console.log(res);
        // });
        //console.log(res);
        this._commonUtilityComponent.print(res, 'elContainer1');
      });

    //Example - 02
    from(this.arrList)
      .pipe(
        map((x) => this.getData(x)),
        mergeAll()
      )
      .subscribe((res) => {
        // console.log(res);
        this._commonUtilityComponent.print(res, 'elContainer2');
      });

    //Example - 03
    from(this.arrList)
      .pipe(mergeMap((x) => this.getData(x)))
      .subscribe((res) => {
        console.log(res);
        this._commonUtilityComponent.print(res, 'elContainer3');
      });
  }

  getData(data: string): Observable<string> {
    return of(data + ' Video Uploaded');
  }
}
