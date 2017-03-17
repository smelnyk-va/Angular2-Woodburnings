import { Injectable }             from '@angular/core';
import { Http }                   from '@angular/http';

import { Observable }             from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { WoodburningEntry }       from './woodburning';

@Injectable()
export class WoodburningSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<WoodburningEntry[]> {
    return this.http
         .get(`app/woodburnings/?name=${term}`)
         .map(response => response.json().data as WoodburningEntry[]);
  }
}
