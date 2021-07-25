import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
apipath ="http://localhost:54093/api/"
  constructor(private http:HttpClient) { }
  public errorMessage!: string;

  getTods():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
   return this.http.get(this.apipath+'TODS',httpOptions);
  }
  postTODS(body:any):Observable<any>{
   console.log(body);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
  return  this.http.post(this.apipath+'TODS',JSON.stringify( body),httpOptions);
  }
  putTODS(body:any,id:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return  this.http.put(this.apipath+'TODS/'+id, body,httpOptions);
    }
    remove(id:any):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return  this.http.delete(this.apipath+'TODS/'+id,httpOptions);
      }

}
