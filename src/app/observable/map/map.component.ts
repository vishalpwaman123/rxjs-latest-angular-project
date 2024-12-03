import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, map } from 'rxjs';
import { CommonUtilityComponent } from '../../includes/common-utility/common-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent implements OnInit {
  broadcastSub1: Subscription | undefined;
  broadcastSub2: Subscription | undefined;
  msgText: string = '';
  object = [
    { id: 1, name: 'Vishal' },
    { id: 2, name: 'Rahul' },
    { id: 3, name: 'Prabhakar' },
    { id: 4, name: 'Kalpana' },
    { id: 5, name: 'Aparna' },
    { id: 6, name: 'waman' },
    { id: 7, name: 'chaudhari' },
  ];
  constructor(private commonUtilityComponent: CommonUtilityComponent) {}

  ngOnInit(): void {
    //Example - 01
    const broadInterval = interval(1000);
    this.broadcastSub1 = broadInterval
      .pipe(map((x) => 'Video ' + x * 10))
      .subscribe((res) => {
        console.log('Result : ', res);
        this.msgText = res;
      });

    //Example - 02
    const broadConstant = from(this.object);
    this.broadcastSub2 = broadConstant
      .pipe(map((x) => x.name))
      .subscribe((res) => {
        console.log('Result : ', res);
        this.commonUtilityComponent.print(res, 'elContainer1');
      });
  }
}
