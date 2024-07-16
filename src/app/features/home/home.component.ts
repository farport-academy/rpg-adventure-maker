import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { EssentialComponent } from '../../core/components/essentialComponent';
import { takeUntil } from 'rxjs';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
 styleUrl:'./home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent extends EssentialComponent implements OnInit {
  public authService = inject(AuthService);
  currentUrl = this.router.url
  public navConfig = [
    {
      label: 'Personaggio',
      url:this.authService.currentUser.type
    },
    {
      label: 'Eventi',
      url: `${this.authService.currentUser.type}/events`
    }   
  ]

  ngOnInit(): void {
      this.router.events.pipe(
        takeUntil(this.destroy$)
      ).subscribe( res =>{
        if(res instanceof NavigationEnd){
          this.currentUrl = res.url
        }
  
      })
   
  }
  
}
