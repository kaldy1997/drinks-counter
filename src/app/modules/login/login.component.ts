import { Component } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
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

    public showSpinner: boolean;

    constructor (
        private auth: Auth,
        private router: Router,
        private userService: UserService,
        private cookiesService: CookiesService
    ) { }

    public loginWithGoogle(): void {
        this.showSpinner = true;
        signInWithPopup(this.auth, new GoogleAuthProvider()).then(async (responseLogin) => {

            const id = responseLogin.user.uid;
            const email = responseLogin.user.email;
            const docSnapshot = await getDoc(doc(getFirestore(), 'users', id));
            const logedUser = docSnapshot.data();

            this.userService.set({
                id,
                email,
                name: responseLogin.user.displayName,
                counter: logedUser?.counter ?? 0,
                rooms: logedUser.rooms ?? []
            });

            if (!logedUser) {
                this.userService.registerUser(id, email);
            }
            this.cookiesService.set();
            this.router.navigate(['/home']);
            this.showSpinner = false;
        }, () => {
            this.showSpinner = false;
        });
    }

}
