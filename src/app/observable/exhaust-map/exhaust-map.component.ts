import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { exhaustMap, filter, fromEvent } from 'rxjs';
import { SearchService } from '../../includes/common-utility/search.service';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrl: './exhaust-map.component.css',
})
export class ExhaustMapComponent implements AfterViewInit {
  clickCount: number = 0;
  count = 0;
  constructor(private _searchService: SearchService) {}
  @ViewChild('btn') btn!: ElementRef;
  ngAfterViewInit(): void {
    fromEvent(this.btn.nativeElement, 'click')
      .pipe(
        exhaustMap(() =>
          this._searchService.updateData(1, 'exhauseMap', ++this.clickCount)
        )
      )
      .subscribe((res) => {
        console.log(res);
        this.getData();
      });
  }

  getData(): void {
    this._searchService.getDataById(1).subscribe((res: any) => {
      console.log(res);
      this.count = res.data[0].age;
    });
  }
}
