import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, filter, switchMap } from 'rxjs/operators';
import { Video } from 'src/app/video';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private _getUrl = "/api/videos";
  private _postUrl = "/api/video";
  private _putUrl = "/api/video/";
  private _deleteUrl = "/api/video/";

  constructor(private _http: Http) { }

  getVideos(){
    return this._http.get(this._getUrl)
      .pipe(map((response: Response) => response.json()));
    }
  
  addVideo(video: Video){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers});
    return this._http.post(this._postUrl, JSON.stringify(video), options)
      .pipe(map((response: Response) => response.json()));
  }

  updateVideo(video: Video){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers});
    return this._http.put(this._putUrl + video._id, JSON.stringify(video), options)
      .pipe(map((response: Response) => response.json()));
  }

  deleteVideo(video: Video){
    return this._http.delete(this._deleteUrl + video._id)
      .pipe(map((response: Response) => response.json()));
  }

  }
