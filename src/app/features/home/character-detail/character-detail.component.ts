import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EssentialComponent } from '../../../core/components/essentialComponent';
import { CharactersService } from '../../../core/services/characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterDetailComponent extends EssentialComponent {

  characterService = inject(CharactersService)
  userId = this.routeParams['id']
  character$ = this.characterService.getCharacter(this.userId)
}
