import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SharedState } from '../../store/shared.state';
import { Observable } from 'rxjs';
import { isAuthenticated } from 'src/app/auth/state/auth.selectors';
import { autoLogoutAction } from 'src/app/auth/state/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  userIsLoggedIn$: Observable<boolean> = this.store.select(isAuthenticated);

  constructor(private store: Store<SharedState>) {}

  onLogout(event: Event):void {
      event.preventDefault();
      this.store.dispatch(autoLogoutAction());
    }
  }
