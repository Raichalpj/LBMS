import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecureComponent } from './secure.component';

const routes: Routes = [
    {
        path: '',
        component: SecureComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'book',
                loadChildren: () => import('./book/book.module').then(m => m.BookModule)
            },
            {
                path:'author',
                loadChildren:()=>import('./author/author.module').then(m=>m.AuthorModule)
            },
            {
                
                    path:'user',
                    loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
                
            },
            {
                path:'book-detail',
                loadChildren:()=>import('./book-details/book-details.module').then(m=>m.BookDetailsModule)
            },
            {
                path:'transaction',
                loadChildren:()=>import('./transaction/transaction.module').then(m=>m.TransactionModule)
            },
            {
                path:'fine',
                loadChildren:()=>import('./fine/fine.module').then(m=>m.FineModule)
            },
            {
                path:'readshelf',
                loadChildren:()=>import('./readshelf/readshelf.module').then(m=>m.ReadshelfModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
            },
            {
                path: 'dev-guide',
                loadChildren: () => import('./dev-guide/dev-guide.module').then(m => m.DevGuideModule)
            },
            {
                path: '**',
                redirectTo: 'dashboard', pathMatch: 'full'
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecureRoutingModule { }
