import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './states/home/home.component';
import { TwoWayBindingComponent } from './states/two-way-binding/two-way-binding.component';
import { GameControlComponent } from './states/game-control/game-control.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'two-way-binding', component: TwoWayBindingComponent},
  {path: 'game-control', component: GameControlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, TwoWayBindingComponent, GameControlComponent];
