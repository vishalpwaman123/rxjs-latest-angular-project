import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { catchError, fromEvent } from 'rxjs';
import { ErrorService } from '../../includes/common-utility/error.service';

@Component({
  selector: 'app-throw-catch-error',
  templateUrl: './throw-catch-error.component.html',
  styleUrl: './throw-catch-error.component.css',
})
export class ThrowCatchErrorComponent {
  GetOperation = 'https://localhost:7010/api/Crud/GetOperations';
  error: string = '';
  isError: boolean = false;

  @ViewChild('getDetail') getDetail!: ElementRef;

  constructor(
    private _httpClient: HttpClient,
    private _errorService: ErrorService
  ) {}
  getEmployeeDetail(): void {
    this._httpClient
      .get(this.GetOperation)
      .pipe(catchError(this._errorService.handleError))
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.error(err);
          this.error = err;
          this.isError = true;
        },
      });
  }
}
