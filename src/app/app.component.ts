import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchSectionComponent } from "./search-section/search-section.component";
import { UsersSectionComponent } from "./users-section/users-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchSectionComponent, UsersSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //mom
  searchTerm:string = ''

  onSearch(searchTerm: string): void {
    this.searchTerm = searchTerm
  }
}
