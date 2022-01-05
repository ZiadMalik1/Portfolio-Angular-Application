import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AssetsComponent } from './assets/assets.component';
import { HomeComponent } from './home-component';
import { ResearchComponentComponent } from './research-component';
import { appRoutingModule } from './app-routing';
import { AppComponent } from './app.component';
import { RelatedCourseworkComponent } from './related-coursework/related-coursework.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AssetsComponent,
    ResearchComponentComponent,
    RelatedCourseworkComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
