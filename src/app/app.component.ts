import { Component, OnInit } from '@angular/core';

import { WoodburningEntry } from './woodburning';
import { WoodburningService } from './woodburning.service';

@Component({
  selector: 'my-app',
  template:
    `
    <h1>{{title}}</h1>
    <h2>My Woodburnings</h2>
    <ul class="woodburnings_list">
      <li *ngFor="let woodburning of all_woodburnings" [class.selected]="woodburning === selectedWoodburning" (click)="onSelect(woodburning)">
        <span class="badge">{{woodburning.id}}: </span> {{woodburning.name}}
      </li>
    </ul>
    <br/>
    <my-woodburning-detail [woodburning]="selectedWoodburning"></my-woodburning-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .woodburnings_list {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 20em;
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
    }`],
    providers: [WoodburningService]
})

export class AppComponent implements OnInit {
  title = 'All Woodburning Entries';
  all_woodburnings: WoodburningEntry[];
  selectedWoodburning: WoodburningEntry;

  constructor(private woodburningService: WoodburningService) {}

  getWoodburnings(): void {
    this.woodburningService.getWoodburnings().then(all_woodburnings => this.all_woodburnings = all_woodburnings);
  }

  ngOnInit(): void {
    this.getWoodburnings();
  }

  onSelect(woodburning: WoodburningEntry): void {
    this.selectedWoodburning = woodburning;
  }
}
