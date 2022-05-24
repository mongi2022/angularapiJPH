import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent } from '../agent';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-detailsagents',
  templateUrl: './detailsagents.component.html',
  styleUrls: ['./detailsagents.component.scss']
})
export class DetailsagentsComponent implements OnInit {

  idAgent!: number;
  agent: Agent=new Agent(5,'Fedy','Belaid','test@gmail.com');


  constructor(private agentService:AgentService, private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.idAgent= Number(this.route.snapshot.params['id']);
    this.agentService.getAgentById(this.idAgent).subscribe((data)=>{
      console.log(`########################### Loaded data: ${data}`);
      this.agent=data;
    })
    // this.getAgentById();
  }


}
