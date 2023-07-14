import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'global-ranking-root',
  templateUrl: './global-ranking.component.html',
  styleUrls: ['./global-ranking.component.sass']
})
export class GlobalRankingComponent {

    constructor (
        public userService: UserService
    ) { }
}
