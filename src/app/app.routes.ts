import {Routes} from '@angular/router';
import { MainPage } from './pages/main.page';
import { SemesterPage} from './pages/semester.page'
import { SubjectPage } from './pages/subject.page'
export const routes: Routes = [
{
    path: '',
    component: MainPage,
},
{
    path: 'semester/:semesterId',
    component: SemesterPage,
},
{
    path: 'semester/:semesterId/subject/:subjectId',
    component: SubjectPage,
}

]