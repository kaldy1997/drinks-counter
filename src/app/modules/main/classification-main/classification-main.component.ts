import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'classification-main-root',
  templateUrl: './classification-main.component.html',
  styleUrls: ['./classification-main.component.sass']
})
export class ClassificationMainComponent {

  constructor(
    private userService: UserService
  ) {
  }

}
