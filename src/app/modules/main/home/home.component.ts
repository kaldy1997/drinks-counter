import { Component } from '@angular/core';
import { CookiesService } from 'src/app/services/cookies.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

    constructor (
        private cookiesService: CookiesService,
        public userService: UserService
    ) { }


    increaseValue(value: number): void {
        this.userService.user.counter += value;
        this.userService.updateUser();
        this.cookiesService.set();
    }

    decreaseValue(value: number): void {
        this.userService.user.counter -= value;
        this.userService.updateUser();
        this.cookiesService.set();
    }

}
