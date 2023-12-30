import { Injectable } from '@angular/core';
import { Type } from './type';
import { Listing } from './listing';
import { Agent } from './agent';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	PHP_API_SERVER = "http://localhost/angularcrud/api";
	constructor(private httpClient: HttpClient) { }
	readType(): Observable<Type[]> {
		return this.httpClient.get<Type[]>(`${this.PHP_API_SERVER}/type.php`);
	}
	readListing(): Observable<Listing[]> {
		return this.httpClient.get<Listing[]>(`${this.PHP_API_SERVER}/listing.php`);
	}
	readAgent(): Observable<Agent[]> {
		return this.httpClient.get<Agent[]>(`${this.PHP_API_SERVER}/agent.php`);
	}
} 
