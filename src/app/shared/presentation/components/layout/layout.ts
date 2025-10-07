import { Component } from '@angular/core';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {LanguageSwitcher} from '../language-switcher/language-switcher';
import {FooterContent} from '../footer-content/footer-content';
import {MatButton} from '@angular/material/button';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  imports: [
    MatToolbar,
    MatToolbarRow,
    LanguageSwitcher,
    FooterContent,
    MatButton,
    RouterLink,
    RouterLinkActive,
    TranslatePipe,
    RouterOutlet
  ],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout {
  options = [
    {link: '/home', label: 'option.home'},
    {link: '/inventory', label: 'option.inventory'},
    {link: '/about', label: 'option.about'},
    {link: '/profile', label: 'option.profile'},
    {link: '/reports', label: 'option.reports'}
  ]
}
