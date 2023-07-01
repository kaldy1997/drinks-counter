import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookiesService } from 'src/app/services/cookies.service';

@Component({
  selector: 'main-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {

    showModal: boolean;

    constructor(
      private cookiesService: CookiesService,
      private router: Router
    ) { }

    logout() {
      this.cookiesService.delete();
      this.router.navigate(['/login']);
    }

    toogleModal() {
        this.showModal = !this.showModal;
    }

}
