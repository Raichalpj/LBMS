import { NgModule } from '@angular/core';
import { NgIdleModule } from '@ng-idle/core';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { SharedModule } from 'src/app/shared/shared.module';
import { SecureLayoutModule } from './secure-layout/secure-layout.module';
import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure.component';
import { UserListComponent } from './user/container/user-list/user-list.component';
import { UserAddComponent } from './user/container/user-add/user-add.component';
import { UserUpdateComponent } from './user/container/user-update/user-update.component';
import { TransactionAddComponent } from './transaction/container/transaction-add-borrow/transaction-add.component';
import { TransactionUpdateComponent } from './transaction/container/transaction-update-return/transaction-update.component';
import { TransactionListComponent } from './transaction/container/transaction-list/transaction-list.component';
import { ReadshelfListComponent } from './readshelf/container/readshelf-list/readshelf-list.component';
import { BookListComponent } from './book/container/book-list/book-list.component';


@NgModule({
  declarations: [
    SecureComponent,
    // UserListComponent,
    // UserAddComponent,
    // UserUpdateComponent,
    // TransactionAddComponent,
    // TransactionUpdateComponent,
    // TransactionListComponent,
    // ReadshelfListComponent,
    
 
  ],
  imports: [
    SharedModule,
    SecureRoutingModule,
    SecureLayoutModule,
    NgIdleModule,
    NgIdleKeepaliveModule
  ]
})
export class SecureModule { }
