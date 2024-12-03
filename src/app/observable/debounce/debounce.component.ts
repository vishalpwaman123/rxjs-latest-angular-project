import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrl: './debounce.component.css',
})
export class DebounceComponent implements AfterViewInit {
  @ViewChild('myInput') myInput!: ElementRef;
  @ViewChild('myInput1') myInput1!: ElementRef;
  DataStatus: string = '';
  DataStatus1: string = '';
  constructor(private loadingbar: LoadingBarService) {}
  ngAfterViewInit(): void {
    let searchText = fromEvent(this.myInput.nativeElement, 'keyup');
    searchText
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(1000)
      )
      .subscribe((res) => {
        console.log(res);
        this.DataStatus = res;
        this.loadingbar.start();
        // debugger;
        setTimeout(() => {
          this.DataStatus = '';
          this.loadingbar.stop();
        }, 2000);
      });

    let searchText1 = fromEvent(this.myInput1.nativeElement, 'keyup');
    searchText1
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((res) => {
        console.log(res);
        this.DataStatus1 = res;
        this.loadingbar.start();
        setTimeout(() => {
          this.DataStatus1 = '';
          this.loadingbar.stop();
        }, 2000);
      });
  }
}
