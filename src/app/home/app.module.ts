import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AlertComponent} from '../layouts/alert/alert.component';
import {NavbarComponent} from '../layouts/navbar/navbar.component';
import {MainLayoutComponent} from '../layouts/main-layout/main-layout.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from '../shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from '../shared/interceptors/auth.interceptor';
import {ErrorHandlerInterceptor} from '../shared/interceptors/errorhandler.interceptor';
import {NotificationInterceptor} from '../shared/interceptors/notification.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        AlertComponent,
        NavbarComponent,
        MainLayoutComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
        SharedModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
