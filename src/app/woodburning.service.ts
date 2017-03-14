import { Injectable } from '@angular/core';
import { WoodburningEntry } from './woodburning';
import { WOODBURNINGS } from './mock-woodburnings';

@Injectable()
export class WoodburningService {
    getWoodburnings(): Promise<WoodburningEntry[]> {
        return Promise.resolve(WOODBURNINGS);
    }

    getWoodburning(id: number): Promise<WoodburningEntry> {
        return this.getWoodburnings().then(woodburnings => woodburnings.find(woodburning => woodburning.id === id));
    }
}
