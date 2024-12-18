import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { DatePipe } from "@angular/common";
// import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
// import { CardComponent } from './shared/card/card.component';
// import { NewTaskComponent } from './tasks/new-task/new-task.component';
// import { TasksComponent } from './tasks/tasks.component';
// import { TaskComponent } from './tasks/task/task.component';
import { SharedModule } from './shared/card/shared.module';
import { TaskModule } from './tasks/tasks.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    // CardComponent,
    // TasksComponent,
    // TaskComponent,
    // NewTaskComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    //  DatePipe,
    // FormsModule,
    SharedModule,
    TaskModule
  ],
})

// ! BrowserModule used to handle this error: A required Injectable was not found in the dependency injection tree. If you are bootstrapping an NgModule, make sure that the `BrowserModule` is imported.

// ! All the pipes module by angular comes with the BrowserModule so we don't need to add DatePipe heres
export class AppModule {}
