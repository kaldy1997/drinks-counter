import { Component } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { CookiesService } from 'src/app/services/cookies.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'room-ranking-root',
  templateUrl: './room-ranking.component.html',
  styleUrls: ['./room-ranking.component.sass']
})
export class RoomRankingComponent {

    public showModal: boolean;
    public selectedRoom: string;
    public isCreating: boolean;
    public valueOfModal: string;
    public userRooms: User[];

    constructor (
        public userService: UserService,
        private cookiesService: CookiesService
    ) {
        this.selectedRoom = '0';
    }

    public onChangeSelector(event: string): void {
        this.userRooms = this.userService.usersRealTime.filter(user => user.rooms?.includes(event));
    }

    public createRoom(): void {
        this.isCreating = true;
        this.toggleModal();
    }

    public joinRoom(): void {
        this.isCreating = false;
        this.toggleModal();
    }

    public toggleModal(): void {
        this.showModal = !this.showModal;
        this.valueOfModal = '';
    }

    public saveRoom(): void {
        if (this.valueOfModal.length) {
            if (this.isCreating) {
                this.selectedRoom = this.userService.createRoom(this.valueOfModal);
            } else {
                this.userService.joinRoom(this.valueOfModal);
                this.selectedRoom = this.valueOfModal;
            }

            setTimeout(() => {
                this.cookiesService.set();
                this.onChangeSelector(this.selectedRoom);
                this.toggleModal();
            }, 1000);
        }
    }
}
