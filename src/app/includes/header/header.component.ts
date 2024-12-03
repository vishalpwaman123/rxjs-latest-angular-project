import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonUtilityComponent } from '../common-utility/common-utility.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  IsPrime: boolean = false;

  constructor(private _commonUtilityComponent: CommonUtilityComponent) {}

  ngOnInit(): void {
    this._commonUtilityComponent.IsPrime.subscribe((res) => {
      this.IsPrime = res;
    });

    
  }
}
