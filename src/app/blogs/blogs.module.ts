import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blog/blog.component';

//importando o módulo de rotas
import { BlogsRoutingModule } from './blogs-routing.module';

import { BlogsService } from './services/blogs.service';

@NgModule({
  imports: [
    CommonModule,

    //necessário importal o módulo de rotas aqui
    BlogsRoutingModule
  ],
  declarations: [
    BlogsComponent,
    BlogComponent,
  ],
  providers: [
    BlogsService
  ]
})
export class BlogsModule { }
