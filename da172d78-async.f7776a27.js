(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["da172d78"],{da172d78:function(e,a,n){"use strict";n.d(a,"__esModule",{value:!0}),n.d(a,"texts",{enumerable:!0,get:function(){return t;}}),n("48d309ac");let t=[{value:"createGraph(\n  {\n    autoFit: 'center',\n    data: {\n      nodes: [\n        {\n          id: 'node1',\n          style: {\n            fill: 'transparent',\n            size: 60,\n            donuts: [30, 30, 20, 20],\n            donutPalette: ['#1783FF', '#00C9C9', '#F08F56', '#D580FF'],\n          },\n        },\n      ],\n    },\n    node: { type: 'donut' },\n    plugins: [{ type: 'grid-line', size: 30 }],\n  },\n  { width: 600, height: 220 },\n  (gui, graph) => {\n    gui.add({ type: 'donut' }, 'type').disable();\n\n    const options = {\n      size: 60,\n      innerR: 50,\n      donutPalette: ['#1783FF', '#00C9C9', '#F08F56', '#D580FF'],\n    };\n    const optionFolder = gui.addFolder('donut.style');\n    optionFolder.add(options, 'size', 0, 100, 1);\n    optionFolder.add(options, 'innerR', 0, 100, 1).name('innerR(%)');\n    optionFolder.add(options, 'donutPalette', ['spectral', 'tableau', ['#1783FF', '#00C9C9', '#F08F56', '#D580FF']]);\n\n    optionFolder.onChange(({ property, value }) => {\n      if (property === 'innerR') value = value + '%';\n      graph.updateNodeData([{ id: 'node1', style: { [property]: value } }]);\n      graph.render();\n    });\n  },\n);\n",paraId:0},{value:"If the element has its specific properties, we will list them below. For all generic style attributes, see",paraId:1},{value:"BaseNode",paraId:2},{value:"string |",paraId:3,tocIndex:0},{value:" ",paraId:3,tocIndex:0},{value:"string[]",paraId:3,tocIndex:0},{value:" ",paraId:3,tocIndex:0},{value:"Default:",paraId:3,tocIndex:0},{value:" ",paraId:3,tocIndex:0},{value:"'tableau'",paraId:3,tocIndex:0},{value:"Color or palette.",paraId:4,tocIndex:0},{value:"number[] |",paraId:5,tocIndex:1},{value:" ",paraId:5,tocIndex:1},{value:"DonutRound",paraId:5,tocIndex:1},{value:"[]",paraId:5,tocIndex:1},{value:"Donut data.",paraId:6,tocIndex:1},{value:"string | number",paraId:7,tocIndex:2},{value:" ",paraId:7,tocIndex:2},{value:"Default:",paraId:7,tocIndex:2},{value:" ",paraId:7,tocIndex:2},{value:"'50%'",paraId:7,tocIndex:2},{value:"Inner ring radius, using percentage or pixel value.",paraId:8,tocIndex:2},{value:"BaseStyleProps",paraId:9},{value:"An expression like icon{TextStyleProps} indicates that properties of the TextStyleProps type are prefixed with icon in camelCase format.",paraId:9},{value:"TextStyleProps includes the following properties:",paraId:10,tocIndex:4},{value:"fill",paraId:11,tocIndex:4},{value:"fontSize",paraId:11,tocIndex:4},{value:"fontWeight",paraId:11,tocIndex:4},{value:"...",paraId:11,tocIndex:4},{value:"icon{TextStyleProps} means you need to use the following property names:",paraId:12,tocIndex:4},{value:"iconFill",paraId:13,tocIndex:4},{value:"iconFontSize",paraId:13,tocIndex:4},{value:"iconFontWeight",paraId:13,tocIndex:4},{value:"...",paraId:13,tocIndex:4}];}}]);
//# sourceMappingURL=da172d78-async.f7776a27.js.map