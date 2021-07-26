import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
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
  putTODS(oldvalue:any,newvalue:any):Observable<any>{
    let params = new HttpParams();
    params = params.append('oldvalue', oldvalue);
    params = params.append('newvalue', newvalue);
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      }),
      params
    };
 // params = HttpParamsConverter.GetHttpParams(params, filterData, null);
    return  this.http.put(this.apipath+'TODS', httpOptions);
    }
    remove(id:any):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return  this.http.delete(this.apipath+'TODS/'+id,httpOptions);
      }


      // puts(path: string, body:any): Observable<any> {
      //   const httpOptions = {
      //     headers: new HttpHeaders({
      //       'Content-Type': 'application/json'
      //     }),
      //   };
      //   return this.http.put(
      //     `${this.apipath}${path}`,
      //     JSON.stringify(body),
      //     httpOptions
      //   );
      // }
}
