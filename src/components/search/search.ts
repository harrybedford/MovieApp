import { Component } from '@angular/core';
import { DataService } from '../../services/data';
import { Result } from '../../models/result';

@Component({
	selector: 'search',
	templateUrl: './search.html',
	styleUrls: ['./search.css']
})

export class Search {

	constructor(private dataService: DataService) { }

	public search(): void {
		if (this.searchTerm.length > 1) {
			this.dataService.search$(this.searchTerm).subscribe(
				data => {
					this.movies = data.Search;
				},
				error => {
					return error;
				}
			);
		} else {
			this.movies = [];
		}
	}

	public movies: Array<Result>;

	public searchTerm: string = '';

}