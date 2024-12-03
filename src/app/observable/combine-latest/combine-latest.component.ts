import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  combineLatest,
  forkJoin,
  fromEvent,
  map,
  pluck,
  take,
  withLatestFrom,
  zip,
} from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrl: './combine-latest.component.css',
})
export class CombineLatestComponent implements AfterViewInit {
  nameList = ['', 'Vishal', 'Rahul', 'Prabhakar', 'Kalpana', 'Aparna'];
  colorList = ['', 'red', 'violet', 'blue', 'pink', 'brown', 'purple'];

  @ViewChild('name') name!: ElementRef;
  @ViewChild('color') color!: ElementRef;

  constructor() {}
  ngAfterViewInit(): void {
    let nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(
      map((event) => event.target.value),
      //take(3) // take() operator used when taking forkJoin example 
    );

    let colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(
      pluck('target', 'value'),
      //take(2) // take() operator used when taking forkJoin example
    );

    //CombineLatest Example

    combineLatest(nameObs, colorObs).subscribe(([name, color]) => {
      console.log(name, ' ', color);
      this.createBox(name, color, 'elContainer1');
    });

    // WithLatestFrom Example

    nameObs.pipe(withLatestFrom(colorObs)).subscribe(([name, color]) => {
      console.log(name, color);
      this.createBox(name, color, 'elContainer2');
    });

    // Zip Example

    zip(nameObs, colorObs).subscribe(([name, color]) => {
      console.log(name, color);
      this.createBox(name, color, 'elContainer3');
    });

    // ForkJoin Example

    forkJoin(nameObs, colorObs).subscribe(([name, color]) => {
      console.log(name, color);
      this.createBox(name, color, 'elContainer4');
    });
  }

  createBox(name: string, color: string, containerId: string) {
    let element = document.createElement('div');
    element.innerText = name;
    let classes = color + ' box';
    element.setAttribute('class', 'box');
    element.setAttribute('style', 'background-color:' + color);
    document.getElementById(containerId)?.appendChild(element);
  }
}
