import { Component } from '@angular/core';
import {CartService} from '../services/cart.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'booking';
  constructor(public cart: CartService, public auth: AuthService){}
}
