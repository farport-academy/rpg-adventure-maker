import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EssentialComponent } from '../../../core/components/essentialComponent';
import { AuthService } from '../../../core/services/auth.service';
import { UserTypes } from '../../../core/models/users';
import { EventForm } from '../../../core/configs/events.config';
import { GameEvent } from '../../../core/models/events';
import { EventsService } from '../../../core/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent extends EssentialComponent {
  authService = inject(AuthService);
  eventsService = inject(EventsService);
  userTypes = UserTypes;
  formConfig = EventForm;
  currentUserType = this.authService.currentUser.type;

  handleCreation(event: Partial<GameEvent>) {
    this.takeUntilDestroy(
      this.eventsService.createEvent(event)
    ).subscribe();
  }
}
