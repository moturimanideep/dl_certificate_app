import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  data: any = '';
  @ViewChild('content') content: ElementRef;
  // user: any = {
  //   name: ' ',
  //   publickey: '',
  //   blockchainAddress: ''
  // };
  // company: any = {
  //   imgsrc: '../../../assets/logo.png',
  //   alumn: 'Alumns',
  //   name: 'Digital Lync Enterpreneurship Bootcamp',
  //   address: 'Gachibowli, Hyderabad, April 8-2018'
  // };
  // enterpreneur: any = {
  //   name: 'Hari Prasad',
  //   sign: '../../../assets/sign.png',
  //   designation: 'Blockchain Digital Lync Enterpreneurship'
  // };
  constructor(private commonService: CommonService) { 
    // this.user.name = 'Hari Prasad';
    // this.user.publickey = '1jhukjhkj56khvh89vbeuyuvdkg7';
    // this.user.blockchainAddress = 'huyhguvhgufj84794y43tyuhgcte7u23hVerify';
    console.log(this.data = this.commonService.getCertificateStatus());
  }

  ngOnInit() {
  }

  // downloadPDF(){
  //   let doc = new jsPDF('landscape');
  //   let specialElementsHandlers  = {
  //     '#editor': function(element, renderer){
  //       return true; 
  //     }
  //   };

  //   let content  = this.content.nativeElement;
  //   doc.setFontSize(22);
  //   var width = doc.internal.pageSize.width;    
  //   var height = doc.internal.pageSize.height;
  //   doc.fromHTML(content.innerHTML, 0, 0, {
  //     'width': 190,
  //     'elementHandlers': specialElementsHandlers
  //   }, function(){
  //     doc.save('test.pdf');
  //   })
   
  // }

 

}
