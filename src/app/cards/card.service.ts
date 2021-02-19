import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  allRecords;
  loader;
  backupRecords;
  constructor(private http: HttpClient) { }

  getAlldata(): Observable<any>{
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100');
  }

  getFilteredData(filter): Observable<any>{
    let apiUrl = '';
    if(filter){
      apiUrl = 'https://api.spaceXdata.com/v3/launches?limit=100'+filter;
    }
    else
    apiUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';
    return this.http.get(apiUrl);
  }
}
