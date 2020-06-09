import { Day } from './day.model';
import { Year } from './year.model';

export class Month {

  public days: Day[];

  public id: number;

  public isEditing: boolean;

  constructor(public year: Year) {
  }
}
