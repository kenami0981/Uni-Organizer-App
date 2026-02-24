import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({ 
    selector: 'app-semester-page', 
    templateUrl: './semester.page.html', 
    encapsulation: ViewEncapsulation.None, 
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush })
export class SemesterPage {
}
