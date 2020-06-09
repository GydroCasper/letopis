import { Note } from './note.model';
import { Month } from './month.model';

export class Day {

  public notes: Note[];

  public id: number;

  public isEditing: boolean;

  constructor(public month: Month) {
  }
}
