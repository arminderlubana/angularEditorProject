import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 6';
  htmlContent = '';
  htmlHeader='';
  htmlFooter='';
  printhtml(): void {

    var myWindow = window.open('', 'my div', 'height=400,width=600');
    myWindow.document.write('<html><head><title>my div</title>');
    /*optional stylesheet*/ //myWindow.document.write('<link rel="stylesheet" href="main.css" type="text/css" />');
    myWindow.document.write('</head><body ><table>');
    myWindow.document.write('<thead><tr><td><img src="http://localhost:51674/images/18907307-7efe-4c9f-8955-47e47f7232b7.jpg"></td></tr></thead>');
    
    myWindow.document.write('<tfoot><tr><td><img src="http://localhost:51674/images/d16881d9-90a4-49b9-82c9-6d70f720b137.jpg"></td></tr></tfoot>');
    myWindow.document.write('<tbody><tr><td>' + this.htmlContent + '</tr></td></tbody>');
    myWindow.document.write('</table></body></html>');
    myWindow.document.close(); // necessary for IE >= 10

    // myWindow.onload = function () { // necessary if the div contain images

    //   myWindow.focus(); // necessary for IE >= 10
    //   myWindow.print();
    //   myWindow.close();
    // // }
    //   var printContents = this.htmlContent;
    //   var originalContents = document.body.innerHTML;

    //   document.body.innerHTML = printContents;

    //   window.print();

    //   document.body.innerHTML = originalContents;


      //     var mywindow = window.open('', 'PRINT', 'height=400,width=600');

      // mywindow.document.body.innerHTML = this.htmlContent;


      // //mywindow.document.close(); // necessary for IE >= 10
      // //mywindow.focus(); // necessary for IE >= 10*/

      // mywindow.print();
      //mywindow.close();

      //   var mywindow = window.open('', 'PRINT', 'height=400,width=600');

      // mywindow.document.write('<html><head><title> Arminder </title>');
      // mywindow.document.write('</head><body >');
      // mywindow.document.write('<h1>' + document.title  + '</h1>');
      // mywindow.document.write(document.getElementById(elem).innerHTML);
      // mywindow.document.write('</body></html>');

      // mywindow.document.close(); // necessary for IE >= 10
      // mywindow.focus(); // necessary for IE >= 10*/

      // mywindow.print();
      // mywindow.close();


    }
    configHeader: AngularEditorConfig = {
      editable: true,
      spellcheck: true,
      height: '5rem',
      minHeight: '5rem',
      minWidth: '15rem',
      width: '50rem',
      placeholder: 'Enter header here...',
      translate: 'no',
      // uploadUrl: 'http://localhost:51674/api/Image',
      uploadUrl: 'http://localhost:65444/api/Image',
      
      customClasses: [
        {
          name: "quote",
          class: "quote",
        },
        {
          name: 'redText',
          class: 'redText'
        },]
      }
      configFooter: AngularEditorConfig = {
        editable: true,
        spellcheck: true,
        height: '5rem',
        minHeight: '5rem',
        minWidth: '15rem',
        width: '50rem',
        placeholder: 'Enter footer here...',
        translate: 'no',
        uploadUrl: 'http://localhost:51674/api/Image',
        customClasses: [
          {
            name: "quote",
            class: "quote",
          },
          {
            name: 'redText',
            class: 'redText'
          },
        ]
        }
    config: AngularEditorConfig = {
      editable: true,
      spellcheck: true,
      height: '15rem',
      minHeight: '5rem',
      minWidth: '15rem',
      width: '50rem',
      placeholder: 'Enter text here...',
      translate: 'no',
      uploadUrl: 'http://localhost:65444/api/Image',
      customClasses: [
        {
          name: "quote",
          class: "quote",
        },
        {
          name: 'redText',
          class: 'redText'
        },
        {
          name: "titleText",
          class: "titleText",
          tag: "h1",
        },
        {
          name: "checkbox",
          class: "checkbox",
          tag: "input",
        },
        {
          name: "textbox",
          class: "textbox",
          tag: "input",

        },
        {
          name: "static textbox",
          class: "staticTextBox",
          tag: "input",
        },
        {
          name: "nrkbackground",
          class: "nrkbackground",
          tag: "div",
        },
        {
          name: "container",
          class: "container",
          tag: "div",
        },
        {
          name: "text-block",
          class: "text-block",
          tag: "div",
        },
      ]
    }
  }
