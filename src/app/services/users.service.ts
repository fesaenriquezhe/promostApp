import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  datauser:any;
  datauserid:any;
  maxuser:any;
  resdata:any;
  resdataup:any;
  resdatadel:any;
  msjpost="";
  msjput="";
  msjdele="";

  constructor(public httpc: HttpClient) { }

  getUsers(url:string){
    this.httpc.get(url+"/usuarios")
        .subscribe(
            res => {
                this.datauser = res;
                console.log(this.datauser);
            },
            error => {
                console.log(error);
            }
        );
  }

  getUsersId(id:string, url:string){
    this.httpc.get(url+"/usuarios/"+id)
        .subscribe(
            res => {
                this.datauserid = res;
                console.log(this.datauserid);
            },
            error => {
                console.log(error);
            }
        );
  }

  getUsersMax(url:string){
    this.httpc.get(url+"/maxusuarios")    
        .subscribe(
            res => {
                this.maxuser = res;
                console.log(this.maxuser);
            },
            error => {
                console.log(error);
            }
        );
  }

  addUsers(url:string,postData:any){
    this.httpc.post(url+"/usuarios",postData)
      .subscribe(async data => {
        this.resdata = data;
        this.msjpost = this.resdata.message;
        //console.log(this.msjpost);
       });
  }

  upUsers(url:string,id:string,postData:any){
    this.httpc.put(url+"/usuarios/"+id,postData)
      .subscribe(async data => {
        this.resdataup = data;
        this.msjput = this.resdataup.message;
        //console.log(this.msjpost);
       });
  }

  delUser(url:string,id:string){
    this.httpc.delete(url+"/usuarios/"+id)
    .subscribe(async data => {
      this.resdatadel = data;
      this.msjdele = this.resdatadel.message;
    });
  }
  
}
