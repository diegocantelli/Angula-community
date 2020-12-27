import { BrowserModule } from '@angular/platform-browser';

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
  { path: 'users', component: ChatListComponent, outlet: 'chat', },
  { path: 'users/:username', component: ChatComponent, outlet: 'chat', },

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
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
