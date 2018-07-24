import { RouterModule, Routes } from '@angular/router';

import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';
import { UniversityComponent } from './university/university.component';

export const appRoutes: Routes = [

   
    { path: '', component: UniversityComponent, pathMatch: "full" },

    { path: 'college', component: CollegeComponent },
    { path: 'student', component: StudentComponent }

];

export const routing = RouterModule.forRoot(appRoutes);