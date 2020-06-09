import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ChroniclesListComponent } from '../components/chronicles-list/chronicles-list.component';
import { ChroniclesYearComponentComponent } from '../components/chronicles-list/chronicles-year-component/chronicles-year-component.component';
import { ChroniclesMonthComponentComponent } from '../components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-month-component.component';
import { ChroniclesDayComponentComponent } from '../components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-day-component/chronicles-day-component.component';
import { ChroniclesNoteComponentComponent } from '../components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-day-component/chronicles-note-component/chronicles-note-component.component';
import { ChroniclesAddNewComponentComponent } from '../components/chronicles-add-new-component/chronicles-add-new-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ChroniclesListComponent,
    ChroniclesYearComponentComponent,
    ChroniclesMonthComponentComponent,
    ChroniclesDayComponentComponent,
    ChroniclesNoteComponentComponent,
    ChroniclesAddNewComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
