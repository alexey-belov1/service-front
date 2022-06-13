import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from '../layouts/main-layout/main-layout.component';
import {AuthGuard} from '../shared/guards/auth.guard';


const routes: Routes = [
    {
        path: '', component: MainLayoutComponent, canActivate: [AuthGuard], children: [
            {path: '', redirectTo: '/deals', pathMatch: 'full'},
            {
                path: 'deals',
                loadChildren: () => import('../entities/deals-page/deals-page.module').then(m => m.DealsPageModule)
            },
            {
                path: 'deal',
                loadChildren: () => import('../entities/deal-detail-page/deal-detail-page.module').then(m => m.DealDetailPageModule)
            },
            {
                path: 'create-deal',
                loadChildren: () => import('../entities/create-service-page/create-deal-page.module').then(m => m.CreateDealPageModule)
            },
/*            {
                path: 'login',
                loadChildren: () => import('../entities/login-page/login-page.module').then(m => m.LoginPageModule)
            },*/
            {
                path: 'registration',
                loadChildren: () => import('../entities/registration-page/registration-page.module').then(m => m.RegistrationPageModule)
            }
        ]
    },
    {
        path: 'login',
        loadChildren: () => import('../entities/login-page/login-page.module').then(m => m.LoginPageModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
