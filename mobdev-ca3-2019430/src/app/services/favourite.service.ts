import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
 
const STORAGE_KEY = 'favouriteEpisodes';
const STORAGE_KEY2 = 'favouriteCharacters';
const STORAGE_KEY3 = 'favouriteQuotes';
 
@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
 
  constructor(private storage: Storage) { }
 
  getAllFavouriteEpisodes() {
    return this.storage.get(STORAGE_KEY);
  }
 
  isFavourite(episodeId) {
    return this.getAllFavouriteEpisodes().then(result => {
      return result && result.indexOf(episodeId) !== -1;
    });
  }
 
  favouriteEpisode(episodeId) {
    return this.getAllFavouriteEpisodes().then(result => {
      if (result) {
        result.push(episodeId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [episodeId]);
      }
    });
  }
 
  unfavouriteEpisode(episodeId) {
    return this.getAllFavouriteEpisodes().then(result => {
      if (result) {
        var index = result.indexOf(episodeId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }


    getAllFavouriteCharacters() {
    return this.storage.get(STORAGE_KEY2);
  }
 
  isLiked(charactherId) {
    return this.getAllFavouriteCharacters().then(result => {
      return result && result.indexOf(charactherId) !== -1;
    });
  }
 
  favouriteCharacter(charactherId) {
    return this.getAllFavouriteCharacters().then(result => {
      if (result) {
        result.push(charactherId);
        return this.storage.set(STORAGE_KEY2, result);
      } else {
        return this.storage.set(STORAGE_KEY2, [charactherId]);
      }
    });
  }
 
  unfavouriteCharacter(charactherId) {
    return this.getAllFavouriteCharacters().then(result => {
      if (result) {
        var index = result.indexOf(charactherId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY2, result);
      }
    });
  }


  
    getAllFavouriteQuotes() {
    return this.storage.get(STORAGE_KEY3);
  }
 
  isFavourited(quoteId) {
    return this.getAllFavouriteQuotes().then(result => {
      return result && result.indexOf(quoteId) !== -1;
    });
  }
 
  favouriteQuote(quoteId) {
    return this.getAllFavouriteQuotes().then(result => {
      if (result) {
        result.push(quoteId);
        return this.storage.set(STORAGE_KEY3, result);
      } else {
        return this.storage.set(STORAGE_KEY3, [quoteId]);
      }
    });
  }
 
  unfavouriteQuote(quoteId) {
    return this.getAllFavouriteQuotes().then(result => {
      if (result) {
        var index = result.indexOf(quoteId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY3, result);
      }
    });
  }
 
}