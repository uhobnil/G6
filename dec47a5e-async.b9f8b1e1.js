(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["dec47a5e"],{dec47a5e:function(n,e,a){"use strict";a.d(e,"__esModule",{value:!0}),a.d(e,"texts",{enumerable:!0,get:function(){return t;}}),a("d6294dbd");let t=[{value:"Refer to the example below, you can use G6 in Angular, and you can also view the ",paraId:0},{value:"Live Example",paraId:0},{value:"\u3002",paraId:0},{value:"app.component.html",paraId:1},{value:"<div>\n  <h1>{{ title }}</h1>\n  <div #container></div>\n</div>\n",paraId:2},{value:"app.component.ts",paraId:3},{value:"import { Component, ViewChild, ElementRef } from '@angular/core';\nimport { Graph } from '@antv/g6';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css'],\n})\nexport class AppComponent {\n  title = 'Use G6 in Angular';\n\n  @ViewChild('container') container: ElementRef;\n\n  ngAfterViewInit() {\n    const graph = new Graph({\n      container: this.container.nativeElement,\n      width: 500,\n      height: 500,\n      data: {\n        nodes: [\n          {\n            id: 'node-1',\n            style: { x: 50, y: 100 },\n          },\n          {\n            id: 'node-2',\n            style: { x: 150, y: 100 },\n          },\n        ],\n        edges: [{ id: 'edge-1', source: 'node-1', target: 'node-2' }],\n      },\n    });\n\n    graph.render();\n  }\n}\n",paraId:4}];}}]);
//# sourceMappingURL=dec47a5e-async.b9f8b1e1.js.map