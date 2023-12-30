import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Agent } from '../agent';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  public agents?: Agent[];

  constructor(private apiService: ApiService) {
    this.apiService.readAgent().subscribe((agents: Agent[]) => {
      this.agents = agents;
    })
  }
}
