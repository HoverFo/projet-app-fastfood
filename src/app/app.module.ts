// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { MapComponent } from './map/map/map.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
declarations: [
AppComponent,
MapComponent,
],
imports: [
BrowserModule,
BrowserAnimationsModule,
CoreModule,
RouterModule, // ce module ne devrait pas être nécessaire
AppRoutingModule,

],

bootstrap: [AppComponent]
})
export class AppModule {}
