import { Injectable } from '@angular/core';
import { WoodburningEntry } from './woodburning';
import { WOODBURNINGS } from './mock-woodburnings';

@Injectable()
export class WoodburningService {
    getWoodburnings(): Promise<WoodburningEntry[]> {
        return Promise.resolve(WOODBURNINGS);
    }
}
