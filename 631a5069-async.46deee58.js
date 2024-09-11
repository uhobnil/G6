(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["631a5069"],{"631a5069":function(a,e,n){"use strict";n.d(e,"__esModule",{value:!0}),n.d(e,"texts",{enumerable:!0,get:function(){return d;}}),n("8896f963");let d=[{value:"createGraph(\n  {\n    data: { nodes: [{ id: 'node-1' }] },\n    layout: { type: 'force' },\n    behaviors: [\n      {\n        type: 'drag-canvas',\n        key: 'drag-canvas',\n      },\n    ],\n    node: { style: { fill: '#7e3feb' } },\n    edge: { style: { stroke: '#8b9baf' } },\n    plugins: [{ type: 'grid-line', size: 30 }],\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    const options = {\n      key: 'drag-canvas',\n      type: 'drag-canvas',\n      enable: true,\n      sensitivity: 1,\n      trigger: 'Use cursor by default',\n    };\n    const optionFolder = gui.addFolder('ZoomCanvas Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'enable');\n    optionFolder.add(options, 'sensitivity', 0, 10, 1);\n    optionFolder.add(options, 'trigger', {\n      'Use cursor by default': [],\n      'Shift+Arrow Key': {\n        up: ['Shift', 'ArrowUp'],\n        down: ['Shift', 'ArrowDown'],\n        left: ['Shift', 'ArrowLeft'],\n        right: ['Shift', 'ArrowRight'],\n      },\n    });\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'drag-canvas',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",paraId:0},{value:"string",paraId:1,tocIndex:1},{value:"Behavior key, that is, the unique identifier",paraId:2,tocIndex:1},{value:" Used to identify the behavior for further operations",paraId:3,tocIndex:1},{value:"// Update behavior options\r\ngraph.updateBehavior({key: 'key', ...});\n",paraId:4,tocIndex:1},{value:"Required",paraId:5,tocIndex:1},{value:"string",paraId:6,tocIndex:2},{value:"Behavior type",paraId:7,tocIndex:2},{value:"ViewportAnimationEffectTiming",paraId:8,tocIndex:3},{value:"Whether to enable the animation of dragging, only valid when using key movement",paraId:9,tocIndex:3},{value:"'x' | 'y' | 'both'",paraId:10,tocIndex:4},{value:" ",paraId:10,tocIndex:4},{value:"Default:",paraId:10,tocIndex:4},{value:" ``",paraId:10,tocIndex:4},{value:"Allowed drag direction",paraId:11,tocIndex:4},{value:"'x'",paraId:12,tocIndex:4},{value:": Only allow horizontal drag",paraId:12,tocIndex:4},{value:"'y'",paraId:13,tocIndex:4},{value:": Only allow vertical drag",paraId:13,tocIndex:4},{value:"'both'",paraId:14,tocIndex:4},{value:": Allow horizontal and vertical drag",paraId:14,tocIndex:4},{value:"boolean | ((event:",paraId:15,tocIndex:5},{value:" ",paraId:15,tocIndex:5},{value:"IPointerEvent",paraId:16,tocIndex:5},{value:" ",paraId:15,tocIndex:5},{value:"|",paraId:15,tocIndex:5},{value:" ",paraId:15,tocIndex:5},{value:"IKeyboardEvent",paraId:17,tocIndex:5},{value:") => boolean)",paraId:15,tocIndex:5},{value:" ",paraId:15,tocIndex:5},{value:"Default:",paraId:15,tocIndex:5},{value:" ",paraId:15,tocIndex:5},{value:"true",paraId:15,tocIndex:5},{value:"Whether to enable the function of dragging the canvas",paraId:18,tocIndex:5},{value:"() => void",paraId:19,tocIndex:6},{value:"Callback when dragging is completed",paraId:20,tocIndex:6},{value:"number | number[]",paraId:21,tocIndex:7},{value:" ",paraId:21,tocIndex:7},{value:"Default:",paraId:21,tocIndex:7},{value:" ",paraId:21,tocIndex:7},{value:"1",paraId:21,tocIndex:7},{value:"The draggable viewport range allows you to drag up to one screen by default. You can set the range for each direction (top, right, bottom, left) individually, with each direction's range between [0, Infinity]",paraId:22,tocIndex:7},{value:"number",paraId:23,tocIndex:8},{value:" ",paraId:23,tocIndex:8},{value:"Default:",paraId:23,tocIndex:8},{value:" ",paraId:23,tocIndex:8},{value:"10",paraId:23,tocIndex:8},{value:"The distance of a single key movement",paraId:24,tocIndex:8},{value:"{ up:",paraId:25,tocIndex:9},{value:" ",paraId:25,tocIndex:9},{value:"string[]",paraId:25,tocIndex:9},{value:"; down:",paraId:25,tocIndex:9},{value:" ",paraId:25,tocIndex:9},{value:"string[]",paraId:25,tocIndex:9},{value:"; left:",paraId:25,tocIndex:9},{value:" ",paraId:25,tocIndex:9},{value:"string[]",paraId:25,tocIndex:9},{value:"; right:",paraId:25,tocIndex:9},{value:" ",paraId:25,tocIndex:9},{value:"string[]",paraId:25,tocIndex:9},{value:"; }",paraId:25,tocIndex:9},{value:"The way to trigger dragging, default to dragging with the pointer pressed",paraId:26,tocIndex:9},{value:"destroy(): void;\n",paraId:27,tocIndex:11}];}}]);
//# sourceMappingURL=631a5069-async.46deee58.js.map