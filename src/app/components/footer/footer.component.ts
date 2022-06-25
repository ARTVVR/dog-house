import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export default class FooterComponent implements AfterViewInit {
  public isVisible: boolean = false;

  public isLoading: boolean = true;

  public progressDiameter: number = window.innerWidth <= 700 ? 50 : 80;

  ngAfterViewInit(): void {
    const elem: HTMLElement | null = document.getElementById('map-container');

    const showMap = () => {
      this.isVisible = true;
    };

    function onScroll() {
      if (elem) {
        const posTop = elem.getBoundingClientRect().top;

        if (posTop <= window.innerHeight && posTop >= 0) {
          showMap();
          document.removeEventListener('scroll', onScroll);
        }
      }
    }
    document.addEventListener('scroll', onScroll);
  }

  public removeLoading(): void {
    this.isLoading = false;
  }
}
