import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ChroniclesStorageService } from 'src/services/chronicles-storage.service';
import { Year } from 'src/models/year.model';

@Component({
  selector: 'app-chronicles-list',
  templateUrl: './chronicles-list.component.html',
  styleUrls: ['./chronicles-list.component.scss']
})
export class ChroniclesListComponent implements OnInit {
  public years: Year[];

  constructor(public db: AngularFirestore, private firebaseService: ChroniclesStorageService) {
  }

  async ngOnInit() {
    this.years = await this.firebaseService.getAll();
    if(!this.years) this.years = [];
    this.sort();
  }

  addNew() {
    let newYear = new Year();
    newYear.isEditing = true;
    if(this.years) this.years.unshift(newYear);
  }

  onYearAdded() {
    this.sort();
    return false;
  }

  private sort() {
    this.years.sort((x, y) => y.id - x.id);
  }
}
