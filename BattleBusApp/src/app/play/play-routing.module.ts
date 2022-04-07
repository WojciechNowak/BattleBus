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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayPageRoutingModule {}
