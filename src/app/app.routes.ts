import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'time-intervals',
    },
    {
        path: 'time-intervals',
        loadChildren: () => import('./modules/time-intervals/time-intervals.module').then(m => m.TimeIntervalsModule),
    },
    {
        path: '**',
        redirectTo: '',
    },
];
