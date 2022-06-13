import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

export interface Item {
    router: string;
    text: string;
}

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    items: Item[] = [
        {
            router: '/deals',
            text: 'Список оказанных услуг'
        },
        {
            router: '/create-deal',
            text: 'Получить услугу'
        }
    ];

    logoutItem: Item = {
        router: '/',
        text: 'Выйти'
    };

    constructor(
        public authService: AuthService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
    }

    logout(): void {
        this.authService.logout();
        this.router.navigate(['/login']).then();
    }

}
