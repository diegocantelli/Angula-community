import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
    { path: '', component: BlogsComponent },
    { path: ':post_id', component: BlogComponent }
];

@NgModule({
    //forChild -> usado para carregar as rotas que são carregadas através lazy loading
    // e que são filhas de uma rota definida no módulo principal
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class BlogsRoutingModule { }