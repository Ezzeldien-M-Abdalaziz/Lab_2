import { Component, EventEmitter, Output,Input} from '@angular/core';
@Component({
  selector: 'app-search-section',
  standalone: true,
  imports: [],
  templateUrl: './search-section.component.html',
  styleUrl: './search-section.component.css'
})
export class SearchSectionComponent {
  // searchInput : string = '';
  //get users from parent
  @Input() usersFromParent:Array<any> = []
  //send search output to parent
  @Output() searchedUser : EventEmitter<string> = new EventEmitter<string>();

  searchForUser(email:string){
    this.searchedUser.emit(email);
    console.log(email);

  }

  clearSearch() {
    // Clear the search input field
    const searchInput = document.getElementById('search') as HTMLInputElement;
    if (searchInput) {
      searchInput.value = '';
      this.searchedUser.emit('');
    }
  }
}
