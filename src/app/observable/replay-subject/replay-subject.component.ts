import { Component, OnInit } from '@angular/core';
import { CommonUtilityComponent } from '../../includes/common-utility/common-utility.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.css',
})
export class ReplaySubjectComponent implements OnInit {
  userArr1: string[] = [];
  userArr2: string[] = [];
  userArr3: string[] = [];
  //Button Flag
  User2ButtonStatus: boolean = false;
  User3ButtonStatus: boolean = false;
  IsToggle: boolean = true;
  //
  User2Subscription2: Subscription | undefined;
  User2Subscription3: Subscription | undefined;
  ToggleSubscription: Subscription | undefined;

  constructor(private _commonUtility: CommonUtilityComponent) {}

  ngOnInit(): void {
    this._commonUtility.ReplayData.subscribe((res) => {
      this.userArr1.push(res);
      // console.log('Replay Data : ', res);
    });
  }

  handleAdd(myInput: any): void {
    console.log('Input : ', myInput.value);
    // this.userArr1.push(myInput.value);
    this._commonUtility.ReplayData.next(myInput.value);
  }

  handleSubscribe2Btn(): void {
    if (!this.User2ButtonStatus) {
      this.User2Subscription2 = this._commonUtility.ReplayData.subscribe(
        (res) => {
          console.log('Replay Data 2 : ', res);
          this.userArr2.push(res);
        }
      );
    } else {
      this.User2Subscription2?.unsubscribe();
    }
    this.User2ButtonStatus = !this.User2ButtonStatus;
  }

  handleSubscribe3Btn(): void {
    if (!this.User3ButtonStatus) {
      this.User2Subscription3 = this._commonUtility.ReplayData.subscribe(
        (res) => {
          console.log('Replay Data 2 : ', res);
          this.userArr3.push(res);
        }
      );
    } else {
      this.User2Subscription3?.unsubscribe();
    }
    this.User3ButtonStatus = !this.User3ButtonStatus;
  }

  handleToggle(): void {
    if (this.IsToggle) {
      this.ToggleSubscription = interval(1000).subscribe((res) => {
        this._commonUtility.ReplayData.next('Video ' + res);
      });
    } else {
      this.ToggleSubscription?.unsubscribe();
    }

    this.IsToggle = !this.IsToggle;
  }
}
