import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Month } from 'src/models/month.model';
import { ChroniclesMonthsService } from 'src/services/chronicles-months.service';
import { ChroniclesStorageService } from 'src/services/chronicles-storage.service';
import { Day } from 'src/models/day.model';

@Component({
  selector: 'app-chronicles-month-component',
  templateUrl: './chronicles-month-component.component.html',
  styleUrls: ['./chronicles-month-component.component.scss']
})
export class ChroniclesMonthComponentComponent implements OnInit {
  @Input() month: Month;
  @Input() allMonths: Month[];
  @Output() newMonthAdded = new EventEmitter();
  months: { id: number, title: string }[];
  newMonth: number;

  constructor(private monthsService: ChroniclesMonthsService, private storageService: ChroniclesStorageService) {
    this.months = [];
  }

  ngOnInit() {
    if (!this.month.days) this.month.days = [];
    this.sort();
    this.refreshMonthsList();
  }

  async onMonthAdded() {
    await this.storageService.addMonth(this.month.year.id, this.newMonth);
    this.month.id = this.newMonth;
    this.month.isEditing = false;
    this.newMonthAdded.emit();
    return false;
  }

  onDayAdded() {
    this.sort();
    return false;
  }

  addNewDay() {
    let newDay = new Day(this.month);
    newDay.isEditing = true;
    this.month.days.unshift(newDay);
  }

  private sort() {
    this.month.days.sort((x, y) => y.id - x.id);
  }

  private refreshMonthsList() {
    for (let i = 11; i >= 0; i--) {
      if (!this.allMonths || !this.allMonths.find(x => x.id === i)) {
        this.months.push({ id: i, title: this.monthsService.getMonthTitleByNumber(i) });
      }
    }
  }
}
