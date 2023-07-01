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

    setUser(user: User): void {
        this.user = user;
    }

    updateUser(): void {
        this.firebase.collection('users').doc(this.user.id).set({ ...this.user, counter: this.user.counter });
    }

    getData(): Observable<User[]> {
        // Elementos en tiempo real
        return this.firebase.collection('users').snapshotChanges().pipe(
            map(response => response.map(element => element.payload.doc.data() as User).sort((a, b) => b.counter - a.counter))
        );
    }
}