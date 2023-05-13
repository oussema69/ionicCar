import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss'],
})
export class HeadersComponent implements OnInit {

  @ViewChild('tabs', {static: false}) tabs: IonTabs;
  selectedTab: any;

  constructor() { }

  ngOnInit() {}
  setCurrentTab() {
    this.selectedTab = this.tabs.getSelected();
  }


  logout() {
    localStorage.removeItem('id');
  }

  reload() {
    window.location.reload()
  }
}
