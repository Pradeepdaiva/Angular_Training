import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminLoginServiceService } from './admin-login/admin-login-service.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegistryFormComponent } from './admin-registry-form/admin-registry-form.component';
import { AllComponentComponent } from './all-component/all-component.component';
import { AuthguardService } from './authguard.service';
import { BookSectionComponent } from './book-section/book-section.component';
import { CultureSectionComponent } from './culture-section/culture-section.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ManageBooksComponent } from './manage-books/manage-books.component';
import { MathsSectionComponent } from './maths-section/maths-section.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UserHistoryComponent } from './user-history/user-history.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistryFormComponent } from './user-registry-form/user-registry-form.component';
import { ViewAllBooksComponent } from './view-all-books/view-all-books.component';
import { ViewAllIssuedBooksComponent } from './view-all-issued-books/view-all-issued-books.component';
import { AuthGuardForWelcomeService } from './welcome-page/auth-guard-for-welcome.service';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


const routes: Routes = [

  
  {
    path:'userLogin',
    component:UserLoginComponent
  },
 
  {
    path:'adminLogin',component:AdminLoginComponent
  },
  {
    path:'update',
    component:UpdateBookComponent
  },
  {
    path:'welcome',
    component:WelcomePageComponent
  },
  
  {
   path:'registerForm',
   component:UserRegistryFormComponent
  },

  {
    path:'dashBoard',
    canActivate:[AuthguardService],
    component:DashBoardComponent,
   children:[
     {
       path:'homePage',
       component:MainpageComponent
     },
     {
       path:'myProfile',
       component:MyProfileComponent
     },
     {
       path:'manageBooks',
       component:ManageBooksComponent
     },
     {
       path:'viewAllBooks',
       component:ViewAllBooksComponent
     },
     {
       path:'issuedBooks',
       component:ViewAllIssuedBooksComponent
     }
   ]
  },
  {
    path:'',
    // canActivateChild:[AuthGuardForWelcomeService],
    component:WelcomePageComponent,
    children:[
      {
        path:'HomePage',
        component:AllComponentComponent
      },
      {
        path:'history',
        component:UserHistoryComponent
      },
      {
        path:'aboutUs',
        component:AboutUsComponent
      },
      {
        path:'SQL',
        component:BookSectionComponent
      },
      {
        path:'Maths',
        component:BookSectionComponent
      },
      {
        path:'Culture',
        component:BookSectionComponent
      },
      {
        path:'**',
        component:BookSectionComponent
      },
      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
