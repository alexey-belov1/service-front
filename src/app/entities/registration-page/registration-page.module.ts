import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {registrationPageRoute} from './registration-page.route';
import {RegistrationPageComponent} from './registration-page.component';

@NgModule({
    imports: [SharedModule, RouterModule.forChild(registrationPageRoute)],
    declarations: [RegistrationPageComponent],
    exports: [RouterModule]
})
export class RegistrationPageModule {}
