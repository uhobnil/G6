(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["df4b7101"],{df4b7101:function(a,e,n){"use strict";n.d(e,"__esModule",{value:!0}),n.d(e,"texts",{enumerable:!0,get:function(){return d;}}),n("789978f4");let d=[{value:"createGraph(\n  {\n    data: { nodes: [{ id: 'node-1' }] },\n    layout: { type: 'force' },\n    behaviors: [\n      {\n        type: 'drag-canvas',\n        key: 'drag-canvas',\n      },\n    ],\n    node: { style: { fill: '#7e3feb' } },\n    edge: { style: { stroke: '#8b9baf' } },\n    plugins: [{ type: 'grid-line', size: 30 }],\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    const options = {\n      key: 'drag-canvas',\n      type: 'drag-canvas',\n      enable: true,\n      sensitivity: 1,\n      trigger: 'Use cursor by default',\n    };\n    const optionFolder = gui.addFolder('ZoomCanvas Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'enable');\n    optionFolder.add(options, 'sensitivity', 0, 10, 1);\n    optionFolder.add(options, 'trigger', {\n      'Use cursor by default': [],\n      'Shift+Arrow Key': {\n        up: ['Shift', 'ArrowUp'],\n        down: ['Shift', 'ArrowDown'],\n        left: ['Shift', 'ArrowLeft'],\n        right: ['Shift', 'ArrowRight'],\n      },\n    });\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'drag-canvas',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",paraId:0},{value:"string",paraId:1,tocIndex:1},{value:"\u4EA4\u4E92 key\uFF0C\u5373\u552F\u4E00\u6807\u8BC6",paraId:2,tocIndex:1},{value:" \u7528\u4E8E\u6807\u8BC6\u4EA4\u4E92\uFF0C\u4ECE\u800C\u8FDB\u4E00\u6B65\u64CD\u4F5C\u6B64\u4EA4\u4E92",paraId:3,tocIndex:1},{value:"// Update behavior options\r\ngraph.updateBehavior({key: 'key', ...});\n",paraId:4,tocIndex:1},{value:"Required",paraId:5,tocIndex:1},{value:"string",paraId:6,tocIndex:2},{value:"\u4EA4\u4E92\u7C7B\u578B",paraId:7,tocIndex:2},{value:"ViewportAnimationEffectTiming",paraId:8,tocIndex:3},{value:"\u662F\u5426\u542F\u7528\u62D6\u62FD\u52A8\u753B\uFF0C\u4EC5\u5728\u4F7F\u7528\u6309\u952E\u79FB\u52A8\u65F6\u6709\u6548",paraId:9,tocIndex:3},{value:"'x' | 'y' | 'both'",paraId:10,tocIndex:4},{value:" ",paraId:10,tocIndex:4},{value:"Default:",paraId:10,tocIndex:4},{value:" ``",paraId:10,tocIndex:4},{value:"\u5141\u8BB8\u62D6\u62FD\u65B9\u5411",paraId:11,tocIndex:4},{value:"'x'",paraId:12,tocIndex:4},{value:": \u53EA\u5141\u8BB8\u6C34\u5E73\u62D6\u62FD",paraId:12,tocIndex:4},{value:"'y'",paraId:13,tocIndex:4},{value:": \u53EA\u5141\u8BB8\u5782\u76F4\u62D6\u62FD",paraId:13,tocIndex:4},{value:"'both'",paraId:14,tocIndex:4},{value:": \u4E0D\u53D7\u9650\u5236\uFF0C\u5141\u8BB8\u6C34\u5E73\u548C\u5782\u76F4\u62D6\u62FD",paraId:14,tocIndex:4},{value:"boolean | ((event:",paraId:15,tocIndex:5},{value:" ",paraId:15,tocIndex:5},{value:"IPointerEvent",paraId:16,tocIndex:5},{value:" ",paraId:15,tocIndex:5},{value:"|",paraId:15,tocIndex:5},{value:" ",paraId:15,tocIndex:5},{value:"IKeyboardEvent",paraId:17,tocIndex:5},{value:") => boolean)",paraId:15,tocIndex:5},{value:" ",paraId:15,tocIndex:5},{value:"Default:",paraId:15,tocIndex:5},{value:" ",paraId:15,tocIndex:5},{value:"true",paraId:15,tocIndex:5},{value:"\u662F\u5426\u542F\u7528\u62D6\u62FD\u753B\u5E03\u7684\u529F\u80FD",paraId:18,tocIndex:5},{value:"() => void",paraId:19,tocIndex:6},{value:"\u5B8C\u6210\u62D6\u62FD\u65F6\u7684\u56DE\u8C03",paraId:20,tocIndex:6},{value:"number | number[]",paraId:21,tocIndex:7},{value:" ",paraId:21,tocIndex:7},{value:"Default:",paraId:21,tocIndex:7},{value:" ",paraId:21,tocIndex:7},{value:"1",paraId:21,tocIndex:7},{value:"\u53EF\u62D6\u62FD\u7684\u89C6\u53E3\u8303\u56F4\uFF0C\u9ED8\u8BA4\u6700\u591A\u53EF\u62D6\u62FD\u4E00\u5C4F\u3002\u53EF\u4EE5\u5206\u522B\u8BBE\u7F6E\u4E0A\u3001\u53F3\u3001\u4E0B\u3001\u5DE6\u56DB\u4E2A\u65B9\u5411\u7684\u8303\u56F4\uFF0C\u6BCF\u4E2A\u65B9\u5411\u7684\u8303\u56F4\u5728 [0, Infinity] \u4E4B\u95F4",paraId:22,tocIndex:7},{value:"number",paraId:23,tocIndex:8},{value:" ",paraId:23,tocIndex:8},{value:"Default:",paraId:23,tocIndex:8},{value:" ",paraId:23,tocIndex:8},{value:"10",paraId:23,tocIndex:8},{value:"\u89E6\u53D1\u4E00\u6B21\u6309\u952E\u79FB\u52A8\u7684\u8DDD\u79BB",paraId:24,tocIndex:8},{value:"{ up:",paraId:25,tocIndex:9},{value:" ",paraId:25,tocIndex:9},{value:"string[]",paraId:25,tocIndex:9},{value:"; down:",paraId:25,tocIndex:9},{value:" ",paraId:25,tocIndex:9},{value:"string[]",paraId:25,tocIndex:9},{value:"; left:",paraId:25,tocIndex:9},{value:" ",paraId:25,tocIndex:9},{value:"string[]",paraId:25,tocIndex:9},{value:"; right:",paraId:25,tocIndex:9},{value:" ",paraId:25,tocIndex:9},{value:"string[]",paraId:25,tocIndex:9},{value:"; }",paraId:25,tocIndex:9},{value:"\u89E6\u53D1\u62D6\u62FD\u7684\u65B9\u5F0F\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u6307\u9488\u6309\u4E0B\u62D6\u62FD",paraId:26,tocIndex:9},{value:"destroy(): void;\n",paraId:27,tocIndex:11}];}}]);
//# sourceMappingURL=df4b7101-async.67f80820.js.map