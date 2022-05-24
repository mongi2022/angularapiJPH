import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Agent } from '../agent';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-updateagents',
  templateUrl: './updateagents.component.html',
  styleUrls: ['./updateagents.component.scss']
})
export class UpdateagentsComponent implements OnInit {

  idAgent!: number;
  agent!:Agent;


  constructor(private agentService:AgentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idAgent= Number(this.route.snapshot.params['id']);
    this.agentService.getAgentById(this.idAgent).subscribe((data)=>{
      console.log(`########################### Loaded data: ${data}`);
      this.agent=data;
    });

    /* this.idAgent= Number(this.route.snapshot.params['id']);
    this.agentService.updateAgent(this.idAgent, this.agent).subscribe((data)=>{
      this.agent=data;
    }) */
  }
  updateAgent() {
    this.agentService.updateAgent(this.idAgent, this.agent).subscribe((data)=>{
      console.log('Agent updated');
    })
  }

}
