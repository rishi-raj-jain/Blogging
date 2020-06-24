import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit, AfterContentInit {

  @Input()
  title: any;
  @Input()
  thumbnail: any;
  @Input()
  link: any;
  @Input()
  content: any;
  intro: any;
  id: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if(id) this.id= id;
    });
  }

  ngAfterContentInit(): void {
    if(!this.id){
      this.intro= JSON.stringify(this.content);
      this.intro= this.intro.substring(this.intro.indexOf('<p>')+3, this.intro.indexOf('</p>')).replace(/<(.|\n)*?>/g, '');
      console.log(this.intro);
    }
    else{
      this.http.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40s_eschweiler')
      .subscribe(
        (r)=>{
          console.log(r);
          let response= JSON.parse(JSON.stringify(r));
          let blogs= response['items'];
          let thisblog= blogs.filter(ele => ele.title===this.id)[0];
          console.log(thisblog);
          this.title= thisblog['title'];
          this.thumbnail= thisblog['thumbnail'];
          this.content= thisblog['content'];
        },
        (e)=>{
          console.log(e);
        }
      )
    }
  }

  taketotheblog(){
    if(!this.id){
      this.router.navigate(['/blogs/' + this.title]);
    }
  }

}