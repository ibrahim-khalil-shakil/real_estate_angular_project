import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Type } from '../type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public types?: Type[];

  constructor(private apiService: ApiService) {
    this.apiService.readType().subscribe((types: Type[]) => {
      this.types = types;
    })
  }
}
