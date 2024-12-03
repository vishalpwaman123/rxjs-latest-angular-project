import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResponse } from '../../appInterface/search.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  url = 'https://localhost:7010/api/Crud/GetOperationByName';
  updateUrl = 'https://localhost:7010/api/Crud/UpdateOperation';
  GetOperationById = 'https://localhost:7010/api/Crud/GetOperationById?Id=';
  GetOperation = 'https://localhost:7010/api/Crud/GetOperation';

  constructor(private _httpClient: HttpClient) {}

  getSearch(name: string): Observable<SearchResponse[]> {
    return this._httpClient.get<SearchResponse[]>(`${this.url}?name=${name}`);
  }

  updateData(_id: number, _name: string, _age: number): Observable<any> {
    return this._httpClient.patch<any>(this.updateUrl, {
      id: _id,
      name: _name,
      age: _age,
    });
  }

  getDataById(id: number): Observable<any> {
    return this._httpClient.get<any>(this.GetOperationById + id);
  }

  getAllData(): Observable<any> {
    return this._httpClient.get<any>(this.GetOperation);
  }
}
