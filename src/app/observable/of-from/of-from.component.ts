import { Component, OnInit } from '@angular/core';
import { CommonUtilityComponent } from '../../includes/common-utility/common-utility.service';
import { from, of, toArray } from 'rxjs';
import { resolve } from 'path';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.css',
})
export class OfFromComponent implements OnInit {
  object1 = { fName: '', mName: '', lName: '' };

  constructor(private commonUtilityComponent: CommonUtilityComponent) {}

  ngOnInit(): void {
    // Of - Example 1
    const Observable1 = of('Vishal', 'Prabhakar', 'Waman');
    Observable1.subscribe((res) => {
      console.log('Of Example 1 : ', res);
      this.commonUtilityComponent.print(res, 'elContainer1');
    });

    // Of - Example 11
    const Observable11 = of(1, 2, 'String');
    Observable11.subscribe((res) => {
      console.log('Of Example 11 : ', res);
      this.commonUtilityComponent.print(res, 'elContainer11');
    });

    // Of - Example 2
    const Observable2 = of({
      fName: 'Vishal',
      mName: 'Prabhakar',
      lName: 'Waman',
    });
    Observable2.subscribe((res) => {
      console.log('Of Example 2 : ', res);
      this.object1 = res;
    });

    // Of - Example 22
    const Array = [
      {
        a: 'A1',
        b: 'B1',
        c: 'C1',
      },
      {
        a: 'A2',
        b: 'B2',
        c: 'C2',
      },
    ];
    const Observable22 = of(Array);

    Observable22.subscribe((res) => {
      console.log('Of Example 22 : ', res);
      this.commonUtilityComponent.printlookup(res, 'elContainer22');
    });

    // From - Example 1
    const Observable3 = from(['Vishal', 'Prabhakar', 'Waman']);
    Observable3.subscribe((res) => {
      console.log('From Example 3 : ', res);
      this.commonUtilityComponent.print(res, 'elContainer3');
    });

    //From - Example 2
    const promise = new Promise((resolve) => {
      resolve('Promise Resolved');
    });

    const Observable4 = from(promise);
    Observable4.subscribe((res: any) => {
      console.log('From Example 4 : ', res);
      this.commonUtilityComponent.print(res.toString(), 'elContainer4');
    });

    const Observable5 = from('Welcome To V Coder');
    Observable5.subscribe((res) => {
      console.log('From Example 5 : ', res);
      this.commonUtilityComponent.print(res, 'elContainer5');
    });

    const Observable55 = from(Array);
    Observable55.pipe(toArray()).subscribe((res) => {
      console.log('From Example 55 : ', res);
      this.commonUtilityComponent.printlookup(res, 'elContainer55');
    });
  }
}
