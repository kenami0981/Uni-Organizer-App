import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import {SemesterComponent} from "../../../projects/lib/src/lib/adapters/primary/ui/semester.component";
@Component({ 
    selector: 'app-semester-page', 
    templateUrl: './semester.page.html', 
    imports: [SemesterComponent],
    encapsulation: ViewEncapsulation.None, 
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush })
export class SemesterPage {
}
