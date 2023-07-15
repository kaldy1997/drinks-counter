import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'classification-menu-root',
  templateUrl: './classification-menu.component.html',
  styleUrls: ['./classification-menu.component.sass']
})
export class ClassificationMenuComponent {

  constructor(
    private router: Router
  ) {

  }

  public navigateG(): void {
    this.router.navigate(['classification/global']);
  }
}
