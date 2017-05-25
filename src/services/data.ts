import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const APIKEY = 'cfb35c43';
 
@Injectable()

export class DataService {

	constructor(private http: Http
				) { }

	public search$(searchTerm: string) {
		return this.http.get(
			'http://www.omdbapi.com/?apikey=' + APIKEY + '&s=' + searchTerm
		)
		.map(res => {
			return res.json();
		})
		.catch(err =>{
			return err;
		});
	}

	public getMovie$(id: string) {
		return this.http.get(
			'http://www.omdbapi.com/?apikey=' + APIKEY + '&i=' + id + '&plot=full'
		)
		.map(res => {
			return res.json();
		})
		.catch(err => {
			return err;
		});
	}

}