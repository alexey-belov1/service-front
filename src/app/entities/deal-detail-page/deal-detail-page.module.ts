import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {dealDetailPageRoute} from './deal-detail-page.route';
import { DealDetailComponent } from './deal-detail.component';

@NgModule({
    imports: [SharedModule, RouterModule.forChild(dealDetailPageRoute)],
    declarations: [DealDetailComponent],
    exports: [RouterModule]
})
export class DealDetailPageModule {}
