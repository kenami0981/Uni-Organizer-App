import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPage } from './pages/main.page';
import {TermComponent} from "../../projects/lib/src/lib/adapters/primary/ui/term.component"
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainPage, TermComponent],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Uni-organizer');
}
