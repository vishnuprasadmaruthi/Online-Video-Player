import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/video';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-videocentre',
  templateUrl: './videocentre.component.html',
  styleUrls: ['./videocentre.component.css'],
  providers: [VideoService]
})
export class VideocentreComponent implements OnInit {

  // videos: Video[] = [
  //   {"_id": "1", "title":"Title 1", "url": "url 1", "description": "description 1"},
  //   {"_id": "2", "title":"Title 2", "url": "url 2", "description": "description 2"},
  //   {"_id": "3", "title":"Title 3", "url": "url 3", "description": "description 3"},
  //   {"_id": "4", "title":"Title 4", "url": "url 4", "description": "description 4"},
  // ]

  videos: Array<Video>;
  private hidenewVideo: boolean = true;
  constructor(private _videoService: VideoService) { }

  ngOnInit() {
    this._videoService.getVideos()
      .subscribe(res => this.videos = res)
  }

  selectedVideo: Video;

  onSelectVideo(video: any){
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

  newVideo(){
    this.hidenewVideo = false;
  }

  onSubmitAddVideo(video: Video){
    this._videoService.addVideo(video)
      .subscribe(resNewVideo => {
        this.videos.push(resNewVideo);
        this.hidenewVideo = true;
        this.selectedVideo = resNewVideo;
      })
  }

  onClickCancel(){
    this.hidenewVideo = true;
  }

  onUpdateVideoEvent(video: any){
    this._videoService.updateVideo(video)
      .subscribe(resUpdatedVideo => video = resUpdatedVideo);
    this.selectedVideo = null;
  }

  onDeleteVideoEvent(video: any){
    let videoArray = this.videos;
    this._videoService.deleteVideo(video)
      .subscribe(resDeletedVideo => {
        for(let i=0; i< videoArray.length; i++){
          if(videoArray[i]._id === video._id){
            videoArray.splice(i,1);
          }
        }
      });
      this.selectedVideo = null;
  }

}
