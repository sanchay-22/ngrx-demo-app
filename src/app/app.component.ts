import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateModel } from './shared/shared.state';
import { getLoaderState } from './shared/shared.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-tesing-app';
  showLoader$: Observable<boolean> = this.store.select(getLoaderState);

  constructor(private store: Store<AppStateModel>) {}

}
