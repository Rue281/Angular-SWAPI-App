import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { DropListComponent } from "./drop-list/drop-list.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it("should render title", () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector("span").textContent).toContain("SWAPI App");
  // });
});

//test onSearch
// describe("onSearch", () => {
//   let component: AppComponent;
//   let fixture: ComponentFixture<AppComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [],
//       imports: [ReactiveFormsModule, FormsModule, DragDropModule],
//       declarations: [AppComponent, DropListComponent]
//     });

//     // create component and test fixture
//     fixture = TestBed.createComponent(AppComponent);

//     // get test component from the fixture
//     component = fixture.componentInstance;
//     component.ngOnInit();
//   });

//   //check if a blank form is invalid.
//   // it("form invalid when empty", () => {
//   //   expect(component.searchForm.valid).toBeFalsy();
//   // });

//   // //check if idField initialy invalid
//   // it("id field validity", () => {
//   //   let id = component.searchForm.controls["idInputField"];
//   //   expect(id.valid).toBeFalsy();
//   // });

//   // //check validators validity
//   // it("id validators validity", () => {
//   //   let id = component.searchForm.controls["idInputField"];
//   //   let errors = {};
//   //   // id.setValue(1);
//   //   errors = id.errors || {};
//   //   expect(errors["required"]).toBeTruthy();
//   // });

//   // //TODO
//   // //check pattern validity
//   // // it("pattern validator validity", () => {
//   // //   let id = component.searchForm.controls["idInputField"];
//   // //   let errors = {};
//   // //   id.setValue(1);
//   // //   errors = id.errors || {};
//   // //   expect(errors["pattern"]).toBeTruthy();
//   // // });
// });
