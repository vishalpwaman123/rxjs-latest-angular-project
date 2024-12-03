import { Component, OnInit } from '@angular/core';
import { concat, interval, map, merge, take } from 'rxjs';
import { CommonUtilityComponent } from '../../includes/common-utility/common-utility.service';

@Component({
  selector: 'app-concat-merge',
  templateUrl: './concat-merge.component.html',
  styleUrl: './concat-merge.component.css',
})
export class ConcatMergeComponent implements OnInit {
  constructor(private _commonUtilityComponent: CommonUtilityComponent) {}
  ngOnInit(): void {
    const techConst = interval(1000).pipe(
      map((x) => 'Tech Video ' + (x + 1)),
      take(5)
    );

    const comedyConst = interval(1000).pipe(
      map((x) => 'Comedy Video ' + (x + 1)),
      take(3)
    );

    const newsConst = interval(1000).pipe(
      map((x) => 'News Video ' + (x + 1)),
      take(4)
    );

    const concatConst = concat(techConst, comedyConst, newsConst);

    const mergeConst = merge(techConst, comedyConst, newsConst);

    concatConst.subscribe((res) => {
      // console.log(res);
      this._commonUtilityComponent.print(res, 'elContainer1');
    });

    mergeConst.subscribe((res) => {
      // console.log(res);
      this._commonUtilityComponent.print(res, 'elContainer2');
    });
  }
}
