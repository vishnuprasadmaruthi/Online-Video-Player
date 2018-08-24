import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Video } from 'src/app/video';

@Component({
  selector: 'videodetail',
  templateUrl: './videodetail.component.html',
  styleUrls: ['./videodetail.component.css'],
  inputs: ['video'],
  outputs: ['updateVideoEvent','deleteVideoEvent']
})
export class VideodetailComponent implements OnInit {
  private editTitle: boolean = false;
  private editUrl: boolean = false;
  private editDesc: boolean = false;
  private video: Video;
  private updateVideoEvent = new EventEmitter();
  private deleteVideoEvent = new EventEmitter();

  
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.editTitle = false;
  }


  onTitleClick(){
    this.editTitle = true;
  }

  onUrlClick(){
    this.editUrl = true;
  }

  onDescClick(){
    this.editDesc = true;
  }

  updateVideo(){
    this.updateVideoEvent.emit(this.video);
  }

  deleteVideo(){
    this.deleteVideoEvent.emit(this.video);
  }
}
