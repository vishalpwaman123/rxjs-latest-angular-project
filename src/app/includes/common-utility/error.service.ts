import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}

  handleError(error: HttpErrorResponse) {
    console.log(error);
    let errorMessage = '';
    if (error.status == 404) {
      errorMessage =
        'There is some unknown error. Please try again after sometime';
    } else if (error.status == 401) {
      errorMessage = "You don't have permission to access this content";
    }

    return throwError(errorMessage);
  }
}
