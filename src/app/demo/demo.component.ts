import { AfterViewInit, Component, OnInit } from '@angular/core';
import 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import * as Prism from 'prismjs';


@Component({
  selector: 'app-demo',
  templateUrl:'./demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

   ngAfterViewInit() {
    Prism.highlightAll();
  }

}
