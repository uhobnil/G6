(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["cfd1ba21"],{cfd1ba21:function(e,a,n){"use strict";n.d(a,"__esModule",{value:!0}),n.d(a,"texts",{enumerable:!0,get:function(){return t;}}),n("03730907");let t=[{value:"Extension",paraId:0,tocIndex:0},{value:" is a concept in G6 that collectively refers to all types of registrable content, including elements, behaviors, layouts, and plugins, among others.",paraId:0,tocIndex:0},{value:"Plugin",paraId:1,tocIndex:0},{value:" represents a flexible extension mechanism provided by G6 and is a special type of ",paraId:1,tocIndex:0},{value:"Extension",paraId:1,tocIndex:0},{value:".",paraId:1,tocIndex:0},{value:"Taking ",paraId:2,tocIndex:1},{value:"label",paraId:2,tocIndex:1},{value:" as an example, you can set ",paraId:2,tocIndex:1},{value:"labelWordWrap",paraId:2,tocIndex:1},{value:" and ",paraId:2,tocIndex:1},{value:"labelWordWrapWidth",paraId:2,tocIndex:1},{value:" to achieve text overflow ellipsis.",paraId:2,tocIndex:1},{value:"{\n  labelText: 'This is a long text',\n  labelWordWrap: true,\n  labelWordWrapWidth: 50,\n}\n",paraId:3,tocIndex:1},{value:"Some plugins or behaviors support configuring key press triggers. Please use standard key names, such as ",paraId:4,tocIndex:2},{value:"Control",paraId:4,tocIndex:2},{value:", ",paraId:4,tocIndex:2},{value:"Shift",paraId:4,tocIndex:2},{value:", ",paraId:4,tocIndex:2},{value:"Alt",paraId:4,tocIndex:2},{value:", ",paraId:4,tocIndex:2},{value:"Meta",paraId:4,tocIndex:2},{value:", as well as letters, numbers, symbols, and so on.",paraId:4,tocIndex:2},{value:"Ensure that you call ",paraId:5,tocIndex:3},{value:"graph.draw()",paraId:5,tocIndex:3},{value:" or ",paraId:5,tocIndex:3},{value:"graph.render()",paraId:5,tocIndex:3},{value:" to update the canvas after updating the data.",paraId:5,tocIndex:3},{value:"G6 merges differences and updates the canvas uniformly after ",paraId:6,tocIndex:3},{value:"draw",paraId:6,tocIndex:3},{value:" or ",paraId:6,tocIndex:3},{value:"render",paraId:6,tocIndex:3},{value:" for multiple data updates to improve performance.",paraId:6,tocIndex:3},{value:"When multiple interactions conflict with each other, you can set the enable timing of interactions to avoid multiple interactions being triggered simultaneously.",paraId:7,tocIndex:4},{value:"Taking ",paraId:8,tocIndex:4},{value:"drag-canvas",paraId:8,tocIndex:4},{value:" and ",paraId:8,tocIndex:4},{value:"brush-select",paraId:8,tocIndex:4},{value:" as an example, if you directly configure these two interactions, dragging on the canvas will cause interaction exceptions. You can disable the ",paraId:8,tocIndex:4},{value:"drag-canvas",paraId:8,tocIndex:4},{value:" interaction when the ",paraId:8,tocIndex:4},{value:"shift",paraId:8,tocIndex:4},{value:" key is pressed.",paraId:8,tocIndex:4},{value:"behaviors: [\n  {\n    type: 'drag-canvas',\n    enable: (event) => event.shiftKey === false,\n  },\n  {\n    type: 'brush-select',\n  },\n];\n",paraId:9,tocIndex:4},{value:"At this point, when the ",paraId:10,tocIndex:4},{value:"shift",paraId:10,tocIndex:4},{value:" key is pressed, the ",paraId:10,tocIndex:4},{value:"drag-canvas",paraId:10,tocIndex:4},{value:" interaction will be disabled, and the ",paraId:10,tocIndex:4},{value:"brush-select",paraId:10,tocIndex:4},{value:" interaction will not be affected.",paraId:10,tocIndex:4},{value:"draw",paraId:11},{value:"render",paraId:11},{value:"Both ",paraId:12,tocIndex:5},{value:"draw",paraId:12,tocIndex:5},{value:" and ",paraId:12,tocIndex:5},{value:"render",paraId:12,tocIndex:5},{value:" execute drawing operations, but ",paraId:12,tocIndex:5},{value:"render",paraId:12,tocIndex:5},{value:" additionally performs ",paraId:12,tocIndex:5},{value:"layout",paraId:12,tocIndex:5},{value:" and ",paraId:12,tocIndex:5},{value:"auto fit",paraId:12,tocIndex:5},{value:" operations based on ",paraId:12,tocIndex:5},{value:"draw",paraId:12,tocIndex:5},{value:".",paraId:12,tocIndex:5},{value:"You can simply understand it as: ",paraId:13,tocIndex:5},{value:"render",paraId:13,tocIndex:5},{value:" = ",paraId:13,tocIndex:5},{value:"draw",paraId:13,tocIndex:5},{value:" + ",paraId:13,tocIndex:5},{value:"layout",paraId:13,tocIndex:5},{value:" + ",paraId:13,tocIndex:5},{value:"fitView",paraId:13,tocIndex:5},{value:"/",paraId:13,tocIndex:5},{value:"fitCenter",paraId:13,tocIndex:5},{value:".",paraId:13,tocIndex:5},{value:"Reason 1: The style in the data is overridden by the style in the style mapping.",paraId:14,tocIndex:6},{value:"{\n  data: [{ id: 'node-1', style: { fill: 'orange' } }],\n  node: {\n    style: {\n      fill: 'pink', // No matter what the style in the data is, it will be overridden by the style here\n    }\n  }\n}\n",paraId:15,tocIndex:6},{value:"Solution: Use a callback method to prioritize obtaining styles from the data to improve data priority.",paraId:16,tocIndex:6},{value:"{\n  node: {\n    style: (data) => {\n      return {\n        fill: data.style?.fill || 'pink',\n      };\n    };\n  }\n}\n",paraId:17,tocIndex:6},{value:'When using the Canvas renderer for drawing, residual content may appear in the canvas, which is referred to as "dirty rectangles". This phenomenon occurs because the underlying rendering engine improves performance by only drawing the parts that have changed each time, rather than clearing the entire canvas.',paraId:18,tocIndex:7},{value:"However, when the graphics in the canvas change, there may be cases where some graphics are not correctly cleared, resulting in residual content.",paraId:19,tocIndex:7},{value:"You can solve this issue by:",paraId:20,tocIndex:7},{value:"Using the SVG or WebGL renderer;",paraId:21,tocIndex:7},{value:"Checking whether there are illegal values in the element of the nodes, such as null, NaN, and so on;",paraId:21,tocIndex:7},{value:"Using integers as much as possible for numeric style values, such as r, width, height, fontSize, and so on.",paraId:21,tocIndex:7}];}}]);
//# sourceMappingURL=cfd1ba21-async.f09c9805.js.map