import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonUtilityComponent } from '../../includes/common-utility/common-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css',
})
export class CustomComponent implements OnInit {
  techStatus: string = '';
  constructor(private commonUtilityComponent: CommonUtilityComponent) {}
  ngOnInit(): void {
    // Example - 01

    const customObservable1 = new Observable((observer) => {
      setTimeout(() => {
        observer.next('Data Emit 1');
      }, 1000);
      setTimeout(() => {
        observer.next('Data Emit 2');
      }, 2000);
      setTimeout(() => {
        // observer.next('Data Emit 3');
        observer.error(new Error('Data Emit Error'));
        // observer.complete();
      }, 3000);
    });

    customObservable1.subscribe(
      {
        next: (data: any) => {
          console.log('Next : ', data);
          this.commonUtilityComponent.print(data.toString(), 'elContainer1');
          this.techStatus = '';
        },
        error: (error) => {
          debugger;
          console.log('Error : ', error);
          this.techStatus = 'error';
        },
        complete: () => {
          debugger;
          console.log('Completed');
          this.techStatus = 'complete';
        },
      }
      // console.log('result : ', res);
      //
    );

    
  }
}
