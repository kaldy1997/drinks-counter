import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'room-ranking-root',
  templateUrl: './room-ranking.component.html',
  styleUrls: ['./room-ranking.component.sass']
})
export class RoomRankingComponent {

    public showModal: boolean;
    public selectValue: any;

    constructor (
        public userService: UserService
    ) { }

    public toggleModal(): void {
        this.showModal = !this.showModal;
    }

    public saveRoom(): void {
        this.userService.createRoom('');
    }
}
