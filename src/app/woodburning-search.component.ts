import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { WoodburningSearchService } from './woodburning-search.service';
import { WoodburningEntry } from './woodburning';

@Component({
  moduleId: module.id,
  selector: 'woodburning-search',
  templateUrl: './woodburning-search.component.html',
  styleUrls: [ './woodburning-search.component.css' ],
  providers: [WoodburningSearchService]
})

export class WoodburningSearchComponent implements OnInit {
  all_woodburnings: Observable<WoodburningEntry[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private woodburningSearchService: WoodburningSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.all_woodburnings = this.searchTerms
      .debounceTime(200)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.woodburningSearchService.search(term)
        // or the observable of empty woodburnings if there was no search term
        : Observable.of<WoodburningEntry[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<WoodburningEntry[]>([]);
      });
  }

  gotoDetail(woodburning: WoodburningEntry): void {
    let link = ['/detail', woodburning.id];
    this.router.navigate(link);
  }
}