import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

    constructor (
        private firebase: AngularFirestore,
        public userService: UserService
    ) {
        this.userService.getData();
    }


    increaseValue(value: number): void {
        this.userService.user.counter += value;
        this.userService.updateUser();
    }

    decreaseValue(value: number): void {
        this.userService.user.counter -= value;
        this.userService.updateUser();
    }

}
