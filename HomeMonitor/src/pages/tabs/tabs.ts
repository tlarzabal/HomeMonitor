import { Component } from '@angular/core';
import {TaskpagePage} from "../taskpage/taskpage";
import {ShoppingListPage} from "../shopping-list/shopping-list";



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TaskpagePage;
  tab2Root = ShoppingListPage;

  constructor() {

  }
}
