import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { MasterComponent } from './master/master.component';
import { PlayerComponent } from './player/player.component';
import { LoadingModule } from "../../shared/loading/loading.module";
import { UserManagementComponent } from './user-management/user-management.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

@NgModule({
  declarations: [HomeComponent, MasterComponent, PlayerComponent, UserManagementComponent, CharacterDetailComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, LoadingModule],
})
export class HomeModule {}
