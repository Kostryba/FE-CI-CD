import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LayoutModule } from '@angular/cdk/layout'

import { counterReducer } from './counter.reducer';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { MyCounterComponent } from "./my-counter-component/my-counter-component.component";
import { CounterEffects } from "./counter.effects";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    HttpClientModule,
    StoreModule.forRoot({ count: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([CounterEffects])
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
