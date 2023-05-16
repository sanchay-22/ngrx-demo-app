import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared.state';
import { Observable } from 'rxjs';
import { isAuthenticated } from 'src/app/auth/states/auth.selectors';
import { autoLogoutAction } from 'src/app/auth/states/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  userIsLoggedIn$: Observable<boolean> = this.store.select(isAuthenticated);

  constructor(private store: Store<AppState>) {}

  onLogout(event: Event):void {
      event.preventDefault();
      this.store.dispatch(autoLogoutAction());
    }
  }
