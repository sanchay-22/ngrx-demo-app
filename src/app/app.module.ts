import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterBtnsComponent } from './counter/counter-btns/counter-btns.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { counterReducer } from './counter/state/counter.reducer';
import { CustomInputCounterComponent } from './counter/custom-input-counter/custom-input-counter.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'environments/environment';
import { appReducer } from './shared/store/app.state';
import { AddPostComponent } from './posts/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterBtnsComponent,
    CounterOutputComponent,
    CustomInputCounterComponent,
    HomeComponent,
    HeaderComponent,
    PostListComponent,
    AddPostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      // retains last 25 states
      //maxAge: 25, 
      logOnly: environment.production,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
