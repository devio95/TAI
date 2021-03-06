import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ApiService } from './api.service';
import { GraphsContainerComponent } from './graphs-container/graphs-container.component';
import { StatsKDHSComponent } from './stats-kdhs/stats-kdhs.component';
import { StatsMapsWeaponsComponent } from './stats-maps-weapons/stats-maps-weapons.component';
import { NickAndAvatarComponent } from './nick-and-avatar/nick-and-avatar.component';
import { CompareComponent } from './compare/compare.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { LogoutComponent } from './logout/logout.component';


const appRoutes: Routes = [
  {
    path: 'navigate',
    component: NavBarComponent, children: [
      {
        path: 'graphs',
        component: GraphsContainerComponent, children: [
          {
            path: 'statsKDHS',
            component: StatsKDHSComponent
          },
          {
            path: 'statsMapsWeapons',
            component: StatsMapsWeaponsComponent
          }
        ]
      },
      {
        path: 'compare',
        component: CompareComponent
      }
    ]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { title: 'Sign Up' }
  },
  { path: '',
  redirectTo: '/navigate',
  pathMatch: 'full'
  },
  {
    path: '404',
    component: NavBarComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    NavBarComponent,
    GraphsContainerComponent,
    StatsKDHSComponent,
    StatsMapsWeaponsComponent,
    NickAndAvatarComponent,
    CompareComponent,
    RegisterComponent,
    LoginComponent,
    SignupComponent,
    UserPanelComponent,
    LogoutComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule 
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
