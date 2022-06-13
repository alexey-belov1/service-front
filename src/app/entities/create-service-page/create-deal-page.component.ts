import {Component, OnInit} from '@angular/core';
import {ISubject} from '../../shared/model/subject.model';
import {SubjectService} from '../../shared/services/subject.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IDeal} from '../../shared/model/deal.model';
import {DealService} from '../../shared/services/deal.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create-service-page',
    templateUrl: './create-deal-page.component.html',
    styleUrls: ['./create-deal-page.component.scss']
})
export class CreateDealPageComponent implements OnInit {

    subjects: ISubject[] = [];

    form: FormGroup;

    submitted = false;

    constructor(
        private subjectService: SubjectService,
        private dealService: DealService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.subjectService.findAll().subscribe(res => {
            this.subjects = res.body;
        });

        this.form = new FormGroup({
            subject: new FormControl(null, [Validators.required]),
            fio: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required]),
        });
    }

    submit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        const deal: IDeal = {
            subject: this.form.get('subject').value,
            fio: this.form.get('fio').value,
            email: this.form.get('email').value
        };
        this.submitted = true;

        this.dealService.save(deal).subscribe(() => {
            this.router.navigate(['/deals']).then();
        }, () => {
            this.submitted = false;
        });
    }
}
