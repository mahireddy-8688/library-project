import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { DisplayComponent } from './display/display.component';
import { FavComponent } from './fav/fav.component';
import { GenreComponent } from './genre/genre.component';
import { guard } from './guard';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SteperComponent } from './steper/steper.component';



const routes: Routes = [{
  path:'',component:LoginComponent},
  {
    path:'display/:id',component:DisplayComponent
  },
  {
    path:"dashboard", canActivate:[guard],component:DashboardComponent
  },
  {
    path:"details",  component:DetailsComponent
  },
  {
    path:"stepper",component:SteperComponent

  },
  {
    path:'genre', canActivate:[guard],component:GenreComponent,
    children:
    [{
      path:'Comedy',canActivate:[guard],component:GenreComponent
    },
    {
      path:'Thriller',canActivate:[guard],component:GenreComponent

    },
    {
      path:'Romance',canActivate:[guard],component:GenreComponent
    }
    
    ]
  },
  {
    path:'fav', canActivate:[guard],component:FavComponent

  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
