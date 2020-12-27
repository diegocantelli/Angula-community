import { BrowserModule } from '@angular/platform-browser';
import { AuthGuardService } from './services/auth-guard.service';

//Routes -> interface que define como uma rota deve ser declarada
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from 'clarity-angular';
import { ForumsModule } from './forums/forums.module';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { UserService } from './services/user.service';

const appRoutes: Routes = [
  //path -> define a rota que será utilizada para carregar um determinada componente
  //  não pode conter a "/"
  { path: 'login', component: LoginComponent },

  //outlet -> define onde o componente será carregado, trata-se de uma rota secundária
  //  irá buscar um router-outlet que tenha definido o name='chat'
  // CanActivate: define o serviço que irá determinar se a rota pode ser acessada ou não
  { path: 'users', component: ChatListComponent, outlet: 'chat', canActivate: [AuthGuardService] },
  { path: 'users/:username', component: ChatComponent, outlet: 'chat', canActivate: [AuthGuardService] },

  { path: '', redirectTo: '/forums', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatListComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ClarityModule.forRoot(),

    //carregando as rotas no módulo principal
    RouterModule.forRoot(appRoutes),

    ForumsModule,
  ],
  providers: [
    UserService,

    //Guardas de rotas necessitam ser declardos em providers
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
