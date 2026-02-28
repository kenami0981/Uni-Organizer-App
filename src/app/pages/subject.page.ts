import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import {SubjectComponent} from "../../../projects/lib/src/lib/adapters/primary/ui/subject.component";
@Component({ 
    selector: 'app-subject-page', 
    templateUrl: './subject.page.html', 
    imports: [SubjectComponent],
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true })
export class SubjectPage {
}
