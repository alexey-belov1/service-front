import {RouterModule} from '@angular/router';
import {CreateServicePageComponent} from './create-service-page.component';
import {SharedModule} from '../../shared/shared.module';
import {createServicePageRoute} from './create-service-page.route';
import {NgModule} from '@angular/core';

@NgModule({
    imports: [SharedModule, RouterModule.forChild(createServicePageRoute)],
    declarations: [CreateServicePageComponent],
    exports: [RouterModule]
})
export class CreateServicePageModule {}
