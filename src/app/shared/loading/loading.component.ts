import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  template: `
  @if(loadingService.loadingCount$ | async){
    <ng-content select="[loading]"/>
  }@else {
    <ng-content select="[loaded]"/>
  }
  `,
  styleUrl: './loading.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent {
  loadingService = inject(LoadingService)

}
