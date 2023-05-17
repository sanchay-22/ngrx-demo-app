import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SharedState } from './shared/store/shared.state';
import { getErrorMessageState, getLoaderState } from './shared/store/shared.selectors';
import { autoLoginAction } from './auth/states/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'NGRX-DemoApp';
  showLoader$: Observable<boolean> = this.store.select(getLoaderState);
  errorMessage$: Observable<string> = this.store.select(getErrorMessageState);

  constructor(private store: Store<SharedState>) {}

  ngOnInit(): void {
    this.store.dispatch(autoLoginAction()); //dispatching the action
  }
}
