import { Component, OnInit } from '@angular/core';
import { CommonUtilityComponent } from '../../includes/common-utility/common-utility.service';
import { Subscription, from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-toarray',
  templateUrl: './toarray.component.html',
  styleUrl: './toarray.component.css',
})
export class ToarrayComponent implements OnInit {
  sourceSubscribe: Subscription | undefined;
  array = [
    { name: 'Vishal', skill: 'Front End Developer' },
    { name: 'Rahul', skill: 'Back End Developer' },
    { name: 'Prabhakar', skill: 'Full Stack Developer' },
  ];
  
  ngOnInit(): void {
    //Example 1
    const intervalSource = interval(1000);
    this.sourceSubscribe = intervalSource
      .pipe(take(5), toArray())
      .subscribe((res) => {
        console.log('Interval Source : ', res);
      });

    //Example 2
    const observable1 = from(this.array);
    observable1.pipe(take(2), toArray()).subscribe((res) => {
      console.log('Observable1 Result : ', res);
    });

    //Example 3
    const observable2 = of('Vishal', 'Rahul', 'Prabhakar', 'Waman');
    observable2.pipe(take(2), toArray()).subscribe((res) => {
      console.log('Observable2 Result : ', res);
    });
  }
}
