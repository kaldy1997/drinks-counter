import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, getDoc, getFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CookiesService } from 'src/app/services/cookies.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

    constructor (
        @Inject(DOCUMENT) private document: any,
        private auth: Auth,
        private firebase: AngularFirestore,
        private router: Router,
        private userService: UserService,
        private cookiesService: CookiesService
    ) {
    }

    registerUser(id: string, email: string) {
        // Añadir nuevo usuario cuando se logee por primera vez
        this.firebase.collection('users').doc(id).set({ id, email, counter: 0 });
    }

    loginWithGoogle() {
        // Login con google
        signInWithPopup(this.auth, new GoogleAuthProvider()).then(async (responseLogin) => {

            const id = responseLogin.user.uid;
            const email = responseLogin.user.email;

            const docSnapshot = await getDoc(doc(getFirestore(), 'users', id));
            const logedUser = docSnapshot.data();
            this.userService.setUser({
                id: id,
                email: email,
                name: responseLogin.user.displayName,
                counter: logedUser?.counter ?? 0,
            })
            if (!logedUser) {
                this.registerUser(id, email as string)
            }
            this.cookiesService.setUser();
            this.router.navigate(['/home']);
        });
    }

}
