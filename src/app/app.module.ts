import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SwapiService } from "./services/swapi.service";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { DropListComponent } from "./drop-list/drop-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, DropListComponent, FormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [FormComponent],
  providers: [SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
