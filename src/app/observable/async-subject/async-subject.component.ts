import { Component, OnInit } from '@angular/core';
import { CommonUtilityComponent } from '../../includes/common-utility/common-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrl: './async-subject.component.css',
})
export class AsyncSubjectComponent implements OnInit {
  AsyncData: string = '';
  constructor(private _commonUtilityComponent: CommonUtilityComponent) {}
  ngOnInit(): void {
    this._commonUtilityComponent.asyncData.subscribe((res) => {
      console.log('AsyncData Result : ', res);
      this.AsyncData = res;
    });
  }

  handleSubmit(myInput: any) {
    console.log('myInput Data : ', myInput.value);
    this._commonUtilityComponent.asyncData.next(myInput.value);
  }

  handleComplete() {
    this._commonUtilityComponent.asyncData.complete();
  }
}
