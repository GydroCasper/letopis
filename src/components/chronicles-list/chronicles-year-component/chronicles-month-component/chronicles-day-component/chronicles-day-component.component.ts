import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Day } from 'src/models/day.model';
import { Note } from 'src/models/note.model';
import { ChroniclesStorageService } from 'src/services/chronicles-storage.service';

@Component({
  selector: 'app-chronicles-day-component',
  templateUrl: './chronicles-day-component.component.html',
  styleUrls: ['./chronicles-day-component.component.scss', '../../../../../styles/app-shared.scss']
})
export class ChroniclesDayComponentComponent implements OnInit {
  @Input() day: Day;
  @Input() allDays: Day[];
  @Output() newDayAdded = new EventEmitter();
  private days: number[];
  private newDay: number;

  constructor(private storageService: ChroniclesStorageService) {
    this.days = [];
  }

  ngOnInit() {
    if (!this.day.notes) this.day.notes = [];
    this.sort();

    this.refreshDaysCount();
  }

  addNewNote() {
    var newNote = new Note(this.day);
    newNote.isEditing = true;
    newNote.id = this.day.notes && this.day.notes.length ? this.day.notes.reduce((max, day) => day.id > max ? day.id : max, 0) + 1 : 0;
    this.day.notes.push(newNote);
    return false;
  }

  onNoteAdded() {
    this.sort();
    return false;
  }

  async onDayAdded() {
    await this.storageService.addDay(this.day.month.year.id, this.day.month.id, this.newDay);
    this.day.id = this.newDay;
    this.day.isEditing = false;
    this.newDayAdded.emit();
    return false;
  }

  private sort() {
    this.day.notes.sort((x, y) => x.id - y.id);
  }

  private refreshDaysCount() {
    var daysCount = new Date(this.day.month.year.id, this.day.month.id + 1, 0).getDate();
    for (let i = daysCount; i > 0; i--) {
      if (!this.allDays || !this.allDays.find(x => x.id === i)) this.days.push(i);
    }
  }
}
