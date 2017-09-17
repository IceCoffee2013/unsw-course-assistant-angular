import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Experience} from "../../../models/experience/experience-model";


@Component({
  selector: 'app-write-post',
  templateUrl: './experience-publish.component.html',
  styleUrls: ['./experience-publish.component.scss'],
})

export class ExperiencePublishComponent implements OnInit {
  public editor;
  public experienceForm:FormGroup;
  public editExperience =new Experience();
  editorData = `<h1>Egret | Angular material admin</h1>
  <p><a href="http:themegret.com" target="_blank"><strong>ThemEgret</strong></a></p>
  <p><br></p><p><strong >Lorem Ipsum</strong>
  <span>&nbsp;is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
  galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</span></p>`;


  constructor(private fb: FormBuilder){
    this.createForm();
  }

  ngOnInit() {
  }


  createForm(){
    this.experienceForm = this.fb.group({
      title:['',Validators.required,Validators.maxLength(50),Validators.minLength(5)],
      text: '',
      tags:''
    })
  }
  summit = false;
  onSubmit(){
    this.editExperience = this.experienceForm.value;
    console.log(this.editExperience.text);
    this.summit = true;
  }
  onContentChanged() { }




  onSelectionChanged() { }

  // public fileInputChangeHandler(): void {
  //   let fileInput = <HTMLInputElement>document.getElementById('img_input');
  //   let inputValue = fileInput.value;
  //   if (!inputValue) {
  //     return;
  //   }
  //   let fileForm=<HTMLFormElement>document.getElementById('file_upload_form');
  //   fileForm.action="fileuploadurl";
  //   fileForm.onsubmit=function(event){
  //     console.log(event);
  //     event.preventDefault();
  //     let file=fileInput.files[0];
  //     let formData = new FormData();
  //     formData.append('file', file, file.name);
  //
  //     let xhr = new XMLHttpRequest();
  //     xhr.withCredentials = false;
  //     xhr.open('POST', 'file_upload_URL.php');
  //     xhr.onload = function() {
  //       let json;
  //       if (xhr.status !== 200) {
  //         console.log('HTTP Error: ' + xhr.status);
  //         return;
  //       }
  //       json = JSON.parse(xhr.responseText);
  //       if (!json || typeof json.location != 'string') {
  //         console.log('Invalid JSON: ' + xhr.responseText);
  //         return;
  //       }
  //       console.log(json.location);
  //       fileInput.value='';
  //     };
  //     xhr.send(formData);
  //   }
  //   fileForm.submit();
  //   fileInput.value='';
  // }
  //
  // ngAfterViewInit() {
  //   /**
  //    *  【非常重要】
  //    *  关于TinyMCE的完整文档，请查看这里https://www.tinymce.com/docs/
  //    */
  //   tinymce.init({
  //     selector: '#post_editor',
  //     plugins: [
  //       'advlist autolink lists link image charmap print preview hr anchor pagebreak',
  //       'searchreplace wordcount visualblocks visualchars code fullscreen',
  //       'insertdatetime media nonbreaking save table contextmenu directionality',
  //       'emoticons template paste textcolor colorpicker textpattern imagetools codesample'
  //     ],
  //     toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
  //     toolbar2: 'print preview media | forecolor backcolor emoticons | codesample',
  //     image_advtab: true,
  //     file_browser_callback_types: 'image',
  //     file_browser_callback: function(field_name, url, type, win) {
  //       console.log(type);
  //       console.log(type=='image');
  //       if(type=='image'){
  //         let event = new MouseEvent('click', {
  //           'view': window,
  //           'bubbles': true,
  //           'cancelable': true
  //         });
  //         let fileInput = document.getElementById('img_input');
  //         fileInput.dispatchEvent(event);
  //       }
  //     },
  //     setup: editor => {
  //       this.editor = editor;
  //       editor.on('keyup', () => {
  //         const content = editor.getContent();
  //         console.log(content);
  //       });
  //     }
  //   });
  // }
  //
  // ngOnDestroy() {
  //   tinymce.remove(this.editor);
  // }
}
