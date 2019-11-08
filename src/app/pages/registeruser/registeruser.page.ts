import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.page.html',
  styleUrls: ['./registeruser.page.scss'],
})
export class RegisteruserPage implements OnInit {

  public registerFormE: FormGroup;
  datauser:any;
  url="";
  msj="";
  itemRE:any;

  constructor(public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router, 
    public httpc: HttpClient) { 
      this.registerFormE = formBuilder.group({
        noctrl: ['', [Validators.required,Validators.pattern(/^[0-9]*$/),Validators.maxLength(8)]],
        name: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Zá-źÁ-Ź ]*$/)])],
        last: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Zá-źÁ-Ź ]*$/)])],
        email: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]],
        password: ['', [Validators.required,Validators.pattern(/^[0-9]*$/)]],
        passwordc: ['', [Validators.required,Validators.pattern(/^[0-9]*$/)]],
        carrerasel: ['',[Validators.required]],
        telefono: ['', [Validators.required,Validators.pattern(/^[0-9]*$/),Validators.maxLength(10)]]
      });
    }

  ngOnInit() {
    this.httpc.get(this.url+"/estudiantes")    
        .subscribe(
            res => {
                this.datauser = res;
                //console.log(this.dataes);
            },
            error => {
                console.log(error);
            }
        );    
  }

}
