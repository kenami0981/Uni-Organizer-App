import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import {TermComponent} from "../../../projects/lib/src/lib/adapters/primary/ui/term.component";
@Component({ 
  selector: 'app-main-page',
  standalone: true,
  templateUrl: './main.page.html', 
  imports: [TermComponent],
  styleUrls: ['./main.page.scss'],
  encapsulation: ViewEncapsulation.None, 
  changeDetection: ChangeDetectionStrategy.OnPush })
export class MainPage {

}
