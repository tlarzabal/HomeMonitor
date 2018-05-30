import { Component } from '@angular/core';
import {TaskpagePage} from "../taskpage/taskpage";
import {ShoppingListPage} from "../shopping-list/shopping-list";
import {AdOrFlatsharingPage} from "../adOrFlatsharing/adOrFlatsharing";
import {EventPage} from "../Events/event/event";



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = EventPage;
  tab2Root = TaskpagePage;
  tab3Root = ShoppingListPage;
  homeRoot = AdOrFlatsharingPage;

  constructor() {

  }
}
