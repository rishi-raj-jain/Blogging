import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';

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
    private http: HttpClient,
    private meta: Meta,
    private titleService: Title
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
      console.log('Here');
      this.http.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40s_eschweiler')
      .subscribe(
        (r)=>{
          console.log(r);
          let response= JSON.parse(JSON.stringify(r));
          let blogs= response['items'];
          let thisblog= blogs.filter(ele => ele.title===this.id)[0];
          this.title= thisblog['title'];
          this.thumbnail= thisblog['thumbnail'];
          this.content= thisblog['content'];
          this.titleService.setTitle(this.title);
          let title= this.title;
          let desc= this.content;
          let timeofcreation= thisblog['pubDate'];
          let author= thisblog['author'];
          let urltoshare= this.router.url;
          this.meta.updateTag({name: 'canonical', content: urltoshare});
          this.meta.updateTag({property: 'al:web:url', content: urltoshare});
          this.meta.updateTag({property: 'al:web:url', content: urltoshare});
          this.meta.updateTag({property: 'og:url', content: urltoshare});
          this.meta.updateTag({property: 'canonical', content: urltoshare});
          this.meta.updateTag({name: 'al:web:url', content: urltoshare});
          this.meta.updateTag({name: 'al:web:url', content: urltoshare});
          this.meta.updateTag({name: 'og:url', content: urltoshare});
          this.meta.updateTag({name: 'title', content: title});
          this.meta.updateTag({name: 'description', content: desc});
          this.meta.updateTag({name: 'twitter:app:name:iphone', content: 'company_name'});
          this.meta.updateTag({name: 'twitter:app:id:iphone', content: 'id_number'});
          this.meta.updateTag({name: 'al:ios:app_name', content: 'company_name'});
          this.meta.updateTag({name: 'al:ios:app_store_id', content: 'id_number'});
          this.meta.updateTag({name: 'al:android:package', content: 'com.company_name.company_namerx'});
          this.meta.updateTag({name: 'og:site_name', content: 'company_name'});
          this.meta.updateTag({name: 'og:type', content: 'article'});
          this.meta.updateTag({name: 'article:published_time', content: timeofcreation});
          this.meta.updateTag({name: 'og:title', content: title});
          this.meta.updateTag({name: 'twitter:title', content: title});
          this.meta.updateTag({name: 'twitter:site', content: '@company_name'});
          this.meta.updateTag({name: 'og:description', content: desc});
          this.meta.updateTag({name: 'twitter:description', content: desc});
          this.meta.updateTag({name: 'twitter:site', content: '@company_name'});
          this.meta.updateTag({name: 'og:description', content: desc});
          this.meta.updateTag({name: 'twitter:description', content: desc});
          this.meta.updateTag({name: 'twitter:card', content: 'summary'});
          this.meta.updateTag({name: 'twitter:description', content: desc});
          this.meta.updateTag({name: 'author', content: author});
          this.meta.updateTag({name: 'robots', content: 'index, follow'});
          this.meta.updateTag({name: 'referrer', content: 'unsafe-url'});
          this.meta.updateTag({name: 'author', content: author});
          this.meta.updateTag({name: 'article:author', content: 'https://medium.com/@company_name'});
          this.meta.updateTag({name: 'twitter:creator', content: '@company_name'});
          this.meta.updateTag({property: 'title', content: title});
          this.meta.updateTag({property: 'description', content: desc});
          this.meta.updateTag({property: 'twitter:app:name:iphone', content: 'company_name'});
          this.meta.updateTag({property: 'twitter:app:id:iphone', content: 'id_number'});
          this.meta.updateTag({property: 'al:ios:app_name', content: 'company_name'});
          this.meta.updateTag({property: 'al:ios:app_store_id', content: 'id_number'});
          this.meta.updateTag({property: 'al:android:package', content: 'com.company_name.company_namerx'});
          this.meta.updateTag({property: 'og:site_name', content: 'company_name'});
          this.meta.updateTag({property: 'og:type', content: 'article'});
          this.meta.updateTag({property: 'article:published_time', content: timeofcreation});
          this.meta.updateTag({property: 'og:title', content: title});
          this.meta.updateTag({property: 'twitter:title', content: title});
          this.meta.updateTag({property: 'twitter:site', content: '@company_name'});
          this.meta.updateTag({property: 'og:description', content: desc});
          this.meta.updateTag({property: 'twitter:description', content: desc});
          this.meta.updateTag({property: 'twitter:site', content: '@company_name'});
          this.meta.updateTag({property: 'og:description', content: desc});
          this.meta.updateTag({property: 'twitter:description', content: desc});
          this.meta.updateTag({property: 'twitter:card', content: 'summary'});
          this.meta.updateTag({property: 'twitter:description', content: desc});
          this.meta.updateTag({property: 'author', content: author});
          this.meta.updateTag({property: 'robots', content: 'index, follow'});
          this.meta.updateTag({property: 'referrer', content: 'unsafe-url'});
          this.meta.updateTag({property: 'author', content: author});
          this.meta.updateTag({property: 'article:author', content: 'https://medium.com/@company_name'});
          this.meta.updateTag({property: 'twitter:creator', content: '@company_name'});
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