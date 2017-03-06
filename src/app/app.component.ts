import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:
    `
    <h1>{{title}}</h1>
    <h2>My Woodburnings</h2>
    <ul class="woodburnings_list">
      <li *ngFor="let woodburning of all_woodburnings">
        <span class="badge">{{woodburning.id}}: </span> {{woodburning.name}}
      </li>
    </ul>
    <br/>
    
    <!--<div>-->
      <!--<label><strong>Woodburning Number (id):</strong></label>-->
      <!--<input [(ngModel)]="woodburning.id" placeholder="E.g.: 1, 2, 3, 4, etc.">-->
    <!--</div>-->
        <!--<div>-->
      <!--<label><strong>Name of Woodburning:</strong></label>-->
      <!--<input [(ngModel)]="woodburning.name" placeholder="E.g.: Deadpool - Arms Crossed">-->
    <!--</div>-->
    <!--<div>-->
      <!--<label><strong>Size:</strong></label>-->
      <!--<input [(ngModel)]="woodburning.size" placeholder='E.g.: 3" x 2", 5" x 7"'>-->
    <!--</div>-->
    <!--<div>-->
      <!--<label><strong>Material Used:</strong></label>-->
      <!--<input [(ngModel)]="woodburning.material" placeholder="E.g.: Pinewood, Birch">-->
    <!--</div>-->
    <!--<div>-->
      <!--<label><strong>Date Finished:</strong></label>-->
      <!--<input [(ngModel)]="woodburning.date_finished" placeholder="E.g.: February 28th, 2017">-->
    <!--</div>-->
    <!--<div>-->
      <!--<label><strong>Total Time Taken (In Minutes):</strong></label>-->
      <!--<input [(ngModel)]="woodburning.total_time_to_make_in_minutes" placeholder="E.g.: 93, 165, 12">-->
    <!--</div>-->
    <!--<div>-->
      <!--<label><strong>Total Time Taken (Abbreviated):</strong></label>-->
      <!--<input [(ngModel)]="woodburning.total_time_to_make_abbreviated" placeholder="E.g.: 1.5, 2.75, 0.25">-->
    <!--</div>-->`,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .woodburnings_list {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 18em;
    }
    .woodburnings_list li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .woodburnings_list li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .woodburnings_list li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .woodburnings_list .text {
      position: relative;
      top: -3px;
    }
    .woodburnings_list .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }`]
})

export class AppComponent  {
  title = 'All Woodburning Entries';
  all_woodburnings = WOODBURNINGS;
}

const WOODBURNINGS: WoodburningEntry[] = [
  { id: 1, name: 'Maid Deadpool - Door Hanger', size: '4.5" x 4.5"', material: 'Pinewood', date_finished: 'February 28th, 2017', total_time_to_make_in_minutes: 93, total_time_to_make_abbreviated: 1.5 },
  { id: 2, name: 'Deadpool Arms Crossed', size: '5" x 7"', material: 'Birch Plywood', date_finished: 'February 27th, 2017', total_time_to_make_in_minutes: 193, total_time_to_make_abbreviated: 3.25 },
  { id: 3, name: 'Mouthy Canadian Deadpool', size: '5" x 7"', material: 'Birch Plywood', date_finished: '', total_time_to_make_in_minutes: 87, total_time_to_make_abbreviated: 1.5 },
  { id: 4, name: 'I have Comiks Issues Deadpool', size: '5" x 7"', material: 'Birch Plywood', date_finished: 'September 23rd, 2016', total_time_to_make_in_minutes: 101, total_time_to_make_abbreviated: 1.75 },
];

export class WoodburningEntry {
  id: number;
  name: string;
  size: string;
  material: string;
  date_finished: string;
  total_time_to_make_in_minutes: number;
  total_time_to_make_abbreviated: number;
}
