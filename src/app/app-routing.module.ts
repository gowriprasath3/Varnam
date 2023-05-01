import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminTeamComponent } from './admin/admin-team/admin-team.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { ThankyouComponent } from './contact/thankyou/thankyou.component';
import { GalleryLightboxComponent } from './gallery-lightbox/gallery-lightbox.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  { path:"home", component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"about",component:AboutComponent},
  {path:"gallery",component:GalleryLightboxComponent},
  {path:"team",component:TeamComponent},
  {path:"admin",component:AdminComponent},
  {path:"thankyou",component:ThankyouComponent},
  {path:"adminteamaccess",component:AdminTeamComponent},
  {path:"blogs",redirectTo:"/https://varnam.art.blog/blogs/",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash:true,
      anchorScrolling:'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
