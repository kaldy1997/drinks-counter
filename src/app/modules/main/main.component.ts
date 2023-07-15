import { Component, OnDestroy } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
import { CookiesService } from 'src/app/services/cookies.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'main-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnDestroy {

    public showModal: boolean;
    public iconRoutes: {
      home: string,
      classification: string
    };

    private destroyed$: Subject<void> = new Subject();

    constructor(
      private cookiesService: CookiesService,
      private userService: UserService,
      private router: Router
    ) {
      this.checkRoute();
      this.userService.getRealTimeData(this.destroyed$);
    }

    public logout(): void {
      this.cookiesService.delete();
      this.router.navigate(['/login']);
    }

    public toogleModal(): void {
        this.showModal = !this.showModal;
    }

    private checkRoute(): void {
      this.setIconRoute(this.router.url);
      this.router.events.pipe(
          takeUntil(this.destroyed$),
        filter(event => event instanceof NavigationStart)
      ).subscribe((event: NavigationStart) => this.setIconRoute(event.url));
    }

    private setIconRoute(url: string): void {
        if (url === '/home') {
            this.iconRoutes = {
            home: '/assets/house-fill.svg',
            classification: '/assets/list.svg'
            };
        } else {
            this.iconRoutes = {
                home: '/assets/house.svg',
                classification: '/assets/card-list.svg'
            };
        }
    }

    ngOnDestroy(): void {
        this.destroyed$.complete();
    }

}
