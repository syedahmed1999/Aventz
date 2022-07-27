import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
})
export class AuthLayoutComponent implements OnInit {
  private toggleButton: any;
  private sidebarVisible: boolean;
  mobile_menu_visible: any = 0;
  private sub!: Subscription;

  constructor(private router: Router, private element: ElementRef) {
    this.sidebarVisible = false;
  }
  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;

    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    this.sub = this.router.events.subscribe(() => {
      this.sidebarClose();
      const $layer = document.getElementsByClassName('close-layer')[0];
      if ($layer) {
        $layer.remove();
      }
    });
  }
  sidebarOpen() {
    var $toggle = document.getElementsByClassName('navbar-toggler')[0];
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);
    body.classList.add('nav-open');
    setTimeout(function () {
      $toggle.classList.add('toggled');
    }, 430);

    var $layer = document.createElement('div');
    $layer.setAttribute('class', 'close-layer');

    if (body.querySelectorAll('.wrapper-full-page')) {
      document
        .getElementsByClassName('wrapper-full-page')[0]
        .appendChild($layer);
    } else if (body.classList.contains('off-canvas-sidebar')) {
      document
        .getElementsByClassName('wrapper-full-page')[0]
        .appendChild($layer);
    }

    setTimeout(() => {
      $layer.classList.add('visible');
    }, 100);
    let curr = this;
    $layer.onclick = function () {
      body.classList.remove('nav-open');
      curr.mobile_menu_visible = 0;
      curr.sidebarVisible = false;

      $layer.classList.remove('visible');
      setTimeout(function () {
        $layer.remove();
        $toggle.classList.remove('toggled');
      }, 400);
    }.bind(this);

    body.classList.add('nav-open');
    this.mobile_menu_visible = 1;
    this.sidebarVisible = true;
  }
  sidebarClose() {


    this.mobile_menu_visible = 0;
  }
  sidebarToggle() {
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }
}
