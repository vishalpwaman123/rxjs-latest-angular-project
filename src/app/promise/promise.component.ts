// import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.css',
})
export class PromiseComponent {
  // constructor(private httpClient: HttpClient) {}
  // ngOnInit(): void {
  //   this.getDataFromApi()
  //     .then((data) => {
  //       console.log('getDataFromApi response : ', data);
  //     })
  //     .catch((error) => {
  //       console.log('getDataFromAPI error : ', error);
  //     });
  // }
  // getDataFromApi(): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.httpClient.get<any>('https://api.restful-api.dev/objects?id=3').subscribe(
  //       (response) => {
  //         resolve(response);
  //       },
  //       (error) => {
  //         reject(error);
  //       }
  //     );
  //   });
  // }
}
