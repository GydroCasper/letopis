import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-chronicles-add-new-component',
  templateUrl: './chronicles-add-new-component.component.html',
  styleUrls: ['./chronicles-add-new-component.component.scss']
})
export class ChroniclesAddNewComponentComponent implements OnInit {
  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }

  @Output() addNew = new EventEmitter();

  onAddNew() {
    this.addNew.emit();
  }
}
