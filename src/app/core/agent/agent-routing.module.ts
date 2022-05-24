import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsagentsComponent } from './detailsagents/detailsagents.component';
import { ListagentsComponent } from './listagents/listagents.component';
import { UpdateagentsComponent } from './updateagents/updateagents.component';

const routes: Routes = [
  {path: '',component: ListagentsComponent},
  {path: 'details/:id',component: DetailsagentsComponent},
  {path: 'update/:id',component: UpdateagentsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentRoutingModule {}
