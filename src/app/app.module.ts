import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatTableModule} from '@angular/material/table';
import { SampleServiceService } from './sample-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AddLibraryComponent } from './add-library/add-library.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { DisplayComponent } from './display/display.component';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DetailsComponent } from './details/details.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SteperComponent } from './steper/steper.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { guard } from './guard';
import {MatDividerModule} from '@angular/material/divider';
import { GenreComponent } from './genre/genre.component';
import { FavComponent } from './fav/fav.component';
import { LayoutComponent } from './layout/layout.component';
import {MatListModule} from '@angular/material/list';
import { ClimaxDirective } from './climax.directive';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    AddLibraryComponent,
    DisplayComponent,
    LoginComponent,
    DetailsComponent,
    SteperComponent,
    GenreComponent,
    FavComponent,
    LayoutComponent,
    ClimaxDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule, 
    RouterModule ,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatStepperModule,
    MatSelectModule,
    MatRadioModule,
    MatDividerModule,
    MatListModule
  
  ],
  providers: [ SampleServiceService, guard],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
