import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrl: './retry.component.css',
})
export class RetryComponent implements OnInit {
  //   {
  //     "id": "7",
  //     "name": "Apple MacBook Pro 16",
  //     "data": {
  //         "year": 2019,
  //         "price": 1849.99,
  //         "CPU model": "Intel Core i9",
  //         "Hard disk size": "1 TB"
  //     }
  // }
  userData: any = null;
  fetching: boolean = false;
  DataStatus: string = 'No Data';
  constructor(private _httpClient: HttpClient) {}
  ngOnInit(): void {}

  fetchDetails(): void {
    this.fetching = true;
    this.DataStatus = 'Fetching Data...';
    this._httpClient
      .get<any>('https://api.restful-api.dev/objects/7')
      .pipe(
        // retry(2)
        retryWhen((err) =>
          err.pipe(
            delay(3000),
            scan((retryCount) => {
              if (retryCount >= 5) {
                throw err;
              } else {
                retryCount += 1;
                console.log('Retry Count => ', retryCount);
                this.DataStatus = 'Retrying Attempt #' + retryCount;
                return retryCount;
              }
            }, 0)
          )
        )
      )
      .subscribe(
        {
          next: (res) => {
            console.log('Result : ', res);
            this.userData = res;
            this.fetching = false;
            this.DataStatus = 'Data Fetched';
          },
          error: (err) => {
            console.log('Error : ', err);
            this.fetching = false;
            this.DataStatus = 'Data Fetching Error';
          },
        }
      );
  }
}
