import { Component } from '@angular/core';
import { DataService } from '../../services/data';
import { Movie } from '../../models/movie';
import { MOVIE } from '../../mocks/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detail',
  templateUrl: './detail.html',
  styleUrls: ['./detail.css']
})

export class Detail {

	constructor(private dataService: DataService,
				private route: ActivatedRoute) { }

	public ngOnInit(): void {
		this.dataService.getMovie$(this.route.snapshot.params['id']).subscribe(
			data => {
				this.movie = data;
			},
			err => {
				this.error = 'The API is not currently available, please try later.';
			}
		);
	}

	public movie: Movie = MOVIE;

	public error: string;

}