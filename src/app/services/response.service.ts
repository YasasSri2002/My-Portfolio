import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message} from '../model/message.model';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  private apiUrl = 'http://localhost:8080/response' 

  constructor(private http: HttpClient) { }

  public send(msg: Message): Observable<Message> {
    return this.http.post<Message>(this.apiUrl, msg);
}

}
