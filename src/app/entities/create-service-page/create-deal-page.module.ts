import {RouterModule} from '@angular/router';
import {CreateDealPageComponent} from './create-deal-page.component';
import {SharedModule} from '../../shared/shared.module';
import {createDealPageRoute} from './create-deal-page.route';
import {NgModule} from '@angular/core';

@NgModule({
    imports: [SharedModule, RouterModule.forChild(createDealPageRoute)],
    declarations: [CreateDealPageComponent],
    exports: [RouterModule]
})
export class CreateDealPageModule {}
