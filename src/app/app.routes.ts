import {Routes} from '@angular/router';
import { MainPage } from './pages/main.page';
import { SemesterPage} from './pages/semester.page'
export const routes: Routes = [
{
    path: '',
    component: MainPage,
},
{
    path: 'semester/:id',
    component: SemesterPage,
}

]