import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent implements AfterViewInit {
  public isVisibleBurger: boolean = false;

  private doc: HTMLElement = document.documentElement;

  public ngAfterViewInit(): void {
    const w = window;

    let prevScroll = w.scrollY || this.doc.scrollTop;
    let curScroll;
    let direction = 0;
    let prevDirection = 0;

    const header = document.getElementById('header');

    const toggleHeader = (newDirection: number, newCurScroll: number) => {
      if (header) {
        if (newDirection === 2 && newCurScroll > 110) {
          header.classList.add('hide');
          prevDirection = newDirection;
        } else if (newDirection === 1) {
          header.classList.remove('hide');
          prevDirection = newDirection;
        }
      }
    };

    const checkScroll = () => {
      curScroll = w.scrollY || this.doc.scrollTop;
      if (curScroll > prevScroll) {
        direction = 2;
      } else if (curScroll < prevScroll) {
        direction = 1;
      }

      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }

      prevScroll = curScroll;
    };

    window.addEventListener('scroll', checkScroll);
  }
}
