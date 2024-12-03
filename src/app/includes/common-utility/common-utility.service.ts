import { DOCUMENT } from '@angular/common';
import { Component, Inject, Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonUtilityComponent {
  //Globle Variable

  //IsPrime = new Subject<boolean>();
  IsPrime = new BehaviorSubject<boolean>(false);
  Result = new BehaviorSubject<string>('Before');
  ReplayData = new ReplaySubject<string>(3, 5000);
  asyncData = new AsyncSubject<string>();
  //
  constructor(@Inject(DOCUMENT) private documents: Document) {}
  print(data: any, elementTag: string): void {
    let element = this.documents.createElement('li');
    element.innerText = data.toString();
    this.documents.getElementById(elementTag)?.appendChild(element);
  }

  printlookup(array: any[], elementTag: string): void {
    array.length > 0
      ? array.forEach((item) => {
          let element1 = this.documents.createElement('li');
          element1.innerText = item.a;
          let element2 = this.documents.createElement('li');
          element2.innerText = item.b;
          let element3 = this.documents.createElement('li');
          element3.innerText = item.c;
          document
            .getElementById(elementTag)
            ?.appendChild(element1)
            ?.appendChild(element2)
            ?.appendChild(element3);
        })
      : null;
  }

  printObject(object: any, elementTag: string): void {
    let element1 = this.documents.createElement('li');
    element1.innerText = object.a;
    let element2 = this.documents.createElement('li');
    element2.innerText = object.b;
    let element3 = this.documents.createElement('li');
    element3.innerText = object.c;
    document
      .getElementById(elementTag)
      ?.appendChild(element1)
      ?.appendChild(element2)
      ?.appendChild(element3);
  }
}
