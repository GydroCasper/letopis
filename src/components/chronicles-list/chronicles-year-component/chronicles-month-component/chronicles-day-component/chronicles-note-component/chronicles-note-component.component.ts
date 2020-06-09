import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/models/note.model';
import { ChroniclesStorageService } from 'src/services/chronicles-storage.service';

@Component({
  selector: 'app-chronicles-note-component',
  templateUrl: './chronicles-note-component.component.html',
  styleUrls: ['./chronicles-note-component.component.scss', '../../../../../../styles/app-shared.scss']
})
export class ChroniclesNoteComponentComponent implements OnInit {
  @Input() note: Note;
  @Output() newNoteAdded = new EventEmitter();

  constructor(private storageService: ChroniclesStorageService) { }

  ngOnInit() {
  }

   async onNoteAdded() {
    await this.storageService.addNote(this.note);
    this.note.isEditing = false;
    this.newNoteAdded.emit();
    return false;
  }
}
