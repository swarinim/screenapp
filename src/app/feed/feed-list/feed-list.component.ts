import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css']
})
export class FeedListComponent implements OnInit {

  feedList = [];

  constructor(private feedService: FeedService) {}

  ngOnInit(): void {
    this.feedService.getFeed();
    this.feedService.getFeedUpdateListener().subscribe(data => {
      this.feedList = data;
    })
  }
}