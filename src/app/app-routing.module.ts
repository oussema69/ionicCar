import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {PanierComponent} from "./components/panier/panier.component";
import {CommandeComponent} from "./components/commande/commande.component";
import {AccueilComponent} from "./components/accueil/accueil.component";
import {LoginComponent} from "./components/login/login.component";
import {HttpClientModule} from "@angular/common/http";
import {RegistreComponent} from "./components/registre/registre.component";
import {ArticleComponent} from "./components/article/article.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'home', component:HomeComponent, children:[
      {path:'profile',component:ProfileComponent},
      {path:'panier',component:PanierComponent},
      {path:'commande',component:CommandeComponent},
      {path:'acc',component:AccueilComponent},
      {path:'art/:nom',component:ArticleComponent},

    ]
  },
  {path:'login',component:LoginComponent},
  {path:'reg',component:RegistreComponent},

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HttpClientModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
