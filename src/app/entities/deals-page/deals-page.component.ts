import {Component, OnInit} from '@angular/core';
import {IDeal} from '../../shared/model/deal.model';
import {DealService} from '../../shared/services/deal.service';

@Component({
    selector: 'app-services-page',
    templateUrl: './deals-page.component.html',
    styleUrls: ['./deals-page.component.scss']
})
export class DealsPageComponent implements OnInit {

    deals: IDeal[] = [];

    constructor(private dealService: DealService) {
    }

    ngOnInit(): void {
        this.dealService.query().subscribe(res => {
            this.deals = res.body ? res.body : [];
        });
    }

}
