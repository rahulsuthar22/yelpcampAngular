import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CARD } from 'src/app/CARD';

@Component({
  selector: 'app-new-camp',
  templateUrl: './new-camp.component.html',
  styleUrls: ['./new-camp.component.css'],
})
export class NewCampComponent implements OnInit {
  @Output() onAdd: EventEmitter<CARD> = new EventEmitter();
  title!: string;
  desc!: string;
  url!: string;

  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    const addCamp: CARD = {
      title: this.title,
      desc: this.desc,
      url: 'https://picsum.photos/seed/picsum/100/100',
    };
    console.log(addCamp);
    this.onAdd.emit(addCamp);

    this.title = '';
    this.desc = '';
    this.url = '';
  }
}
