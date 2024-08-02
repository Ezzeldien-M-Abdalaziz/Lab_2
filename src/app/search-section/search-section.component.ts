import { Component ,EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-search-section',
  standalone: true,
  imports: [],
  templateUrl: './search-section.component.html',
  styleUrl: './search-section.component.css'
})
export class SearchSectionComponent {
  //mom
  @Output() searchEmitter: EventEmitter<string> = new EventEmitter<string>();

  onSearch(searchTerm:string): void {
    this.searchEmitter.emit(searchTerm.trim().toLowerCase());
  }
}
