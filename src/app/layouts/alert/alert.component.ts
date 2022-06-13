import {Component, OnDestroy, OnInit} from '@angular/core';
import {IAlert} from '../../shared/model/alert.model';
import {Subscription} from 'rxjs';
import {AlertType} from '../../shared/enum/alert-type.model';
import {Router} from '@angular/router';
import {AlertService} from '../../shared/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy{

    alerts: IAlert[] = [];

    alertSubscription: Subscription;

    alertTypeClass = {
        [AlertType.Success]: 'alert-success',
        [AlertType.Error]: 'alert-danger',
        [AlertType.Info]: 'alert-info',
        [AlertType.Warning]: 'alert alert-warning'
    };

    constructor(
        private router: Router,
        private alertService: AlertService
    ) {
    }

    ngOnInit(): void {
        this.alertSubscription = this.alertService.onAlert().subscribe(alert => {
            if (this.alerts.map(a => a.message).indexOf(alert.message) === -1) {
                this.alerts.push(alert);
                setTimeout(() => this.removeAlert(alert), 3000);
            }
        });

    }

    removeAlert(alert: IAlert): void {
        this.alerts = this.alerts.filter(x => x !== alert);
    }

    cssClass(alert: IAlert): string {
        const classes = ['alert'];
        classes.push(this.alertTypeClass[alert.type]);
        return classes.join(' ');
    }

    ngOnDestroy(): void {
        this.alertSubscription.unsubscribe();
    }

}
