import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainPage } from './main.page';
import { TermComponent } from '../../../projects/src/lib/adapters/primary/ui/term.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MainPage }
    ]),
    TermComponent
  ],
  declarations: [MainPage]
})
export class MainPageModule {}

