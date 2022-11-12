import { Component, OnInit, AfterContentInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit, AfterContentInit {
  blogs: any

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.http.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40s_eschweiler').subscribe(
      (r) => {
        console.log(r)
        let response = JSON.parse(JSON.stringify(r))
        this.blogs = response['items']
      },
      (e) => {
        console.log(e)
      }
    )
  }
}
