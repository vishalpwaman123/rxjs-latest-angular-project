import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonUtilityComponent } from '../../includes/common-utility/common-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css',
})
export class SubjectComponent implements OnInit, OnDestroy {
  Result: string = '';
  constructor(private _commonUtilityComponent: CommonUtilityComponent) {}
  ngOnInit(): void {
    this._commonUtilityComponent.IsPrime.next(true);
    this._commonUtilityComponent.Result.subscribe((res) => {
      this.Result = res;
    });
  }

  ngOnDestroy(): void {
    this._commonUtilityComponent.IsPrime.next(false);
  }
}
