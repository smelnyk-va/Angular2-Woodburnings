import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let all_woodburnings = [
        { id: 1, name: 'Maid Deadpool - Door Hanger', size: '4.5" x 4.5"', material: 'Pinewood', date_finished: 'February 28th, 2017', total_time_to_make_in_minutes: 93, total_time_to_make_abbreviated: 1.5 },
        { id: 2, name: 'Deadpool Arms Crossed', size: '5" x 7"', material: 'Birch Plywood', date_finished: 'February 27th, 2017', total_time_to_make_in_minutes: 193, total_time_to_make_abbreviated: 3.25 },
        { id: 3, name: 'Mouthy Canadian Deadpool', size: '5" x 7"', material: 'Birch Plywood', date_finished: 'September 23rd, 2016', total_time_to_make_in_minutes: 87, total_time_to_make_abbreviated: 1.5 },
        { id: 4, name: 'I have Comiks Issues Deadpool', size: '5" x 7"', material: 'Birch Plywood', date_finished: 'September 23rd, 2016', total_time_to_make_in_minutes: 101, total_time_to_make_abbreviated: 1.75 },
        { id: 5, name: 'BioWorkZ Lion Head', size: '11" x 14"', material: 'Birch Plywood', date_finished: 'March 11th, 2017', total_time_to_make_in_minutes: 981, total_time_to_make_abbreviated: 16.25 },
        { id: 6, name: 'Stained Glass Rose', size: '5" x 7" ', material: 'Birch Plywood', date_finished: 'February 9th, 2017', total_time_to_make_in_minutes: 286, total_time_to_make_abbreviated: 4.75 },
        { id: 7, name: 'Hourglass with Roses', size: '5" x 7"', material: 'Birch Plywood', date_finished: 'December 26th, 2016', total_time_to_make_in_minutes: 158, total_time_to_make_abbreviated: 2.5 },
        { id: 8, name: 'Everyday is an Adventure', size: '5" x 7"', material: 'Birch Plywood', date_finished: 'December 26th, 2016', total_time_to_make_in_minutes: 125, total_time_to_make_abbreviated: 2 },
        { id: 9, name: 'Day of the Dead Skull', size: '5" x 7"', material: 'Birch Plywood', date_finished: 'October 16th, 2016', total_time_to_make_in_minutes: 322, total_time_to_make_abbreviated: 5.25 },
        { id: 10, name: 'Good Mythical Morning', size: '8" x 13.5"', material: 'Pinewood', date_finished: 'December 25th, 2016', total_time_to_make_in_minutes: 263, total_time_to_make_abbreviated: 4.25 },
    ];
    return {all_woodburnings};
  }
}
