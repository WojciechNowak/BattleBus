import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayPage } from './play.page';

const routes: Routes = [
  {
    path: '',
    component: PlayPage
  },
  {
    path: 'battle',
    loadChildren: () => import('./battle/battle.module').then( m => m.BattlePageModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then( m => m.GamePageModule)
  },
  {
    path: 'setup',
    loadChildren: () => import('./setup/setup.module').then( m => m.SetupPageModule)
  },
  {
    path: 'reward',
    loadChildren: () => import('./reward/reward.module').then( m => m.RewardPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayPageRoutingModule {}
