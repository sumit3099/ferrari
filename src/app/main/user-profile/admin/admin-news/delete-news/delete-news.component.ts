import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../../../../environments/environment';
import { Headers } from '@angular/http';
@Component({
  selector: 'app-delete-news',
  templateUrl: './delete-news.component.html',
  styleUrls: ['./delete-news.component.css']
})
export class DeleteNewsComponent implements OnInit {
  constructor(private http: Http) { }
  newsURL = environment.currentServerURL + "/api/news";
   allnewsData=[];
  newssObservable:any;
  newsData=[];
  newssArray=[];
  buttonValue:Boolean=true;
   url: string = environment.currentServerURL + "/api/newsDelete";
    newsSearch: string = '';
  ngOnInit() {
     this.getdata();
  }
getdata()
{
   const authToken = localStorage.getItem("token");
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('Authorization', authToken);
 this.newssObservable=this.http.get(this.newsURL, { headers: headers }).map(res => res.json());
      this.newssObservable.subscribe((resp) => {
        this.assignNewsData(resp);
      });
}
  assignNewsData(MData) {
    this.allnewsData = MData.data;
    this.newsData= MData.data;
    
     }
addnewss(val)
  {
    let index=this.newssArray.indexOf(val.target.id);
    if(index==-1)
    {
 this.newssArray.push(val.target.id);
    }
    else
    {
 this.newssArray.splice(index, 1);
    }  
  }
removeElement(itemArray)
{
for(let i=0;i<itemArray.length;i++)
{
  for(let j=0;j<this.newsData.length;j++)
{
  if(this.newsData[j].multimediaId==itemArray[i])
  {
     this.newsData.splice(j, 1);
  }
}
}
}
deletenewss()
  {
    if(this.newssArray.length==0)
    {
      alert('None Of the Vedio Has Been Selected');
    }
else
{
 
this.removeElement(this.newssArray);
  this.http.post(this.url, { data: this.newssArray})
          .map((res) => res.json())
          .subscribe((response) => { 
              Materialize.toast(response.data, 4000);
                      
        });
        this.newsData.splice(0,this.newsData.length);
       this.newssArray.splice(0,this.newssArray.length);
       this.allnewsData=[];
       this.newsData=[];
  this.getdata();
this.buttonValue=true;
this.getdata();
}
}
filtersearch(x) {
    this.newsData = this.allnewsData.filter(e => {
      var tmpString = e.title.toUpperCase();
      return tmpString.includes(x.target.value.toUpperCase())
    });
  }
}
