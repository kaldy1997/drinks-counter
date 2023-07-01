import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'classification-root',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.sass']
})
export class ClassificationComponent {

    constructor (
        private firebase: AngularFirestore,
        public userService: UserService
    ) {
        this.userService.getData();
    }
}
