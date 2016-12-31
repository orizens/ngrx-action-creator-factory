# Ngrx Action Creator Factory
This is an angular 2 provider based (or a simple class) - read about the concept at [Simple Action Creators for ngrx/store in Angular 2](http://orizens.com/wp/topics/simple-action-creators-for-ngrxstore-in-angular-2/).  
This service came out as a result of the [open source project Echoes Player](http://github.com/orizens/echoes-ng2) - an alternative player for watching and listening to media from youtube.

## What It Solves
This factory allows to decalre a **typed action creator** function and have type support when using this function. 
This also results (in most cases) in a one line declaration. 

## Angular 2 Support
supports Angular 2 - **Final - 2.2.1**

## LICENSE
MIT

## Installation
```
npm install ngrx-action-creator-factory --save-dev
```

## Supported API
Currently supported:
- ActionCreatorFactory.create<string>(action: string, payload?: any)

## Usage
First, import the ActionCreatorFactory to your module:

```typescript
import { NgModule } from '@angular/core';
import { ActionCreatorFactory } from 'ngrx-action-creator-factory';

@NgModule({
  imports:[ BrowserModule ],
  providers: [ ActionCreatorFactory ],
  declarations: [ AppComponent, ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
```

Next, use the **ngrx-action-creator-factory** either as a static factory or as an injectable provider:

```typescript
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { ActionCreatorFactory } from 'ngrx-action-creator-factory';

@Injectable()
export class NowPlaylistActions {
  static MEDIA_ENDED = '[NOW PLAYLIST] MEDIA_ENDED';
  static QUEUE = '[NOW PLAYLIST] QUEUE';
  static SELECT = '[NOW PLAYLIST] SELECT';

  // as injectable
  constructor(private acf: ActionCreatorFactory) {
    this.queueVideo = this.acf.create(NowPlaylistActions.QUEUE);
    // This is the same as the above
    this.queueVideo = this.acf.create<void>(NowPlaylistActions.QUEUE);
  }

  // as a static method
  mediaEnded = ActionCreatorFactory.create(NowPlaylistActions.MEDIA_ENDED);
  // OR as a static typed method
  selectMedia = ActionCreatorFactory.create<GoogleApiYouTubeVideoResource>(NowPlaylistActions.SELECT);
}
```

## Testing
To start developing tdd/bdd style: ```npm run dev```
This will: compile ts files, watch for changes and start the test task. Whenever a ts file is changed, it will rerun the tests.

# Showcase Examples
* [Echoes Player Ng2 Version](http://orizens.github.io/echoes-ng2) ([github repo for echoes player](http://github.com/orizens/echoes-ng2))
