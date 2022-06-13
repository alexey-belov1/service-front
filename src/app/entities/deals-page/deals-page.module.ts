import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {dealsPageRoute} from './deals-page.route';
import {DealsPageComponent} from './deals-page.component';

@NgModule({
    imports: [SharedModule, RouterModule.forChild(dealsPageRoute)],
    declarations: [DealsPageComponent],
    exports: [RouterModule]
})
export class DealsPageModule {}
