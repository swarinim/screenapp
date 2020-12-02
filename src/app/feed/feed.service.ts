import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  feed = [];
  feedUpdated = new Subject();

  constructor(private http: HttpClient) { }

  submit(feed: string) {
    const feedItem = {
      feed: feed
    }
    this.http.post<any>("http://localhost:3000/api/feed", feedItem)
      .subscribe(data => {
        this.feed.push(data);
        this.feedUpdated.next([...this.feed])
        console.log(data);
      })
  }

  getFeed() {
    this.http.get<any>("http://localhost:3000/api/feed/").subscribe(data => {
      this.feed = data;
      this.feedUpdated.next([...this.feed]);
    })
  }

  getFeedUpdateListener(): any {
    return this.feedUpdated.asObservable();
  }

}