import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http
    .get('https://themealdb.com/api/json/v1/1/categories.php');
  }
}
