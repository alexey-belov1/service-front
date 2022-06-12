import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from '../layouts/main-layout/main-layout.component';


const routes: Routes = [
    {
        path: '', component: MainLayoutComponent, children: [
            {path: '', redirectTo: '/', pathMatch: 'full'},
            {
                path: '',
                loadChildren: () => import('../entities/services-page/services-page.module').then(m => m.ServicesPageModule)
            },
            {
              path: 'create-service',
              loadChildren: () => import('../entities/create-service-page/create-service-page.module').then(m => m.CreateServicePageModule)
            },
            {
                path: 'login',
                loadChildren: () => import('../entities/login-page/login-page.module').then(m => m.LoginPageModule)
            }
        ]
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
