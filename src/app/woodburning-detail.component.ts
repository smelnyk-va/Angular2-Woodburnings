import { Component, Input, OnInit } from '@angular/core';
import { WoodburningEntry } from './woodburning';

import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { WoodburningService } from './woodburning.service';

@Component({
  moduleId: module.id,
  selector: 'my-woodburning-detail',
  templateUrl: './woodburning-detail.component.html',
  styleUrls: ['./woodburning-detail.component.css']
})


export class WoodburningDetailComponent implements OnInit {

  constructor(
    private woodburningService: WoodburningService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  @Input()
  woodburning: WoodburningEntry;

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.woodburningService.update(this.woodburning)
      .then(() => this.goBack());
  }

  ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.woodburningService.getWoodburning(+params['id']))
    .subscribe(woodburning => this.woodburning = woodburning);
  }
}
