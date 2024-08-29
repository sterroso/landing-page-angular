import { Component } from '@angular/core';

export interface IUserCredentials {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: IUserCredentials;

  constructor() {
    this.user = {
      email: '',
      password: '',
    } as IUserCredentials;
  }

  sendForm() {
    console.log(this.user);
  }
}
