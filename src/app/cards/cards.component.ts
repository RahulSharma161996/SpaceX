import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  allcards;

  constructor(public cardsService: CardService) { }

  ngOnInit(): void {
    this.cardsService.loader = true;
    this.getAllcards();
  }

  getAllcards(){
    this.cardsService.getAlldata().subscribe(res => {
      this.cardsService.allRecords = res;
      if(!this.cardsService.backupRecords){
        this.cardsService.backupRecords = res;
      }
      this.cardsService.loader = false;
    })
  }
  
}
