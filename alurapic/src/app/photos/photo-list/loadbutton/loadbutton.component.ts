import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loadbutton',
  templateUrl: './loadbutton.component.html',
  styleUrls: ['./loadbutton.component.css']
})
export class LoadbuttonComponent implements OnInit {

  @Input() hasMore: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
