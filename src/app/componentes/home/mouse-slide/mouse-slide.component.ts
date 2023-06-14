import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-slide',
  templateUrl: './mouse-slide.component.html',
  styleUrls: ['./mouse-slide.component.css']
})
export class MouseSlideComponent implements OnInit{
  cards : HTMLDivElement[] = [];
  cards_desc : HTMLDivElement[] = [];

  onHoverIn(num: number ){
    this.cards.forEach((element,i) => {
      if(i != num){
        element.classList.remove('apres');
        this.cards_desc = Array.from(element.querySelectorAll('.description')) as HTMLDivElement[];
        this.cards_desc[0].style.opacity = '0';
      }else{
        element.classList.add('apres');
        this.cards_desc = Array.from(element.querySelectorAll('.description')) as HTMLDivElement[];
        this.cards_desc[0].style.opacity = '1';
      }

    });

  }

  ngOnInit(): void {
    this.cards = Array.from(document.querySelectorAll('.card')) as HTMLDivElement[];
    this.cards_desc = Array.from(this.cards[0].querySelectorAll('.description')) as HTMLDivElement[];
    this.cards_desc[0].style.opacity = '1';
    this.cards[0].classList.add('apres');
  }
}
