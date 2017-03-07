import { Component, Input } from '@angular/core';
import { WoodburningEntry } from './woodburning';

@Component({
  selector: 'my-woodburning-detail',
  template: `
    <div *ngIf="woodburning">
      <h2>Woodburning - {{woodburning.name}} details!</h2>
      <div>
        <label><strong>Woodburning Number (id):</strong></label>
        <input class="input-styling" [(ngModel)]="woodburning.id" placeholder="E.g.: 1, 2, 3, 4, etc.">
      </div>
      <div>
        <label><strong>Name of Woodburning:</strong></label>
        <input class="input-styling" [(ngModel)]="woodburning.name" placeholder="E.g.: Deadpool - Arms Crossed">
      </div>
      <div>
        <label><strong>Size:</strong></label>
        <input class="input-styling" [(ngModel)]="woodburning.size" placeholder='E.g.: 3" x 2", 5" x 7"'>
      </div>
      <div>
        <label><strong>Material Used:</strong></label>
        <input class="input-styling" [(ngModel)]="woodburning.material" placeholder="E.g.: Pinewood, Birch">
      </div>
      <div>
        <label><strong>Date Finished:</strong></label>
        <input class="input-styling" [(ngModel)]="woodburning.date_finished" placeholder="E.g.: February 28th, 2017">
      </div>
      <div>
        <label><strong>Total Time Taken (In Minutes):</strong></label>
        <input class="input-styling" [(ngModel)]="woodburning.total_time_to_make_in_minutes" placeholder="E.g.: 93, 165, 12">
      </div>
      <div>
        <label><strong>Total Time Taken (Abbreviated):</strong></label>
        <input class="input-styling" [(ngModel)]="woodburning.total_time_to_make_abbreviated" placeholder="E.g.: 1.5, 2.75, 0.25">
      </div>
    </div>
`,
  styles: [`
    .input-styling {
          width: 20em;
        }
`]
})

export class WoodburningDetailComponent {
  @Input()
  woodburning: WoodburningEntry;
}