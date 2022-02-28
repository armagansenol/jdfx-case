import { transition020 } from './../animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lets-talk',
  templateUrl: './lets-talk.component.html',
  styleUrls: ['./lets-talk.component.scss'],
  animations: [transition020],
})
export class LetsTalkComponent implements OnInit {
  isPrivacyClicked = false;

  constructor() {}

  ngOnInit(): void {}
}
