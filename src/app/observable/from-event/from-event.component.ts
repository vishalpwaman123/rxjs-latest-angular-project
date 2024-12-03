import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.css',
})
export class FromEventComponent {
  constructor() {} 

  @ViewChild('addBtn')
  addBtn!: ElementRef;

  @ViewChild('subBtn')
  subBtn!: ElementRef;

  ngAfterViewInit(): void {
    let Count = 0;
    fromEvent(this.addBtn?.nativeElement, 'click').subscribe((res) => {
      console.log('Add Btn', this.addBtn);
      this.print(Count);
      Count++;
    });

    fromEvent(this.subBtn?.nativeElement, 'click').subscribe((res) => {
      console.log('Sub Btn', this.subBtn);
      this.remove();
    });
  }

  print(count: number): void {
    let element = document.createElement('li');
    element.innerText = 'Vishal ' + count;
    document.getElementById('elContainer')?.appendChild(element);
  }

  remove(): void {
    const el = document.getElementById('elContainer');
    console.log('remove el : ', el);
    if (el && el.lastChild) {
      el.removeChild(el.lastChild);
    }
  }
}
