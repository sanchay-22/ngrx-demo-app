import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './shared/shared.state';
import { getErrorMessageState, getLoaderState } from './shared/shared.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'NGRX-DemoApp';
  showLoader$!: Observable<boolean>; //= this.store.select(getLoaderState);
  errorMessage$!: Observable<string> ; //= this.store.select(getErrorMessageState);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.showLoader$ = this.store.select(getLoaderState);
    this.errorMessage$ = this.store.select(getErrorMessageState);
  }

}
