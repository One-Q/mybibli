import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApolloModule } from 'apollo-angular';
import { client } from '../graphql.client';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
import {
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatGridListModule
} from '@angular/material';
import 'hammerjs';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { HomeComponent } from './home';
import { ReactComponent } from './react';
import { ProfileComponent } from './profile';
//import { angularProfileCard } from '../../components/main-profile/index';
import { NoContentComponent } from './no-content';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import '../styles/styles.scss';
import '../styles/headings.css';
import { MyMaterialModule } from './material.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth-guard.service';
import { AuthService } from './shared/auth.service';
import { ConnectedGuard } from './shared/connected-guard.service';
import { BooksModule } from './books';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookManageComponent } from './books/book-manage/book-manage.component';
import { HttpClientModule } from '@angular/common/http';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
  AuthService,
  AuthGuard,
  ConnectedGuard
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ReactComponent,
    ProfileComponent,
    NoContentComponent,
    RegisterComponent,
    LoginComponent,
    BookListComponent,
    BookManageComponent
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    MyMaterialModule,
    RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules }),
    ApolloModule.forRoot(client),
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS,
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) { }

  public hmrOnInit(store: StoreType) {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    /**
     * Set state
     */
    this.appState._state = store.state;
    /**
     * Set input values
     */
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    /**
     * Save state
     */
    const state = this.appState._state;
    store.state = state;
    /**
     * Recreate root elements
     */
    store.disposeOldHosts = createNewHosts(cmpLocation);
    /**
     * Save input values
     */
    store.restoreInputValues = createInputTransfer();
    /**
     * Remove styles
     */
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    /**
     * Display new elements
     */
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
