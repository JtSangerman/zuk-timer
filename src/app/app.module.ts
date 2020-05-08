import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TimeFormatPipe } from "./pipes/time-format.pipe";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [AppComponent, TimeFormatPipe],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  exports: [MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
