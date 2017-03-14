import { Component, OnInit } from '@angular/core';

import { Woodburning } from './woodburning';
import { WoodburningService } from './woodburning.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  woodburnings: Woodburning[] = [];

  constructor(private woodburningService: WoodburningService) { }

  ngOnInit(): void {
    this.woodburningService.getWoodburnings()
      .then(woodburnings => this.woodburnings = woodburnings.slice(1, 5));
  }
}