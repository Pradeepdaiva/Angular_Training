import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminRegistryFormComponent } from './admin-registry-form/admin-registry-form.component';
import { UserRegistryFormComponent } from './user-registry-form/user-registry-form.component';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ManageBooksComponent } from './manage-books/manage-books.component';
import { ViewAllBooksComponent } from './view-all-books/view-all-books.component';
import { FilterPipePipe } from './view-all-books/filter-pipe.pipe';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AddSectionComponent } from './add-section/add-section.component';
import { BookSectionComponent } from './book-section/book-section.component';
import { UserHistoryComponent } from './user-history/user-history.component';
import { ViewAllIssuedBooksComponent } from './view-all-issued-books/view-all-issued-books.component';
import { UserFilterPipe } from './view-all-issued-books/user-filter.pipe';
import { AboutUsComponent } from './about-us/about-us.component';
import { UserProfileFilterPipe } from './my-profile/user-profile-filter.pipe';
import { AllComponentComponent } from './all-component/all-component.component';
import { MathsSectionComponent } from './maths-section/maths-section.component';
import { CultureSectionComponent } from './culture-section/culture-section.component';
import { SqlSectionComponent } from './sql-section/sql-section.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    AdminLoginComponent,
    UserLoginComponent,
    AdminRegistryFormComponent,
    UserRegistryFormComponent,
    DashBoardComponent,
    MainpageComponent,
    MyProfileComponent,
    ManageBooksComponent,
    ViewAllBooksComponent,
    FilterPipePipe,
    UpdateBookComponent,
    AddSectionComponent,
    BookSectionComponent,
    UserHistoryComponent,
    ViewAllIssuedBooksComponent,
    UserFilterPipe,
    AboutUsComponent,
    UserProfileFilterPipe,
    AllComponentComponent,
    MathsSectionComponent,
    CultureSectionComponent,
    SqlSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
