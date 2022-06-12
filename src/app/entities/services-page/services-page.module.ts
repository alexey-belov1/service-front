import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {servicesPageRoute} from './services-page.route';
import {ServicesPageComponent} from './services-page.component';

@NgModule({
    imports: [SharedModule, RouterModule.forChild(servicesPageRoute)],
    declarations: [ServicesPageComponent],
    exports: [RouterModule]
})
export class ServicesPageModule {}
