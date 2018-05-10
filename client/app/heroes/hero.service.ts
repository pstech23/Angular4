import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> {
        const url = `/api/heroes`;
        return this.http.get(url)
               .toPromise()
               .then(response => response.json() as Hero[])
               .catch(this.handleError);
    }

    getHero(id): Promise<Hero> {
        const url = `/api/hero/${id}`;
        return this.http.get(url)
                   .toPromise()
                   .then(response => response.json() as Hero)
                   .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(name: string): Promise<Hero> {
        const url = `/api/hero`;
        return this.http
            .post(url, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Hero)
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        const url = `/api/hero/${hero._id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
    const url = `/api/hero/${id}`;
    return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }
}
