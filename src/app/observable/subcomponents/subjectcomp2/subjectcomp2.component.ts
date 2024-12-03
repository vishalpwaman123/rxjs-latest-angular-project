import { Component, OnInit } from '@angular/core';
import { CommonUtilityComponent } from '../../../includes/common-utility/common-utility.service';

@Component({
  selector: 'app-subjectcomp2',
  templateUrl: './subjectcomp2.component.html',
  styleUrl: './subjectcomp2.component.css'
})
export class Subjectcomp2Component implements OnInit {
  Result: string = '';
  constructor(private _commonUtilityComponent: CommonUtilityComponent) {}

  ngOnInit(): void {
    this._commonUtilityComponent.Result.subscribe((res) => {
      this.Result = res;
    });
  }

  onChange(result: any): void {
    this._commonUtilityComponent.Result.next(result.value);
  }
}
