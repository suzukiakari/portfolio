import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { LanguageComponent } from './language/language.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { LinkstyleDirective } from './linkstyle.directive';
import { ProfielComponent } from './profiel/profiel.component';



const routes:Routes = [
  { path: '', component: ProfielComponent},
  { path: 'project', component: ProjectComponent },
  { path: 'language', component: LanguageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    LanguageComponent,
    LinkstyleDirective,
    ProfielComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes,{ enableTracing: true }),
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
