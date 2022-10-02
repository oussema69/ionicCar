import {Component, OnInit, ViewChild} from '@angular/core';
import {IonTabs} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  @ViewChild('tabs', {static: false}) tabs: IonTabs;
  selectedTab: any;

  constructor(private router:Router) { }

  ngOnInit() {

  }


  setCurrentTab() {
    this.selectedTab = this.tabs.getSelected();
  }


  logout() {
    localStorage.removeItem('dhiamelliti');
    this.router.navigate(['']);
  }

  reload() {
    window.location.reload()
  }
}
