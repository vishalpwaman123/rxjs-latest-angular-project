import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../includes/common-utility/search.service';
import { HttpClient } from '@angular/common/http';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrl: './share-replay.component.css',
})
export class ShareReplayComponent implements OnInit {
  GetOperation = 'https://localhost:7010/api/Crud/GetOperation';
  empArr: any[] = [];
  empArrObs: Observable<any> | undefined;
  empArrObs1: Observable<any> | undefined;
  empArrObs2: Observable<any> | undefined;

  constructor(private _httpClient: HttpClient) {}
  ngOnInit(): void {
    this.empArrObs = this._httpClient
      .get(this.GetOperation)
      .pipe(shareReplay());

    this.empArrObs1 = this.empArrObs.pipe(
      map((data) => data.filter((x: any) => x.id > 0 && x.id < 4))
    );

    this.empArrObs2 = this.empArrObs.pipe(
      map((data) => data.filter((x: any) => x.id > 3 && x.id < 8))
    );

    // this._httpClient.get<any>(this.GetOperation).subscribe((res) => {
    //   this.empArr = res.data;
    // });
  }
}
