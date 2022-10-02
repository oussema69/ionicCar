import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home/home.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {AccueilComponent} from "./components/accueil/accueil.component";
import {CommandeComponent} from "./components/commande/commande.component";
import {PanierComponent} from "./components/panier/panier.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {LoginComponent} from "./components/login/login.component";
import {RegistreComponent} from "./components/registre/registre.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeadersComponent} from "./components/headers/headers.component";
import { CatPipe } from './pipes/cat.pipe';
import {ArticleComponent} from "./components/article/article.component";
import { ArticlePipe } from './pipes/article.pipe';
import {PanComponent} from "./components/pan/pan.component";

@NgModule({
  declarations: [AppComponent,
    HomeComponent, NavbarComponent,
    AccueilComponent, CommandeComponent,
    PanierComponent, ProfileComponent, LoginComponent,
    RegistreComponent, HeadersComponent, CatPipe,ArticleComponent, ArticlePipe,ArticleComponent,PanierComponent,PanComponent
  ],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
      ReactiveFormsModule, FormsModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
