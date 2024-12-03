import { Component, OnInit } from '@angular/core';
import { CommonUtilityComponent } from '../../includes/common-utility/common-utility.service';
import { concatAll, concatMap, delay, from, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.css',
})
export class ConcatMapComponent implements OnInit {
  array = ['Tech', 'Comedy', 'News'];
  constructor(private _commonUtilityComponent: CommonUtilityComponent) {}
  ngOnInit(): void {
    // Example - 01
    from(this.array)
      .pipe(map((x) => this.getData(x)))
      .subscribe((res) => {
        // console.log(res);
        this._commonUtilityComponent.print(res, 'elContainer1');
      });

    //Example-02
    from(this.array)
      .pipe(
        map((x) => this.getData(x)),
        concatAll()
      )
      .subscribe((res) => {
        console.log(res);
        this._commonUtilityComponent.print(res, 'elContainer2');
      });

    //Example-03
    from(this.array)
      .pipe(concatMap((x) => this.getData(x)))
      .subscribe((res) => {
        this._commonUtilityComponent.print(res, 'elContainer3');
      });
  }

  getData(data: string): Observable<string> {
    return of(data + ' Video Uploaded').pipe(delay(2000));
  }
}
