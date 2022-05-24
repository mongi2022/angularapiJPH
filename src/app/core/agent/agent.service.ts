import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Agent } from './agent';


@Injectable({
  providedIn: 'root'
})
export class AgentService {

  usersURL= environment.baseAPI + "users"

  constructor(private _httpClient: HttpClient) { }

  getAllAgents(): Observable<Agent[]>{
    console.log(this.usersURL);
    return this._httpClient.get<Agent[]>(this.usersURL);
  }

  getAgentById(id: number): Observable<Agent>{
    return this._httpClient.get<Agent>(`${this.usersURL}/${id}`);
  }

  updateAgent(id:number, body: Agent): Observable<Agent> {
    return this._httpClient.put<Agent>(`${this.usersURL}/${id}`, body);
  }
}
