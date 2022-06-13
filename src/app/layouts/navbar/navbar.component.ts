import { Component, OnInit } from '@angular/core';

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
      router: '/create-deal',
      text: 'Получить услугу'
    },
    {
      router: '/deals',
      text: 'Список оказанных услуг'
    },
  ];

  registration: Item = {
    router: '/registration',
    text: 'Зарегистрироваться'
  };

  login: Item = {
    router: '/login',
    text: 'Войти'
  };

  logout: Item = {
    router: '/',
    text: 'Выйти'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
