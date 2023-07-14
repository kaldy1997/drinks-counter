import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'ranking-component',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.sass']
})
export class RankingComponent {

  @Input() public users: User[];

}
