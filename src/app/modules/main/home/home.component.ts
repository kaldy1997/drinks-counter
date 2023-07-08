import { Component } from '@angular/core';
import { CookiesService } from 'src/app/services/cookies.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

    private timeoutId: NodeJS.Timeout;

    constructor (
        private cookiesService: CookiesService,
        public userService: UserService
    ) { }

    public increaseValue(value: number): void {
        this.userService.user.counter += value;
        this.startTimer();
    }

    public decreaseValue(value: number): void {
        this.userService.user.counter -= value;
        this.startTimer();
    }

    private startTimer(): void {
        const later = () => {
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
            this.updateValue();
        };

        if (this.timeoutId) {
          clearTimeout(this.timeoutId);
        }
        this.timeoutId = setTimeout(later, 3000);
    }

    private updateValue(): void {
        this.userService.updateUser();
        this.cookiesService.set();
    }

}
