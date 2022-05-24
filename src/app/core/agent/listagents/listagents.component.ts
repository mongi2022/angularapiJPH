import { Component, OnInit } from '@angular/core';
import { Agent } from '../agent';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-listagents',
  templateUrl: './listagents.component.html',
  styleUrls: ['./listagents.component.scss']
})
export class ListagentsComponent implements OnInit {

  agents!: Agent[];


  constructor(private _agentService:AgentService) { }

  ngOnInit(): void {
    this.getAllAgents();
  }

  getAllAgents(){
    this._agentService.getAllAgents().subscribe((data)=>{
      this.agents=data;
      console.log(this.agents);
    })
  }

}
