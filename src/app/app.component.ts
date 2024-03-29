import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FaceSnapComponent} from "./face-snap/face-snap.component";
import {FaceSnap} from "./Model/FaceSnap";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mySnap! : FaceSnap
  myOtherSnap! : FaceSnap
  myLast! : FaceSnap

  ngOnInit() {
    this.mySnap = new FaceSnap("Jean",
      new Date() ,
      "Voici ma photo" ,
      "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      0);

    this.myOtherSnap = new FaceSnap("Toto",
      new Date() ,
      "Bali" ,
      "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      14);

    this.myLast = new FaceSnap("Titi",
      new Date() ,
      "Vive New York" ,
      "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      4);
  }
}
