import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MasterComponent } from './master/master.component';
import { PlayerComponent } from './player/player.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path: 'master',
        component: MasterComponent,
      },
      {
        path: 'master/user-management',
        component: UserManagementComponent
      },
      {
        path: 'master/character/:id',
        component: CharacterDetailComponent
      },
      {
        path: 'player',
        component: PlayerComponent
      },
      {
        path: 'player/user-management',
        component: UserManagementComponent
      },     
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
