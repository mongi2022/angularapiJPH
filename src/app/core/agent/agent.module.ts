import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { ListagentsComponent } from './listagents/listagents.component';
import { DetailsagentsComponent } from './detailsagents/detailsagents.component';
import { UpdateagentsComponent } from './updateagents/updateagents.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    ListagentsComponent,
    DetailsagentsComponent,
    UpdateagentsComponent
  ],
  imports: [
    CommonModule,
    AgentRoutingModule,
    HttpClientModule,
  ]
})
export class AgentModule { }
