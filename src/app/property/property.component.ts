import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Listing } from '../listing';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent {

  public listings?: Listing[];
  public filteredListings?: Listing[];
  public searchQuery: string = '';

  constructor(private apiService: ApiService) {
    this.apiService.readListing().subscribe((listings: Listing[]) => {
      this.listings = listings;
      this.filteredListings = listings;
    });
  }


searchListings(event: Event) {
  this.searchQuery = (event.target as HTMLInputElement).value;
  if (!this.searchQuery) {
    this.filteredListings = this.listings;
    return;
  }
console.log(this.searchQuery.toLowerCase())
  this.filteredListings = this.listings?.filter(l =>
    l.name?.toLowerCase().includes(this.searchQuery.toLowerCase())
  );
  console.log(this.filteredListings)
}
}