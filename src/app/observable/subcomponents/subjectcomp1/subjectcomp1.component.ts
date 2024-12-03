import { Component, OnInit } from '@angular/core';
import { CommonUtilityComponent } from '../../../includes/common-utility/common-utility.service';

@Component({
  selector: 'app-subjectcomp1',
  templateUrl: './subjectcomp1.component.html',
  styleUrl: './subjectcomp1.component.css',
})
export class Subjectcomp1Component implements OnInit {
  Result: string = '';
  constructor(private _commonUtilityComponent: CommonUtilityComponent) {}

  ngOnInit(): void {
    this._commonUtilityComponent.Result.subscribe((res: string) => {
      this.Result = res;
    });
  }

  onChange(result: any): void {
    this._commonUtilityComponent.Result.next(result.value);
  }
}
