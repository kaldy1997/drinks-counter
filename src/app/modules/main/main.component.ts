import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookiesService } from 'src/app/services/cookies.service';

@Component({
  selector: 'main-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {

    public showModal: boolean;

    constructor(
      private cookiesService: CookiesService,
      private router: Router
    ) { }

    public logout(): void {
      this.cookiesService.delete();
      this.router.navigate(['/login']);
    }

    public toogleModal(): void {
        this.showModal = !this.showModal;
    }

}
