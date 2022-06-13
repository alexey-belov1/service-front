import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RegService} from '../../shared/services/reg.service';
import {Router} from '@angular/router';
import {matchValues} from '../../shared/validators/must-match.validator';
import {IUser} from '../../shared/model/user.model';

@Component({
  selector: 'app-services-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

    form: FormGroup;

    submitted = false;

    constructor(
        private authService: AuthService,
        private regService: RegService,
        private router: Router) {
    }

    ngOnInit(): void {
        if (this.authService.isAuthenticated()) {
            this.router.navigate(['/']).then();
            return;
        }

        this.form = new FormGroup({
            login: new FormControl(null, [Validators.required]),
            password: new FormControl(null, [Validators.required]),
            confirmPassword: new FormControl(null, [
                Validators.required,
                matchValues('password')
            ])
        });
    }


    submit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        const user: IUser = {
            login: this.form.get('login').value,
            password: this.form.get('password').value
        };
        this.submitted = true;

        this.regService.signUp(user).subscribe(() => {
            this.router.navigate(['/login']).then();
        }, () => {
            this.submitted = false;
        });
    }

}
