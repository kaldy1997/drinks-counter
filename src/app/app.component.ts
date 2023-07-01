import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

    constructor() {
        window.addEventListener('resize', () => document.documentElement.style.setProperty('--doc-height', `${window.innerHeight}px`));
    }
}
