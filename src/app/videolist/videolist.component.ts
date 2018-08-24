import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/video';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css'],
  inputs: ['videos'],
  outputs: ['selectVideo']
})
export class VideolistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public selectVideo = new EventEmitter();

  onSelect(vid: Video){
    this.selectVideo.emit(vid);
  }
}
