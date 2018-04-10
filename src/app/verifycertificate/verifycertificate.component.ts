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
  fileName: any;
  fileExtension: any;
  fileExtensionMessage: any;
  fileExtensionError: boolean = false;
  response_msg: any;
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit() {
  }
  onFileSelected(event){
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    this.fileName = this.selectedFile.name;
    var allowedExtensions = ["PDF", "pdf"];
    this.fileExtension = this.fileName.split('.').pop();
    if(this.isInArray(allowedExtensions, this.fileExtension)) {
      this.fileExtensionError = false;
      this.fileExtensionMessage = ""
  } else {
      this.fileExtensionMessage = "Only pdf allowed!"
      this.fileExtensionError = true;
  }
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
            this.response_msg = this.res.message; 
            // this.router.navigate(['/certificate']);
          }else if(this.res.status == '0'){
            this.response_msg = this.res.message; 
            // this.router.navigate(['/certificate']);
          }
        
        
        },

        (error) => { console.log(error);}
    )
  }
  isInArray(array, word) {
    return array.indexOf(word.toLowerCase()) > -1;
}
}
