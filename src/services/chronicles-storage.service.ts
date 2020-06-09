import { Injectable } from '@angular/core';
import { AngularFirestore, QueryDocumentSnapshot, DocumentData, DocumentReference, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Year } from 'src/models/year.model';
import { Month } from 'src/models/month.model';
import { Day } from 'src/models/day.model';
import { Note } from 'src/models/note.model';

@Injectable({
  providedIn: 'root'
})
export class ChroniclesStorageService {
  private readonly yearsCollectionName: string = '/years';
  private readonly monthsCollectionName: string = '/months';
  private readonly daysCollectionName: string = '/days';
  private readonly notesCollectionName: string = '/notes';

  constructor(private db: AngularFirestore) {
   }

  public async getAll(): Promise<Year[]> {
    return await this.getYears();
  }

  public async addNote(note: Note): Promise<void> {
    let day = note.day;
    let month = day.month;
    let year = month.year;

    return await this.db
      .collection(this.yearsCollectionName).doc(year.id.toString())
      .collection(this.monthsCollectionName).doc(month.id.toString())
      .collection(this.daysCollectionName).doc(day.id.toString())
      .collection(this.notesCollectionName).doc(note.id.toString())
      .set({
        note: note.note
      });
  }

  public async addYear(year: number): Promise<void> {
    return this.db.collection(this.yearsCollectionName).doc(year.toString()).set({});
  }

  public async addMonth(year: number, month: number): Promise<void> {
    return await this.getMonthDocumentOfYear(year, month).set({});
  }

  public async addDay(year: number, month: number, day: number): Promise<void> {
    return await this.getDayDocumentOfMonthAndYear(year, month, day).set({});
  }

  private getMonthDocumentOfYear(year: number, month: number): AngularFirestoreDocument{
    return this.db
    .collection(this.yearsCollectionName).doc(year.toString())
    .collection(this.monthsCollectionName).doc(month.toString());
  }

  private getDayDocumentOfMonthAndYear(year: number, month: number, day: number): AngularFirestoreDocument{
    return this.getMonthDocumentOfYear(year, month)
    .collection(this.daysCollectionName).doc(day.toString());
  }

  private async getYears(): Promise<Year[]>{
    let years: Year[] = [];

    let collection = await this.db.collection(this.yearsCollectionName).get().toPromise();

    for(let i=0;i<collection.docs.length;i++){
      let year = new Year();
      year.id = +collection.docs[i].id;
      year.months = await this.getMonths(collection.docs[i], year);
      years.push(year);
    }

    return years;
  }

  private async getMonths(year: QueryDocumentSnapshot<DocumentData>, yearRef: Year): Promise<Month[]> {
    let months: Month[] = [];

    let collection = await year.ref.collection(this.monthsCollectionName).get();

    for(let i=0;i<collection.docs.length;i++){
      let month = new Month(yearRef);
      month.id = +collection.docs[i].id;
      month.days = await this.getDays(collection.docs[i], month);
      months.push(month);
    }

    return months;
  }

  private async getDays(month: QueryDocumentSnapshot<DocumentData>, monthRef: Month): Promise<Day[]> {
    let days: Day[] = [];

    let collection = await month.ref.collection(this.daysCollectionName).get();

    for(let i=0;i<collection.docs.length;i++){
      let day = new Day(monthRef);
      day.id = +collection.docs[i].id;
      day.notes = await this.getNotes(collection.docs[i], day);
      days.push(day);
    }

    return days;
  }

  private async getNotes(day: QueryDocumentSnapshot<DocumentData>, dayRef: Day): Promise<Note[]> {
    let notes: Note[] = [];

    await day.ref.collection(this.notesCollectionName).get().then(querySnapshot => {
      querySnapshot.forEach(async doc => {
        let note = new Note(dayRef);
        note.id = +doc.id;
        note.note = doc.data().note;
        notes.push(note);
      });
    });

    return notes;
  }
}


