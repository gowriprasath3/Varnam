import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { text } from '@fortawesome/fontawesome-svg-core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private api="https://mailthis.to/gowriprasath01@gmail.com"

  constructor(private http:HttpClient) { }

  postMessage(input:any)
{
  return this.http.post(this.api,input,{responseType:'text'}).pipe(
    map(
      (response:any)=>{
        if(response){
          return response;
        }
      },
      (error:any)=>{
        return error;
      }
      )
    )
}
}
