import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  time = new Date();
  langFlag = '../../../assets/images/english.png';
  currentLang: string;
  direction: any = ['ltr', 'rtl'];

  constructor(public translate: TranslateService) {
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);
    if (this.currentLang === 'en') {
      this.langFlag = '../../../assets/images/english.png';
    } else {
      this.langFlag = '../../../assets/images/arabic.png';
    }
  }

  ngOnInit(): void {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
  changeCurrentLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
    if (lang === 'en') {
      this.langFlag = '../../../assets/images/english.png';
      document.dir = this.direction[0];
     
    } else {
      this.langFlag = '../../../assets/images/arabic.png';
      document.dir = this.direction[1];
    }
  }
}
