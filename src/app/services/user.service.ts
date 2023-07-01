import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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

    async getData() {
        // Elementos en tiempo real
        this.firebase.collection('users').snapshotChanges().subscribe(response => {
            response.forEach((element: any) => {
            })
        });

        // Elemento única instancia
        this.firebase.collection('users').get().subscribe(response => {
            response.forEach((element: any) => {
            })
        })
    }
}