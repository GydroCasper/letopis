import { Day } from './day.model';

export class Note {

  public id: number;

  public note: string;

  public isEditing: boolean;

  constructor(public day: Day) {
  }
}
