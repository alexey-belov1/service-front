import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DealService} from '../../shared/services/deal.service';
import {IDeal} from '../../shared/model/deal.model';

@Component({
    selector: 'app-deal-detail',
    templateUrl: './deal-detail.component.html',
    styleUrls: ['./deal-detail.component.scss']
})
export class DealDetailComponent implements OnInit {

    deal: IDeal = null;

    constructor(
        private route: ActivatedRoute,
        private dealService: DealService
    ) {
    }

    ngOnInit(): void {
        const id = this.route.snapshot.params.id;
        this.dealService.find(id).subscribe(res => {
            this.deal = res.body;
        });
    }

}
