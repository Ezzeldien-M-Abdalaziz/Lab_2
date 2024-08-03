import { NgClass } from '@angular/common';
import { Component ,Input ,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-users-section',
  standalone: true,
  imports: [NgClass],
  templateUrl: './users-section.component.html',
  styleUrl: './users-section.component.css'
})
export class UsersSectionComponent {
  @Input() usersFromParent:Array<any> = [];

  //email
  @Input() emailFromParent:string = '';
  searchedUser : any  = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['emailFromParent']) {
      this.filter();
    }
  }

  filter() {
    this.searchedUser = this.usersFromParent.find(user => user.email === this.emailFromParent) || null;
  }


}
