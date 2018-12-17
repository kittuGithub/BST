import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ComponentsModule } from './components/components.module';
import { LoginPageComponent } from './login-page/login-page.component';

import { MatToolbarModule, MatFormFieldModule, MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
