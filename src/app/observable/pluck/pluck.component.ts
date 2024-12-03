import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrl: './pluck.component.css',
})
export class PluckComponent implements OnInit {
  data: any[] = [];
  data1: any[] = [];
  array = [
    {
      name: 'Vishal',
      skill: 'C#',
      job: {
        title: '.Net Developer',
        experience: '4 Years',
      },
    },
    {
      name: 'Rahul',
      skill: 'Java',
      job: {
        title: 'Java Developer',
        experience: '5 Years',
      },
    },
    {
      name: 'Prabhakar',
      skill: 'C',
      job: {
        title: 'Os Developer',
        experience: '6 Years',
      },
    },
    {
      name: 'Abhijeet',
      skill: 'c++',
      job: {
        title: 'Game Developer',
        experience: '7 Years',
      },
    },
    {
      name: 'Vishal',
      skill: 'C#',
      job: {
        title: '.Net Developer',
        experience: '4 Years',
      },
    },
  ];
  constructor() { }
  ngOnInit(): void {

    from(this.array)
      .pipe(pluck('name'), toArray())
      .subscribe((res) => {
        console.log('Result : ', res);
        this.data = res;
      });

    from(this.array)
      .pipe(
        // map((x) => x.job.title),
        pluck('job', 'title'),
        toArray()
      )
      .subscribe((res) => {
        console.log('Result : ', res);
        this.data1 = res;
      });


  }
}
