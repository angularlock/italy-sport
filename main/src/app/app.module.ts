import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';


import { NgxLoadingModule } from 'ngx-loading';

import { AppComponent } from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { TranslationLoader } from './shared/_service/translate/translationsloader';
import { MenubarComponent } from './menubar/menubar.component';
import { LanguageModule } from './shared/language/language.module';
import { SigninModule } from './shared/signin/signin.module';
import { SharedModule } from './shared.module';
import { AppRoutes } from './app.routing';
import { OnfieldTestComponent } from './result-details/details-football/onfield-test/onfield-test.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslationLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes, { scrollPositionRestoration: 'disabled' }),
    NgxLoadingModule.forRoot({}),
    HttpModule,
    SharedModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    BrowserModule,
    LanguageModule,
    SigninModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PortalModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    DragDropModule,
    FlexLayoutModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    MenubarComponent,
    OnfieldTestComponent
  ],
  exports: [],
  // entryComponents: [OnfieldTestComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
