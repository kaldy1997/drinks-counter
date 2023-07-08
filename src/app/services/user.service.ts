import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';

export interface User {
    email: string;
    counter: number;
    name: string;
    id: string;
}

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public user: User;

    constructor(
        private firebase: AngularFirestore
    ) { }

    public set(user: User): void {
        this.user = user;
    }

    public updateUser(): void {
        this.firebase.collection('users').doc(this.user.id).set({ ...this.user, counter: this.user.counter });
    }

    public registerUser(id: string, email: string): void {
        this.firebase.collection('users').doc(id).set({ id, email, counter: 0 });
    }

    public getRealTimeData(): Observable<User[]> {
        return this.firebase.collection('users').snapshotChanges().pipe(
            map(response => response.map(element => element.payload.doc.data() as User).sort((a, b) => b.counter - a.counter))
        );
    }
}