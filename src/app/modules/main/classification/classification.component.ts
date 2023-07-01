import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserService } from '../../../services/user.service';

@Component({
  selector: 'classification-root',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.sass']
})
export class ClassificationComponent {

    public users$: Observable<User[]>;

    constructor (
        public userService: UserService
    ) {
        this.users$ = this.userService.getData();
    }
}
