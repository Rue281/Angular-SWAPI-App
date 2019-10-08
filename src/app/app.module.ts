import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SwapiService } from "./services/swapi.service";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { DropListComponent } from "./drop-list/drop-list.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, DropListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    ReactiveFormsModule
  ],
  providers: [SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
