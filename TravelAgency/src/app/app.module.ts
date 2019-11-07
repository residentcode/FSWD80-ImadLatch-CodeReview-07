import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BlogComponent } from './blog/blog.component';
import { TravelsComponent } from './travels/travels.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
// import { environment } from '../environments/environment.prod';
import { TravelService } from './shared/travel.service';
import { TravelListComponent } from './travel-list/travel-list.component';
import { FooterComponent } from './footer/footer.component';
import { BlogService } from './shared/blog.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BlogComponent,
    TravelsComponent,
    AdminComponent,
    HomeComponent,
    TravelListComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [TravelService, BlogService], // optional
  bootstrap: [AppComponent],
})
export class AppModule {}
