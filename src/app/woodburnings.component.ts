import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WoodburningEntry } from './woodburning';
import { WoodburningService } from './woodburning.service';

@Component({
  moduleId: module.id,
  selector: 'my-woodburnings',
  templateUrl: './woodburnings.component.html',
  styleUrls: ['./woodburnings.component.css'],
  providers: [WoodburningService]
})

export class WoodburningsComponent implements OnInit {

  title = 'All Woodburning Entries';
  all_woodburnings: WoodburningEntry[];
  selectedWoodburning: WoodburningEntry;

  constructor(
    private router: Router,
    private woodburningService: WoodburningService) { }


  getWoodburnings(): void {
    this.woodburningService.getWoodburnings().then(all_woodburnings => this.all_woodburnings = all_woodburnings);
  }

  ngOnInit(): void {
    this.getWoodburnings();
  }

  onSelect(woodburning: WoodburningEntry): void {
    this.selectedWoodburning = woodburning;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedWoodburning.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.woodburningService.create(name)
      .then(woodburning => {
        this.all_woodburnings.push(woodburning);
        this.selectedWoodburning = null;
    });
  }

  delete(woodburning: WoodburningEntry): void {
    this.woodburningService
      .delete(woodburning.id)
      .then(() => {
        this.all_woodburnings = this.all_woodburnings.filter(h => h !== woodburning);
        if (this.selectedWoodburning === woodburning) { this.selectedWoodburning = null; }
    });
  }
}
