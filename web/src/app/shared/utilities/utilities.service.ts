import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilitiesService {
  constructor() {}
  formatDate(date: any) {
    let monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat'];
    let d = new Date(date);
    return [
      [days[d.getDay()] + ','],
      monthNames[d.getMonth()],
      [d.getDate() + ','],
      d.getFullYear(),
    ].join(' ');
  }
  compareDates(start: any, end: any) {
    start = new Date(start);
    end = new Date(end);

    if (start.getTime() <= end.getTime()) {
      return true;
    } else {
      return false;
    }
  }

  arrayIncludesInObj(arr: any, key: any, valueToCheck: any) {
    return arr.some((value: any) => value[key] === valueToCheck);
  }

  removeDuplicates(arr: any[]) {
    return arr.filter(
      (v, i, a) =>
        a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i
    );
  }

  getSingleArrayBykey(arr: any[], key: any) {
    return new Promise((resolve) => {
      if (arr.length) {
        resolve(arr.map((x) => x[key]));
      } else {
        resolve([]);
      }
    });
  }

  converDateToDMYFormat(cdate: any) {
    let date = new Date(cdate),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join('-');
  }
}
