import { NgClass, NgStyle } from '@angular/common';
import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Slide } from '../../core/interfaces/slide';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit, OnDestroy {
  @ViewChild('imgShowcase') imgShowcase!: ElementRef;
  imgId: number = 1;

  @Input() slides: Slide[] = [];
  @Input() indicatorsVisible = true;
  @Input() animationSpeed = 500;
  @Input() autoPlay = false;
  @Input() autoPlaySpeed = 3000;

  currentSlide = 0;
  hidden = false;

  private intervalId: any;

  ngOnInit() {
    if (this.autoPlay) {
      this.intervalId = setInterval(() => {
        this.next();
      }, this.autoPlaySpeed);
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  next() {
    let currentSlide = (this.currentSlide + 1) % this.slides.length;

    this.jumpToSlide(currentSlide);
  }

  previous() {
    let currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;

    this.jumpToSlide(currentSlide);
  }

  jumpToSlide(index: number) {
    this.hidden = true;
    setTimeout(() => {
      this.currentSlide = index;
      this.hidden = false;
    }, this.animationSpeed);

  }

  slideImage(): void {
    const displayWidth = this.imgShowcase.nativeElement
      .querySelector('indicator')
      .clientWidth;

    this.imgShowcase.nativeElement.style.transform = `translateX(${-(this.currentSlide) * displayWidth}px)`;
  }

  @HostListener('window:resize') onWindowResize(): void {
    this.slideImage();
  }


}
