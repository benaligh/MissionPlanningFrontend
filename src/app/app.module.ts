import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ListLivreurComponent } from './list-livreur/list-livreur.component';
import { ListMotoComponent } from './list-moto/list-moto.component';
import { ListAdressComponent } from './list-adress/list-adress.component';
import { ListMissionComponent } from './list-mission/list-mission.component';
import { NbrMissionTodayComponent } from './nbr-mission-today/nbr-mission-today.component';
import { NbrMissionUpComComponent } from './nbr-mission-up-com/nbr-mission-up-com.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsMissionComponent } from './details-mission/details-mission.component'
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ListLivreurComponent,
    ListMotoComponent,
    ListAdressComponent,
    ListMissionComponent,
    NbrMissionTodayComponent,
    NbrMissionUpComComponent,
    DetailsMissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
