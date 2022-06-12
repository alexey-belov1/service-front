import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {loginPageRoute} from './login-page.route';
import {LoginPageComponent} from './login-page.component';

@NgModule({
    imports: [SharedModule, RouterModule.forChild(loginPageRoute)],
    declarations: [LoginPageComponent],
    exports: [RouterModule]
})
export class LoginPageModule {}
