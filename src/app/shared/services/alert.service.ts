import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {IAlert} from '../model/alert.model';
import {AlertType} from '../enum/alert-type.model';

@Injectable({ providedIn: 'root' })
export class AlertService {

    private subject = new Subject<IAlert>();

    onAlert(): Observable<IAlert> {
        return this.subject.asObservable();
    }

    success(message: string): void {
        this.alert({
            type: AlertType.Success,
            message: message
        });
    }

    error(message: string): void {
        this.alert({
            type: AlertType.Error,
            message: message
        });
    }

    info(message: string): void {
        this.alert({
            type: AlertType.Info,
            message: message
        });
    }

    warn(message: string): void {
        this.alert({
            type: AlertType.Warning,
            message: message
        });
    }

    alert(alert: IAlert): void {
        this.subject.next(alert);
    }
}
