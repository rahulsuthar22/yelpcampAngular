import { Component, OnInit } from '@angular/core';
import { CARD } from 'src/app/CARD';

@Component({
  selector: 'app-search-page-not',
  templateUrl: './search-page-not.component.html',
  styleUrls: ['./search-page-not.component.css'],
})
export class SearchPageNotComponent implements OnInit {
  cards: CARD[];
  searchTxt!: string;

  constructor() {
    this.cards = [
      {
        title: 'Mount Ulap',
        desc: 'One of the most hikes in Benguet is Mt Ulap in Itogon.',
        url: '../../../assets/images/Mount Ulap.jpg',
      },
      {
        title: 'Calaguas Island',
        desc: 'One of the most hikes in Benguet is Mt Ulap in Itogon.',
        url: '../../../assets/images/Calaguas Island.jpg',
      },
      {
        title: 'Onay Beach',
        desc: 'One of the most hikes in Benguet is Mt Ulap in Itogon.',
        url: '../../../assets/images/Onay Beach.jpg',
      },
      {
        title: 'Seven Sisters Waterfall',
        desc: 'One of the most hikes in Benguet is Mt Ulap in Itogon.',
        url: '../../../assets/images/Seven Sisters Waterfall.jpg',
      },
      {
        title: 'Latik Riverside',
        desc: 'One of the most hikes in Benguet is Mt Ulap in Itogon.',
        url: '../../../assets/images/Latik Riverside.jpg',
      },
      {
        title: 'Buloy Springs',
        desc: 'One of the most hikes in Benguet is Mt Ulap in Itogon.',
        url: '../../../assets/images/Buloy Springs.jpg',
      },
    ];
    console.log(this.searchTxt);
  }

  ngOnInit(): void {}
  addNewCamp(card: CARD) {
    console.log(card);
    this.cards.push(card);
  }
  // Input() {
  //   console.log(this.searchTxt);
  // }
}
