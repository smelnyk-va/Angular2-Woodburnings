// import { Injectable } from '@angular/core';
// import { WoodburningEntry } from './woodburning';
// import { WOODBURNINGS } from './mock-woodburnings';
//
// @Injectable()
// export class WoodburningService {
//     getWoodburnings(): Promise<WoodburningEntry[]> {
//         return Promise.resolve(WOODBURNINGS);
//     }
//
//     getWoodburning(id: number): Promise<WoodburningEntry> {
//         return this.getWoodburnings().then(woodburnings => woodburnings.find(woodburning => woodburning.id === id));
//     }
// }


import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { WoodburningEntry } from './woodburning';

@Injectable()
export class WoodburningService {
    private woodburningsUrl = 'api/all_woodburnings';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getWoodburnings(): Promise<WoodburningEntry[]> {
        return this.http.get(this.woodburningsUrl)
                   .toPromise()
                   .then(response => response.json().data as WoodburningEntry[])
                   .catch(this.handleError);
    }

    getWoodburning(id: number): Promise<WoodburningEntry> {
        const url = `${this.woodburningsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as WoodburningEntry)
            .catch(this.handleError);
    }

    update(woodburning: WoodburningEntry): Promise<WoodburningEntry> {
        const url = `${this.woodburningsUrl}/${woodburning.id}`;
        return this.http
            .put(url, JSON.stringify(woodburning), {headers: this.headers})
            .toPromise()
            .then(() => woodburning)
            .catch(this.handleError);
    }

    create(name: string): Promise<WoodburningEntry> {
        return this.http
            .post(this.woodburningsUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.woodburningsUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
