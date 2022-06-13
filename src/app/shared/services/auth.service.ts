import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {IUser} from '../model/user.model';
import {AuthResponse} from '../model/auth-response.model';
import {SERVER_API_URL} from '../constant/url.constant';

@Injectable({providedIn: 'root'})
export class AuthService {

    constructor(private http: HttpClient) { }

    get token(): string {
        const expDate = new Date(localStorage.getItem('sv-token-exp'));
        if (new Date() > expDate) {
            this.logout();
            return null;
        }
        return localStorage.getItem('sv-token');
    }

    get Login(): string {
        return localStorage.getItem('sv-login');
    }

    get Role(): string {
        return localStorage.getItem('sv-role');
    }

    login(user: IUser): Observable<any> {
        return this.http.post(SERVER_API_URL + 'login', user)
            .pipe(
                tap(this.setToken)
            );
    }

    logout(): void {
        this.setToken(null);
    }

    isAuthenticated(): boolean {
        return !!this.token;
    }

    private setToken(response: AuthResponse | null): void {
        if (response) {
            const expDate = new Date(new Date().getTime() + response.Expires);
            localStorage.setItem('sv-token', response.Authorization);
            localStorage.setItem('sv-token-exp', expDate.toString());
            localStorage.setItem('sv-login', response.Login);
        } else {
            localStorage.clear();
        }
    }
}
