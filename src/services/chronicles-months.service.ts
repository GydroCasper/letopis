import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChroniclesMonthsService {

  constructor() { }

  public getMonthTitleByNumber(id: number): string {
    let date = new Date(2000, id);
    return date.toLocaleString('default', { month: 'long' });
  }
}
