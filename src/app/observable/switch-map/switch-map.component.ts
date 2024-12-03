import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  concatMap,
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  from,
  map,
  Observable,
  of,
  pluck,
  switchAll,
  switchMap,
  tap,
} from 'rxjs';
import { CommonUtilityComponent } from '../../includes/common-utility/common-utility.service';
import { SearchService } from '../../includes/common-utility/search.service';
import { SearchResponse } from '../../appInterface/search.interface';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.css',
})
export class SwitchMapComponent implements OnInit, AfterViewInit {
  @ViewChild('searchForm') searchForm!: NgForm;
  arrList = ['Tech', 'Cartoon', 'News'];
  SearchResult: SearchResponse[] = [];
  SearchCount: number = 0;
  constructor(
    private _commonUtilityComponent: CommonUtilityComponent,
    private _searchService: SearchService
  ) {}
  ngOnInit(): void {
    //Example 1
    from(this.arrList)
      .pipe(map((x) => this.getData(x)))
      .subscribe((res) => {
        console.log(res);
        this._commonUtilityComponent.print(res, 'elContainer1');
      });

    //Example 2
    from(this.arrList)
      .pipe(
        map((x) => this.getData(x)),
        switchAll()
      )
      .subscribe((res) => {
        console.log(res);
        this._commonUtilityComponent.print(res, 'elContainer2');
      });

    //Example 3
    from(this.arrList)
      .pipe(switchMap((x) => this.getData(x)))
      .subscribe((res) => {
        console.log(res);
        this._commonUtilityComponent.print(res, 'elContainer3');
      });
  }

  ngAfterViewInit(): void {
    const searchKeyword = this.searchForm.valueChanges;

    searchKeyword
      ?.pipe(
        // tap((x) => {
        //   console.log('X : ', x);
        // }),
        pluck('searchKeyword'),
        filter((x) => x !== ''),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((res) => this._searchService.getSearch(res))
      )
      .subscribe((res) => {
        console.log(res);
        this.SearchResult = res as SearchResponse[];
        this.SearchCount = res === null ? 0 : this.SearchResult.length;
      });
  }

  getData(data: string): Observable<string> {
    return of(data + ' Video Uploaded').pipe(delay(2000));
  }
}
