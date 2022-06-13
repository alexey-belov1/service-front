import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {IUser} from '../../shared/model/user.model';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    form: FormGroup;

    submitted = false;

    constructor(
        public authService: AuthService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        if (this.authService.isAuthenticated()) {
            this.router.navigate(['/']).then();
            return;
        }
        this.form = new FormGroup({
            login: new FormControl(null, [Validators.required]),
            password: new FormControl(null, [Validators.required])
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

        this.authService.login(user).subscribe(() => {
            this.router.navigate(['/']).then();
            this.submitted = false;
        }, () => {
            this.submitted = false;
        });
    }

    markAllAsUntouched(): void {
        this.form.markAsUntouched();
    }

}
