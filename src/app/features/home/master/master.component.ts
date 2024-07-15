import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/models/users';
import { Observable } from 'rxjs';
import { TableConfig } from '../../../shared/table/table.model';
import { userTableConfig } from '../../../core/configs/users';
import { EssentialComponent } from '../../../core/components/essentialComponent';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MasterComponent extends EssentialComponent {

  userService = inject(UserService)
  users$: Observable<User[]> = this.userService.usersByPartyAndType()

  tableConfig = userTableConfig

  goToDetail(user: User){
    this.router.navigate(['master','character', user.id])
  }

}
