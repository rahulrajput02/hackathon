import { RouterModule, Routes } from '@angular/router';

import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';
import { UniversityComponent } from './university/university.component';
import { BlockComponent } from './block/block.component';

export const appRoutes: Routes = [


    { path: 'university', component: UniversityComponent, pathMatch: "full" },
    { path: '', component: StudentComponent, pathMatch: "full" },

    { path: 'college', component: CollegeComponent },
    { path: 'student', component: StudentComponent },
    { path: 'block', component: BlockComponent }

];

export const routing = RouterModule.forRoot(appRoutes);