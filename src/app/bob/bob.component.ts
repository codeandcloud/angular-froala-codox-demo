import { Component, OnInit } from '@angular/core';

declare const Codox: any;

@Component({
  selector: 'app-bob',
  templateUrl: './bob.component.html',
  styleUrls: ['./bob.component.scss']
})
export class BobComponent implements OnInit {

  apiKey = "6b39532d-9c22-4109-ace0-1745fee15565";
  username = "";
  currentDoc: any;
  codox: any;
  boundCallback: Function;

  public ngOnInit() {
    this.boundCallback = this.updateContent.bind(this);
  }

  constructor() {
    this.currentDoc = { "id": "e1626875-8d25-4f98-abd8-abfdd7010d69", "name": "Bob Froala",  "username": "Bob" };
    this.username = this.currentDoc.username;
    this.codox = new Codox();
  }

  updateContent( content) {
    this.currentDoc = { ...this.currentDoc, content };
  }
}
