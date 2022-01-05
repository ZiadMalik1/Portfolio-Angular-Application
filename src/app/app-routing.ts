import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-component';
import { RelatedCourseworkComponent } from './related-coursework/related-coursework.component';
import { ResearchComponentComponent } from './research-component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'research', component: ResearchComponentComponent },
    { path: 'courses', component: RelatedCourseworkComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
