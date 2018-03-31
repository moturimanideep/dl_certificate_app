import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  @ViewChild('content') content: ElementRef;
  user: any = {
    name: ' ',
    publickey: '',
    blockchainAddress: ''
  };
  company: any = {
    imgsrc: '../../../assets/logo.png',
    alumn: 'Alumns',
    name: 'Digital Lync Enterpreneurship Bootcamp',
    address: 'Gachibowli, Hyderabad, April 8-2018'
  };
  enterpreneur: any = {
    name: 'Hari Prasad',
    sign: '../../../assets/sign.png',
    designation: 'Blockchain Digital Lync Enterpreneurship'
  };
  constructor() { 
    this.user.name = 'Hari Prasad';
    this.user.publickey = '1jhukjhkj56khvh89vbeuyuvdkg7';
    this.user.blockchainAddress = 'huyhguvhgufj84794y43tyuhgcte7u23hVerify';
    
  }

  ngOnInit() {
  }

  downloadPDF(){
    let doc = new jsPDF('landscape');
    let specialElementsHandlers  = {
      '#editor': function(element, renderer){
        return true; 
      }
    };

    let content  = this.content.nativeElement;
    doc.setFontSize(22);
    var width = doc.internal.pageSize.width;    
    var height = doc.internal.pageSize.height;
    doc.fromHTML(content.innerHTML, 0, 0, {
      'width': 190,
      'elementHandlers': specialElementsHandlers
    }, function(){
      doc.save('test.pdf');
    })
   
  }

 

}
