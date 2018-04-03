import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-verifycertificate',
  templateUrl: './verifycertificate.component.html',
  styleUrls: ['./verifycertificate.component.css']
})
export class VerifycertificateComponent implements OnInit {
  logo: string = '../../../assets/logo.png';
  selectedFile: File = null;
  fd: any;
  transactionid: any;
  res: any;
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit() {
  }
  onFileSelected(event){
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }
  onUpload(transactionid: any){
     this.transactionid = transactionid;
    this.fd = new FormData();
    this.fd.append('file-to-upload', this.selectedFile, this.selectedFile.name);
    this.fd.append('transaction_id', this.transactionid);
    // this.fd.transaction_id = this.transactionid;
    console.log(this.fd);
    this.commonService.verifyCertificate(this.fd).subscribe(
        (response) => { 
          this.res = response ; 
          console.log(this.res) 
          if(this.res.status == '1'){
            this.router.navigate(['/certificate']);
          }
        
        
        },

        (error) => { console.log(error);}
    )
  }
}
