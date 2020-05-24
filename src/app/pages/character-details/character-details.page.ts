import { FavouriteService } from './../../services/favourite.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';


@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {
  character: any;
  characterId = null;
  isLiked = false;

constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }

  ngOnInit() {

    this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getCharacter(this.characterId).subscribe(res => {
      this.character = res[0];
      console.log(JSON.stringify(this.character.characterId));
    });
  
   
   this.favouriteService.isLiked(this.characterId).then(isFav => {
      this.isLiked = isFav;
    });
}

  favouriteCharacter() {
    this.favouriteService.favouriteCharacter(this.characterId).then(() => {
      this.isLiked = true;
    });
  }
 
  unfavouriteCharacter() {
    this.favouriteService.unfavouriteCharacter(this.characterId).then(() => {
      this.isLiked = false;
    });
    }
}
