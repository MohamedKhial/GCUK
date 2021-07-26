import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { BaseService } from './base.service';
@Injectable({
  providedIn: 'root'
})
export class TodoService  extends BaseService {
apipath ="http://localhost:54093/api/"
  constructor(private http:HttpClient) {  super();}
  public errorMessage!: string;
  private formatErrors(error: any) {
    return throwError(error.error);
  }
  getTods():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
   return this.http.get(this.apipath+'TODS',httpOptions)
;
  }



  postTODS(body:any):Observable<any>{
   console.log(body);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
      
    };
  return  this.http.post(this.apipath+'TODS',   
  {value:body},httpOptions);
  }



  putTODS(oldvalue:any,newvalue:any):Observable<any>{
  
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    };
 // params = HttpParamsConverter.GetHttpParams(params, filterData, null);
    return  this.http.put(this.apipath+'TODS',{oldvalue:oldvalue, newvalue:newvalue}, httpOptions);
    }
    remove(id:any):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return  this.http.delete(this.apipath+'TODS/'+id,httpOptions);
      }
      put(path: string, body:any): Observable<any> {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          }),
        };
        return this.http.put(
          this.apipath+'TODS/',
          JSON.stringify(body),
          httpOptions
        );
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
