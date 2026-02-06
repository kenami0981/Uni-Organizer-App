import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-term',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './term.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TermComponent {}
