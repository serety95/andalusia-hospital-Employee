import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  time = new Date();
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.time = new Date();
   }, 1000);
  }

}
