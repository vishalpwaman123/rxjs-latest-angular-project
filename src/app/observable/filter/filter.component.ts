import { Component, OnInit } from '@angular/core';
import { filter, from, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent implements OnInit {
  data: any[] = [];
  data1: any[] = [];
  data2: any[] = [];
  array = [
    {
      id: 1,
      name: 'Vishal',
      skill: 'C#',
      job: {
        title: '.Net Developer',
        experience: '4 Years',
      },
    },
    {
      id: 2,
      name: 'Rahul',
      skill: 'Java',
      job: {
        title: 'Java Developer',
        experience: '5 Years',
      },
    },
    {
      id: 3,
      name: 'Prabhakar',
      skill: 'C',
      job: {
        title: 'Os Developer',
        experience: '6 Years',
      },
    },
    {
      id: 4,
      name: 'Abhijeet',
      skill: 'c++',
      job: {
        title: 'Game Developer',
        experience: '7 Years',
      },
    },
    {
      id: 5,
      name: 'Vishal',
      skill: 'C#',
      job: {
        title: '.Net Developer',
        experience: '4 Years',
      },
    },
  ];
  array1 = [
    { id: 1, name: 'Name1', age: 21, gender: 'M' },
    { id: 2, name: 'Name2', age: 22, gender: 'F' },
    { id: 3, name: 'Name3', age: 23, gender: 'M' },
    { id: 4, name: 'Name4', age: 24, gender: 'F' },
    { id: 5, name: 'Name5', age: 25, gender: 'M' },
    { id: 6, name: 'Name6', age: 26, gender: 'F' },
    { id: 7, name: 'Name7', age: 27, gender: 'M' },
    { id: 8, name: 'Name8', age: 28, gender: 'F' },
    { id: 9, name: 'Name9', age: 29, gender: 'M' },
    { id: 10, name: 'Name10', age: 30, gender: 'F' },
    { id: 11, name: 'Name11', age: 31, gender: 'M' },
    { id: 12, name: 'Name12', age: 32, gender: 'F' },
    { id: 13, name: 'Name13', age: 33, gender: 'M' },
    { id: 14, name: 'Name14', age: 34, gender: 'F' },
    { id: 15, name: 'Name15', age: 35, gender: 'M' },
  ];
  constructor() {}
  ngOnInit(): void {
    from(this.array)
      .pipe(
        filter((x) => x.name.length > 6),
        // pluck('name'),
        toArray()
      )
      .subscribe((res) => {
        console.log('Result : ', res);
        this.data = res;
      });

    from(this.array1)
      .pipe(
        filter((x) => x.age > 22 && x.age < 27),
        toArray()
      )
      .subscribe((res) => {
        console.log('Result : ', res);
        this.data1 = res;
      });

    from(this.array1)
      .pipe(
        filter((x) => x.gender === 'M'),
        toArray()
      )
      .subscribe((res) => {
        console.log('Result : ', res);
        this.data2 = res;
      });
  }
}
