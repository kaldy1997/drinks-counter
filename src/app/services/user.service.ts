import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Subject, takeUntil } from 'rxjs';
import { Room } from '../models/room.interface';
import { User } from '../models/user.interface';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    public user: User;
    public usersRealTime: User[];
    public userRooms: Room[];
    public rooms: Room[];

    constructor(
        private firebase: AngularFirestore
    ) { }

    public set(user: User): void {
        this.user = user;
    }

    public updateUser(): void {
        this.firebase.collection('users').doc(this.user.id).set(this.user);
    }

    public registerUser(id: string, email: string): void {
        this.firebase.collection('users').doc(id).set({ id, email, counter: 0, rooms: [] });
    }

    public createRoom(name: string): void {
        const id = this.rooms.length.toString();
        this.firebase.collection('room').doc().set({ id, name });
        this.user.rooms.push(id);
        this.updateUser();
    }

    public getRealTimeData(destroyed$: Subject<void>): void {
        this.firebase.collection('users').snapshotChanges().pipe(
            takeUntil(destroyed$),
            map(response => response.map(element => element.payload.doc.data() as User).sort((a, b) => b.counter - a.counter))
        ).subscribe(response => this.usersRealTime = response);

        this.firebase.collection('rooms').snapshotChanges().pipe(
            takeUntil(destroyed$),
            map(response => response.map(element => element.payload.doc.data() as User).sort((a, b) => Intl.Collator().compare(a.name, b.name)))
        ).subscribe(response => {
            this.rooms = response;
            this.userRooms = this.rooms.filter(room => this.user.rooms?.includes(room.id));
        });
    }
}