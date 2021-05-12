import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import Froala plugin.
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RealtimeFroalaComponent } from './realtime-froala/realtime-froala.component';
import { AliceComponent } from './alice/alice.component';
import { BobComponent } from './bob/bob.component';

@NgModule({
  declarations: [
    AppComponent,
    RealtimeFroalaComponent,
    AliceComponent,
    BobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
