import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Year } from 'src/models/year.model';
import { ChroniclesStorageService } from 'src/services/chronicles-storage.service';
import { Month } from 'src/models/month.model';

@Component({
  selector: 'app-chronicles-year-component',
  templateUrl: './chronicles-year-component.component.html',
  styleUrls: ['./chronicles-year-component.component.scss']
})
export class ChroniclesYearComponentComponent implements OnInit {
  @Input() year: Year;
  @Input() allYears: Year[];
  @Output() newYearAdded = new EventEmitter();
  years: number[];
  newYear: number;

  constructor(private storageService: ChroniclesStorageService) {
    this.years = [];
  }

  ngOnInit() {
    if(!this.year.months) this.year.months = [];
    this.sort();

    var now = new Date();
    for(let i=now.getFullYear();i>=2000;i--){
      if(!this.allYears || !this.allYears.find(x => x.id === i)) this.years.push(i);
    }
  }

  async onYearAdded() {
    await this.storageService.addYear(this.newYear);
    this.year.id = this.newYear;
    this.year.isEditing = false;
    this.newYearAdded.emit();
    return false;
  }

  onMonthAdded() {
    this.sort();
    return false;
  }

  addNewMonth() {
    let newMonth = new Month(this.year);
    newMonth.isEditing = true;
    this.year.months.unshift(newMonth);
  }

  private sort() {
    this.year.months.sort((x, y) => y.id - x.id);
  }
}
