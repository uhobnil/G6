(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["aa64e27e"],{aa64e27e:function(e,a,d){"use strict";d.d(a,"__esModule",{value:!0}),d.d(a,"texts",{enumerable:!0,get:function(){return t;}}),d("05da899d");let t=[{value:"This document will guide you through the process of upgrading from G6 version ",paraId:0},{value:"4.x",paraId:0},{value:" to ",paraId:0},{value:"5.x",paraId:0},{value:". If you are using version ",paraId:0},{value:"3.x",paraId:0},{value:", please upgrade to version ",paraId:0},{value:"4.x",paraId:0},{value:" first.",paraId:0},{value:"Please ensure that your current git branch is clean and there is no uncommitted code.",paraId:1,tocIndex:0},{value:"Refer to the ",paraId:1,tocIndex:0},{value:"Installation",paraId:2,tocIndex:0},{value:" document to install version ",paraId:1,tocIndex:0},{value:"5.x",paraId:1,tocIndex:0},{value:" and remove the dependencies for version ",paraId:1,tocIndex:0},{value:"4.x",paraId:1,tocIndex:0},{value:".",paraId:1,tocIndex:0},{value:"The data format in the new version has changed as follows:",paraId:3,tocIndex:2},{value:"All style attributes in ",paraId:4,tocIndex:2},{value:"nodes",paraId:4,tocIndex:2},{value:", ",paraId:4,tocIndex:2},{value:"edges",paraId:4,tocIndex:2},{value:", and ",paraId:4,tocIndex:2},{value:"combos",paraId:4,tocIndex:2},{value:" need to be placed within ",paraId:4,tocIndex:2},{value:"style",paraId:4,tocIndex:2},{value:", and data attributes should be stored in ",paraId:4,tocIndex:2},{value:"data",paraId:4,tocIndex:2},{value:":",paraId:4,tocIndex:2},{value:"// 4.x\nconst data = {\n  nodes: [\n    { id: 'node1', label: 'node1', size: 20 },\n    { id: 'node2', label: 'node2', size: 20 },\n  ],\n  edges: [{ source: 'node1', target: 'node2' }],\n};\n\n// 5.x\nconst data = {\n  nodes: [\n    // The label is a non-stylistic attribute, placed in the data, and can be accessed in the style mapping function\n    // The `size` is a stylistic attribute, placed within the `style`\n    { id: 'node1', data: { label: 'node1' }, style: { size: 20 } },\n    { id: 'node2', data: { label: 'node2' }, style: { size: 20 } },\n  ],\n  edges: [{ source: 'node1', target: 'node2' }],\n};\n",paraId:5,tocIndex:2},{value:"Since we have redesigned and implemented the elements, please refer to the corresponding documentation to modify the new element options:",paraId:6,tocIndex:2},{value:"Node",paraId:7,tocIndex:2},{value:"Edge",paraId:8,tocIndex:2},{value:"Combo",paraId:9,tocIndex:2},{value:"If you need to specify the element type in the data, you can use the ",paraId:10,tocIndex:2},{value:"type",paraId:10,tocIndex:2},{value:" attribute:",paraId:10,tocIndex:2},{value:"{\n  nodes: [\n    // Specify the node type as rect\n    { id: 'node1', type: 'rect' },\n  ];\n}\n",paraId:11,tocIndex:2},{value:"Change",paraId:12,tocIndex:3},{value:" ",paraId:13,tocIndex:3},{value:"fitView / fitCenter / fitViewPadding",paraId:13,tocIndex:3},{value:"The ",paraId:14,tocIndex:3},{value:"fitView",paraId:14,tocIndex:3},{value:" and ",paraId:14,tocIndex:3},{value:"fitCenter",paraId:14,tocIndex:3},{value:" options have been merged into ",paraId:14,tocIndex:3},{value:"autoFit",paraId:14,tocIndex:3},{value:".",paraId:14,tocIndex:3},{value:"To use ",paraId:14,tocIndex:3},{value:"fitView",paraId:14,tocIndex:3},{value:", you can configure it as ",paraId:14,tocIndex:3},{value:"autoFit: 'view'",paraId:14,tocIndex:3},{value:"To use ",paraId:14,tocIndex:3},{value:"fitCenter",paraId:14,tocIndex:3},{value:", you can configure it as ",paraId:14,tocIndex:3},{value:"autoFit: 'center'",paraId:14,tocIndex:3},{value:"You can also pass an object for full configuration:",paraId:14,tocIndex:3},{value:"autoFit: {\n  type: 'view',\n  options: {\n    // ...\n  }\n}\n",paraId:15,tocIndex:3},{value:"The ",paraId:16,tocIndex:3},{value:"fitViewPadding",paraId:16,tocIndex:3},{value:" has been changed to ",paraId:16,tocIndex:3},{value:"padding",paraId:16,tocIndex:3},{value:".",paraId:16,tocIndex:3},{value:"Removed",paraId:17,tocIndex:3},{value:" ",paraId:18,tocIndex:3},{value:"linkCenter",paraId:18,tocIndex:3},{value:"In version 5.x, the edge connection mechanism will attempt to connect to nodes/Combos in the following order:",paraId:19,tocIndex:3},{value:"Connect Port",paraId:20,tocIndex:3},{value:"Outline",paraId:20,tocIndex:3},{value:"Center",paraId:20,tocIndex:3},{value:"Removed",paraId:21,tocIndex:3},{value:" ",paraId:22,tocIndex:3},{value:"groupByTypes",paraId:22,tocIndex:3},{value:"Removed",paraId:23,tocIndex:3},{value:" ",paraId:24,tocIndex:3},{value:"autoPaint",paraId:24,tocIndex:3},{value:"Please manually call the ",paraId:25,tocIndex:3},{value:"render",paraId:25,tocIndex:3},{value:" or ",paraId:25,tocIndex:3},{value:"draw",paraId:25,tocIndex:3},{value:" method to perform rendering.",paraId:25,tocIndex:3},{value:"Changed",paraId:26,tocIndex:3},{value:" ",paraId:27,tocIndex:3},{value:"modes",paraId:27,tocIndex:3},{value:"In version 5.x, interaction modes have been removed. You can switch the currently enabled behaviors by setting ",paraId:28,tocIndex:3},{value:"behaviors",paraId:28,tocIndex:3},{value:".",paraId:28,tocIndex:3},{value:"// 4.x\n{\n  modes: {\n    default: ['drag-canvas', 'zoom-canvas'],\n    preview: ['drag-canvas'],\n  },\n}\n\ngraph.setMode('preview');\n",paraId:29,tocIndex:3},{value:"\n// 5.x\n{\n  behaviors: ['drag-canvas', 'zoom-canvas'],\n}\n\ngraph.setBehaviors(['drag-canvas']);\n\n",paraId:30,tocIndex:3},{value:"Change",paraId:31,tocIndex:3},{value:" ",paraId:32,tocIndex:3},{value:"defaultNode / defaultEdge / defaultCombo",paraId:32,tocIndex:3},{value:"The element styles have been moved to ",paraId:33,tocIndex:3},{value:"[element].style",paraId:33,tocIndex:3},{value:", for example, ",paraId:33,tocIndex:3},{value:"defaultNode",paraId:33,tocIndex:3},{value:" has been changed to ",paraId:33,tocIndex:3},{value:"node.style",paraId:33,tocIndex:3},{value:":",paraId:33,tocIndex:3},{value:"// 4.x\n{\n  defaultNode: {\n    size: 20,\n    fill: 'red',\n  }\n}\n\n// 5.x\n{\n  node: {\n    style: {\n      size: 20,\n      fill: 'red',\n    }\n  }\n}\n",paraId:34,tocIndex:3},{value:"Change",paraId:35,tocIndex:3},{value:" ",paraId:36,tocIndex:3},{value:"nodeStateStyles / edgeStateStyles / comboStateStyle",paraId:36,tocIndex:3},{value:"Element state styles have been moved to ",paraId:37,tocIndex:3},{value:"[element].state",paraId:37,tocIndex:3},{value:", for example, ",paraId:37,tocIndex:3},{value:"nodeStateStyles",paraId:37,tocIndex:3},{value:" has been changed to ",paraId:37,tocIndex:3},{value:"node.stateStyles",paraId:37,tocIndex:3},{value:":",paraId:37,tocIndex:3},{value:"// 4.x\n{\n  nodeStateStyles: {\n    selected: {\n      fill: 'red',\n    }\n  }\n}\n\n// 5.x\n{\n  node: {\n    state: {\n      selected: {\n        fill: 'red',\n      }\n    }\n  }\n}\n",paraId:38,tocIndex:3},{value:"Change",paraId:39,tocIndex:3},{value:" ",paraId:40,tocIndex:3},{value:"animate / animateCfg",paraId:40,tocIndex:3},{value:"The ",paraId:41,tocIndex:3},{value:"animate",paraId:41,tocIndex:3},{value:" options has been changed to ",paraId:41,tocIndex:3},{value:"animation",paraId:41,tocIndex:3},{value:"animate",paraId:41,tocIndex:3},{value:" and ",paraId:41,tocIndex:3},{value:"animateCfg",paraId:41,tocIndex:3},{value:" have been merged into ",paraId:41,tocIndex:3},{value:"animation",paraId:41,tocIndex:3},{value:"// 4.x\n{\n  animate: true,\n}\n\n// 5.x\n{\n  animation: true,\n}\n{\n  animation: {\n    duration: 500,\n    easing: 'easeLinear',\n  }\n}\n",paraId:42,tocIndex:3},{value:"Change",paraId:43,tocIndex:3},{value:" ",paraId:44,tocIndex:3},{value:"minZoom / maxZoom",paraId:44,tocIndex:3},{value:"The ",paraId:45,tocIndex:3},{value:"minZoom",paraId:45,tocIndex:3},{value:" and ",paraId:45,tocIndex:3},{value:"maxZoom",paraId:45,tocIndex:3},{value:" options have been merged into ",paraId:45,tocIndex:3},{value:"zoomRange",paraId:45,tocIndex:3},{value:"// 4.x\n{\n  minZoom: 0.5,\n  maxZoom: 2,\n}\n\n// 5.x\n{\n  zoomRange: [0.5, 2],\n}\n",paraId:46,tocIndex:3},{value:"Change",paraId:47,tocIndex:3},{value:" ",paraId:48,tocIndex:3},{value:"renderer",paraId:48,tocIndex:3},{value:"G6 5.x supports multi-layer canvases and defaults to using the ",paraId:49,tocIndex:3},{value:"canvas",paraId:49,tocIndex:3},{value:" renderer.",paraId:49,tocIndex:3},{value:"The ",paraId:50,tocIndex:3},{value:"renderer",paraId:50,tocIndex:3},{value:" no longer supports the string type and has been changed to a callback function:",paraId:50,tocIndex:3},{value:"// 4.x\nvar options = {\n  renderer: 'svg',\n};\n\n// 5.x\nimport { Renderer } from '@antv/g-svg';\n\n{\n  renderer: () => new Renderer(),\n}\n",paraId:51,tocIndex:3},{value:"Removed",paraId:52,tocIndex:3},{value:" ",paraId:53,tocIndex:3},{value:"enabledStack / maxStep",paraId:53,tocIndex:3},{value:"The built-in undo and redo functionality has been removed in version 5.x. For related capabilities, please use a plugin to implement.",paraId:54,tocIndex:3},{value:"Change",paraId:55,tocIndex:4},{value:" ",paraId:56,tocIndex:4},{value:"data / save / read / changeData",paraId:56,tocIndex:4},{value:"Version 5.x offers a completely new data API. For details, see ",paraId:57,tocIndex:4},{value:"Data API",paraId:58,tocIndex:4},{value:".",paraId:57,tocIndex:4},{value:"The ",paraId:59,tocIndex:4},{value:"data",paraId:59,tocIndex:4},{value:" and ",paraId:59,tocIndex:4},{value:"changeData",paraId:59,tocIndex:4},{value:" methods from 4.x are replaced by ",paraId:59,tocIndex:4},{value:"setData",paraId:59,tocIndex:4},{value:" in 5.x.",paraId:59,tocIndex:4},{value:"The ",paraId:59,tocIndex:4},{value:"save",paraId:59,tocIndex:4},{value:" method from 4.x is replaced by ",paraId:59,tocIndex:4},{value:"getData",paraId:59,tocIndex:4},{value:" in 5.x.",paraId:59,tocIndex:4},{value:"The ",paraId:59,tocIndex:4},{value:"read",paraId:59,tocIndex:4},{value:" method from 4.x is replaced by ",paraId:59,tocIndex:4},{value:"setData",paraId:59,tocIndex:4},{value:" + ",paraId:59,tocIndex:4},{value:"render",paraId:59,tocIndex:4},{value:" in 5.x.",paraId:59,tocIndex:4},{value:"Change",paraId:60,tocIndex:4},{value:" ",paraId:61,tocIndex:4},{value:"get / set",paraId:61,tocIndex:4},{value:"To access Graph options, please use ",paraId:62,tocIndex:4},{value:"getOptions",paraId:62,tocIndex:4},{value:" or the ",paraId:62,tocIndex:4},{value:"getXxx",paraId:62,tocIndex:4},{value:" API, such as ",paraId:62,tocIndex:4},{value:"getZoomRange",paraId:62,tocIndex:4},{value:", ",paraId:62,tocIndex:4},{value:"getBehaviors",paraId:62,tocIndex:4},{value:", etc. The ",paraId:62,tocIndex:4},{value:"set",paraId:62,tocIndex:4},{value:" method is analogous.",paraId:62,tocIndex:4},{value:"Change",paraId:63,tocIndex:4},{value:" ",paraId:64,tocIndex:4},{value:"getContainer",paraId:64,tocIndex:4},{value:"Direct API to obtain the container is not currently supported, but you can obtain it through ",paraId:65,tocIndex:4},{value:"graph.getCanvas().getContainer()",paraId:65,tocIndex:4},{value:".",paraId:65,tocIndex:4},{value:"In most cases, you do not need to directly manipulate the container.",paraId:66,tocIndex:4},{value:"Removed",paraId:67,tocIndex:4},{value:" ",paraId:68,tocIndex:4},{value:"getGroup",paraId:68,tocIndex:4},{value:"Change",paraId:69,tocIndex:4},{value:" ",paraId:70,tocIndex:4},{value:"getMinZoom / getMaxZoom",paraId:70,tocIndex:4},{value:"Use ",paraId:71,tocIndex:4},{value:"getZoomRange",paraId:71,tocIndex:4},{value:" to obtain the values.",paraId:71,tocIndex:4},{value:"Change",paraId:72,tocIndex:4},{value:" ",paraId:73,tocIndex:4},{value:"setMinZoom / setMaxZoom",paraId:73,tocIndex:4},{value:"Use the ",paraId:74,tocIndex:4},{value:"setZoomRange",paraId:74,tocIndex:4},{value:" method to set the values.",paraId:74,tocIndex:4},{value:"Change",paraId:75,tocIndex:4},{value:" ",paraId:76,tocIndex:4},{value:"getWidth / getHeight",paraId:76,tocIndex:4},{value:"Use ",paraId:77,tocIndex:4},{value:"getSize",paraId:77,tocIndex:4},{value:" to get the dimensions.",paraId:77,tocIndex:4},{value:"Change",paraId:78,tocIndex:4},{value:" ",paraId:79,tocIndex:4},{value:"changeSize",paraId:79,tocIndex:4},{value:"Use ",paraId:80,tocIndex:4},{value:"setSize",paraId:80,tocIndex:4},{value:" to set the dimensions.",paraId:80,tocIndex:4},{value:"Change",paraId:81,tocIndex:4},{value:" ",paraId:82,tocIndex:4},{value:"zoom",paraId:82,tocIndex:4},{value:"Changed to ",paraId:83,tocIndex:4},{value:"zoomBy",paraId:83,tocIndex:4},{value:".",paraId:83,tocIndex:4},{value:"Change",paraId:84,tocIndex:4},{value:" ",paraId:85,tocIndex:4},{value:"translate",paraId:85,tocIndex:4},{value:"Changed to ",paraId:86,tocIndex:4},{value:"translateBy",paraId:86,tocIndex:4},{value:".",paraId:86,tocIndex:4},{value:"Change",paraId:87,tocIndex:4},{value:" ",paraId:88,tocIndex:4},{value:"moveTo",paraId:88,tocIndex:4},{value:"Changed to ",paraId:89,tocIndex:4},{value:"translateTo",paraId:89,tocIndex:4},{value:".",paraId:89,tocIndex:4},{value:"Change",paraId:90,tocIndex:4},{value:" ",paraId:91,tocIndex:4},{value:"focusItem",paraId:91,tocIndex:4},{value:"Changed to ",paraId:92,tocIndex:4},{value:"focusElement",paraId:92,tocIndex:4},{value:".",paraId:92,tocIndex:4},{value:"Removed",paraId:93,tocIndex:4},{value:" ",paraId:94,tocIndex:4},{value:"addItem / updateItem / removeItem",paraId:94,tocIndex:4},{value:"To add or remove elements, use the methods ",paraId:95,tocIndex:4},{value:"addData",paraId:95,tocIndex:4},{value:" / ",paraId:95,tocIndex:4},{value:"updateData",paraId:95,tocIndex:4},{value:" / ",paraId:95,tocIndex:4},{value:"removeData",paraId:95,tocIndex:4},{value:" to manipulate data.",paraId:95,tocIndex:4},{value:"Removed",paraId:96,tocIndex:4},{value:" ",paraId:97,tocIndex:4},{value:"refreshItem",paraId:97,tocIndex:4},{value:"Removed",paraId:98,tocIndex:4},{value:" ",paraId:99,tocIndex:4},{value:"refreshPositions",paraId:99,tocIndex:4},{value:"Removed",paraId:100,tocIndex:4},{value:" ",paraId:101,tocIndex:4},{value:"updateCombo",paraId:101,tocIndex:4},{value:"Removed",paraId:102,tocIndex:4},{value:" ",paraId:103,tocIndex:4},{value:"updateCombos",paraId:103,tocIndex:4},{value:"Removed",paraId:104,tocIndex:4},{value:" ",paraId:105,tocIndex:4},{value:"updateComboTree",paraId:105,tocIndex:4},{value:"Change",paraId:106,tocIndex:4},{value:" ",paraId:107,tocIndex:4},{value:"node / edge / combo",paraId:107,tocIndex:4},{value:"Use the ",paraId:108,tocIndex:4},{value:"setNode",paraId:108,tocIndex:4},{value:" / ",paraId:108,tocIndex:4},{value:"setEdge",paraId:108,tocIndex:4},{value:" / ",paraId:108,tocIndex:4},{value:"setCombo",paraId:108,tocIndex:4},{value:" methods as alternatives.",paraId:108,tocIndex:4},{value:"Change",paraId:109,tocIndex:4},{value:" ",paraId:110,tocIndex:4},{value:"showItem / hideItem",paraId:110,tocIndex:4},{value:"Use the ",paraId:111,tocIndex:4},{value:"setElementVisibility",paraId:111,tocIndex:4},{value:" method as an alternative.",paraId:111,tocIndex:4},{value:"Removed",paraId:112,tocIndex:4},{value:" ",paraId:113,tocIndex:4},{value:"getNodes / getEdges / getCombos / getComboChildren / getNeighbors / find / findById / findAll / findAllByState",paraId:113,tocIndex:4},{value:"In version 5.x, direct retrieval of element instances is not supported.",paraId:114,tocIndex:4},{value:"To obtain element data, use the methods ",paraId:115,tocIndex:4},{value:"getData",paraId:115,tocIndex:4},{value:", ",paraId:115,tocIndex:4},{value:"getNodeData",paraId:115,tocIndex:4},{value:", ",paraId:115,tocIndex:4},{value:"getEdgeData",paraId:115,tocIndex:4},{value:", ",paraId:115,tocIndex:4},{value:"getComboData",paraId:115,tocIndex:4},{value:", which support searching by element ID.",paraId:115,tocIndex:4},{value:"To obtain child node data, use the ",paraId:115,tocIndex:4},{value:"getChildrenData",paraId:115,tocIndex:4},{value:" method.",paraId:115,tocIndex:4},{value:"To obtain neighbor node data, use the ",paraId:115,tocIndex:4},{value:"getNeighborNodesData",paraId:115,tocIndex:4},{value:" method.",paraId:115,tocIndex:4},{value:"To find element data based on state, use the ",paraId:115,tocIndex:4},{value:"getElementDataByState",paraId:115,tocIndex:4},{value:" method.",paraId:115,tocIndex:4},{value:"Change",paraId:116,tocIndex:4},{value:" ",paraId:117,tocIndex:4},{value:"collapseCombo / expandCombo",paraId:117,tocIndex:4},{value:"Use the ",paraId:118,tocIndex:4},{value:"collapseElement",paraId:118,tocIndex:4},{value:" / ",paraId:118,tocIndex:4},{value:"expandElement",paraId:118,tocIndex:4},{value:" methods as alternatives.",paraId:118,tocIndex:4},{value:"Removed",paraId:119,tocIndex:4},{value:" ",paraId:120,tocIndex:4},{value:"collapseExpandCombo",paraId:120,tocIndex:4},{value:"Removed",paraId:121,tocIndex:4},{value:" ",paraId:122,tocIndex:4},{value:"createCombo",paraId:122,tocIndex:4},{value:"Combos can now be added using the ",paraId:123,tocIndex:4},{value:"addData",paraId:123,tocIndex:4},{value:" / ",paraId:123,tocIndex:4},{value:"addComboData",paraId:123,tocIndex:4},{value:" methods.",paraId:123,tocIndex:4},{value:"Removed",paraId:124,tocIndex:4},{value:" ",paraId:125,tocIndex:4},{value:"uncombo",paraId:125,tocIndex:4},{value:"Combos can now be removed using the ",paraId:126,tocIndex:4},{value:"removeData",paraId:126,tocIndex:4},{value:" / ",paraId:126,tocIndex:4},{value:"removeComboData",paraId:126,tocIndex:4},{value:" methods.",paraId:126,tocIndex:4},{value:"Change",paraId:127,tocIndex:4},{value:" ",paraId:128,tocIndex:4},{value:"setItemState",paraId:128,tocIndex:4},{value:"Use the ",paraId:129,tocIndex:4},{value:"setElementState",paraId:129,tocIndex:4},{value:" method as an alternative.",paraId:129,tocIndex:4},{value:"Removed",paraId:130,tocIndex:4},{value:" ",paraId:131,tocIndex:4},{value:"clearItemStates",paraId:131,tocIndex:4},{value:"To clear all states of a single element: ",paraId:132,tocIndex:4},{value:"graph.setElementState(id, [])",paraId:132,tocIndex:4},{value:"To clear all states of multiple elements: ",paraId:132,tocIndex:4},{value:"graph.setElementState({ id1: [], id2: [] })",paraId:132,tocIndex:4},{value:"Removed",paraId:133,tocIndex:4},{value:" ",paraId:134,tocIndex:4},{value:"priorityState",paraId:134,tocIndex:4},{value:"When using ",paraId:135,tocIndex:4},{value:"setElementState",paraId:135,tocIndex:4},{value:", the state that appears later in the array has a higher priority.",paraId:135,tocIndex:4},{value:"Removed",paraId:136,tocIndex:4},{value:" ",paraId:137,tocIndex:4},{value:"setMode",paraId:137,tocIndex:4},{value:"Use ",paraId:138,tocIndex:4},{value:"setBehaviors",paraId:138,tocIndex:4},{value:" to set the current behaviors.",paraId:138,tocIndex:4},{value:"Removed",paraId:139,tocIndex:4},{value:" ",paraId:140,tocIndex:4},{value:"setCurrentMode",paraId:140,tocIndex:4},{value:"Change",paraId:141,tocIndex:4},{value:" ",paraId:142,tocIndex:4},{value:"layout",paraId:142,tocIndex:4},{value:"Does not support parameters. To configure the layout, please use ",paraId:143,tocIndex:4},{value:"setLayout",paraId:143,tocIndex:4},{value:".",paraId:143,tocIndex:4},{value:"Change",paraId:144,tocIndex:4},{value:" ",paraId:145,tocIndex:4},{value:"updateLayout",paraId:145,tocIndex:4},{value:"Changed to ",paraId:146,tocIndex:4},{value:"setLayout",paraId:146,tocIndex:4},{value:".",paraId:146,tocIndex:4},{value:"Removed",paraId:147,tocIndex:4},{value:" ",paraId:148,tocIndex:4},{value:"destroyLayout",paraId:148,tocIndex:4},{value:"Change",paraId:149,tocIndex:4},{value:" ",paraId:150,tocIndex:4},{value:"addBehaviors / removeBehaviors",paraId:150,tocIndex:4},{value:"Replaced with ",paraId:151,tocIndex:4},{value:"setBehaviors",paraId:151,tocIndex:4},{value:".",paraId:151,tocIndex:4},{value:"Removed",paraId:152,tocIndex:4},{value:" ",paraId:153,tocIndex:4},{value:"createHull / getHulls / removeHull / removeHulls",paraId:153,tocIndex:4},{value:"For multiple ",paraId:154,tocIndex:4},{value:"Hull",paraId:154,tocIndex:4},{value:" instances, you need to configure multiple ",paraId:154,tocIndex:4},{value:"hull",paraId:154,tocIndex:4},{value:" plugins in ",paraId:154,tocIndex:4},{value:"plugins",paraId:154,tocIndex:4},{value:", such as:",paraId:154,tocIndex:4},{value:"{\n  plugins: ['hull', 'hull'],\n};\n",paraId:155,tocIndex:4},{value:"Operations to retrieve, update, and remove ",paraId:156,tocIndex:4},{value:"Hull",paraId:156,tocIndex:4},{value:" are implemented through ",paraId:156,tocIndex:4},{value:"setPlugins",paraId:156,tocIndex:4},{value:", ",paraId:156,tocIndex:4},{value:"updatePlugin",paraId:156,tocIndex:4},{value:".",paraId:156,tocIndex:4},{value:"Not yet available",paraId:157,tocIndex:4},{value:" ",paraId:158,tocIndex:4},{value:"getNodeDegree",paraId:158,tocIndex:4},{value:"Not yet available",paraId:159,tocIndex:4},{value:" ",paraId:160,tocIndex:4},{value:"getShortestPathMatrix",paraId:160,tocIndex:4},{value:"Not yet available",paraId:161,tocIndex:4},{value:" ",paraId:162,tocIndex:4},{value:"getAdjMatrix",paraId:162,tocIndex:4},{value:"Removed",paraId:163,tocIndex:4},{value:" ",paraId:164,tocIndex:4},{value:"pushStack / getUndoStack / getRedoStack / getStackData / clearStack",paraId:164,tocIndex:4},{value:"All undo and redo related APIs should be called after obtaining the corresponding plugin, for example:",paraId:165,tocIndex:4},{value:"// 'history' is the key configured for use with the plugin\nconst history = graph.getPluginInstance('history');\n\nhistory.redo();\n",paraId:166,tocIndex:4},{value:"Removed",paraId:167,tocIndex:4},{value:" ",paraId:168,tocIndex:4},{value:"positionsAnimate / stopAnimate / isAnimating",paraId:168,tocIndex:4},{value:"Animation-related information is now emitted through events:",paraId:169,tocIndex:4},{value:"Animation start event: ",paraId:170,tocIndex:4},{value:"beforeanimate",paraId:170,tocIndex:4},{value:"Animation end event: ",paraId:170,tocIndex:4},{value:"afteranimate",paraId:170,tocIndex:4},{value:"To stop an animation:",paraId:170,tocIndex:4},{value:"graph.on('beforeanimate', (event) => {\n  event.animation.stop();\n});\n",paraId:171,tocIndex:4},{value:"Change",paraId:172,tocIndex:4},{value:" ",paraId:173,tocIndex:4},{value:"getPointByClient / getClientByPoint / getPointByCanvas / getCanvasByPoint / getGraphCenterPoint / getViewPortCenterPoint",paraId:173,tocIndex:4},{value:"G6 5.x uses a different coordinate system than 4.x. For details, see ",paraId:174,tocIndex:4},{value:"Coordinate",paraId:175,tocIndex:4},{value:".",paraId:174,tocIndex:4},{value:"Removed",paraId:176,tocIndex:4},{value:" ",paraId:177,tocIndex:4},{value:"setTextWaterMarker / setImageWaterMarker",paraId:177,tocIndex:4},{value:"For watermark functionality, please refer to the ",paraId:178,tocIndex:4},{value:"Watermark",paraId:179,tocIndex:4},{value:"plugin.",paraId:178,tocIndex:4},{value:"Change",paraId:180,tocIndex:4},{value:" ",paraId:181,tocIndex:4},{value:"toFullDataURL",paraId:181,tocIndex:4},{value:"Replaced with ",paraId:182,tocIndex:4},{value:"toDataURL",paraId:182,tocIndex:4},{value:", specify the parameter as: ",paraId:182,tocIndex:4},{value:"mode: 'overall'",paraId:182,tocIndex:4},{value:"graph.toDataURL({ mode: 'overall' });\n",paraId:183,tocIndex:4},{value:"Removed",paraId:184,tocIndex:4},{value:" ",paraId:185,tocIndex:4},{value:"downloadFullImage / downloadImage",paraId:185,tocIndex:4},{value:"Only the capability to export as a ",paraId:186,tocIndex:4},{value:"DataURL",paraId:186,tocIndex:4},{value:" is provided. If you need to download an image, please refer to the following example code:",paraId:186,tocIndex:4},{value:"async function downloadImage() {\n  const dataURL = await graph.toDataURL();\n  const [head, content] = dataURL.split(',');\n  const contentType = head.match(/:(.*?);/)![1];\n\n  const bstr = atob(content);\n  let length = bstr.length;\n  const u8arr = new Uint8Array(length);\n\n  while (length--) {\n    u8arr[length] = bstr.charCodeAt(length);\n  }\n\n  const blob = new Blob([u8arr], { type: contentType });\n\n  const url = URL.createObjectURL(blob);\n  const a = document.createElement('a');\n  a.href = url;\n  a.download = 'graph.png';\n  a.click();\n}\n",paraId:187,tocIndex:4},{value:"Removed",paraId:188,tocIndex:4},{value:" ",paraId:189,tocIndex:4},{value:"clear",paraId:189,tocIndex:4},{value:"Use ",paraId:190,tocIndex:4},{value:"setData",paraId:190,tocIndex:4},{value:" + ",paraId:190,tocIndex:4},{value:"draw",paraId:190,tocIndex:4},{value:" to clear data and the canvas.",paraId:190,tocIndex:4},{value:"Unlike G6 4.x, G6 5.x uses a unified extension registration function (register). You can refer to the ",paraId:191,tocIndex:5},{value:"Extension Register",paraId:192,tocIndex:5},{value:" to register G6 extensions.",paraId:191,tocIndex:5},{value:"The following G6 4.x registration functions have been deprecated:",paraId:193,tocIndex:5},{value:"registerNode",paraId:194,tocIndex:5},{value:"registerEdge",paraId:194,tocIndex:5},{value:"registerCombo",paraId:194,tocIndex:5},{value:"registerLayout",paraId:194,tocIndex:5},{value:"registerBehavior",paraId:194,tocIndex:5},{value:"Compared to G6 4.x, G6 5.x has the following differences in events:",paraId:195,tocIndex:6},{value:"The ",paraId:196,tocIndex:6},{value:"mouse",paraId:196,tocIndex:6},{value:" and ",paraId:196,tocIndex:6},{value:"touch",paraId:196,tocIndex:6},{value:" events have been removed and are unified under the ",paraId:196,tocIndex:6},{value:"pointer",paraId:196,tocIndex:6},{value:" event.",paraId:196,tocIndex:6},{value:"The naming convention for lifecycle events is usually in the format of: ",paraId:196,tocIndex:6},{value:"before/after",paraId:196,tocIndex:6},{value:" + ",paraId:196,tocIndex:6},{value:"object/property",paraId:196,tocIndex:6},{value:" + ",paraId:196,tocIndex:6},{value:"action",paraId:196,tocIndex:6},{value:", for example: ",paraId:196,tocIndex:6},{value:"beforeelementcreate",paraId:196,tocIndex:6},{value:" is triggered before an element is created.",paraId:196,tocIndex:6},{value:"The following events have been removed:\n",paraId:196,tocIndex:6},{value:"afteractivaterelations",paraId:197,tocIndex:6},{value:"afteradditem",paraId:197,tocIndex:6},{value:"aftercreateedge",paraId:197,tocIndex:6},{value:"aftergraphrefresh",paraId:197,tocIndex:6},{value:"aftergraphrefreshposition",paraId:197,tocIndex:6},{value:"afteritemrefresh",paraId:197,tocIndex:6},{value:"aftermodechange",paraId:197,tocIndex:6},{value:"afterremoveitem",paraId:197,tocIndex:6},{value:"afterupdateitem",paraId:197,tocIndex:6},{value:"beforeadditem",paraId:197,tocIndex:6},{value:"beforecreateedge",paraId:197,tocIndex:6},{value:"beforegraphrefresh",paraId:197,tocIndex:6},{value:"beforegraphrefreshposition",paraId:197,tocIndex:6},{value:"beforeitemrefresh",paraId:197,tocIndex:6},{value:"beforemodechange",paraId:197,tocIndex:6},{value:"beforeremoveitem",paraId:197,tocIndex:6},{value:"beforeupdateitem",paraId:197,tocIndex:6},{value:"dragnodeend",paraId:197,tocIndex:6},{value:"nodeselectchange",paraId:197,tocIndex:6},{value:"stackchange",paraId:197,tocIndex:6},{value:"tooltipchange",paraId:197,tocIndex:6},{value:"The following element change events have been removed, but you can still access them through ",paraId:196,tocIndex:6},{value:"beforeelementupdate",paraId:196,tocIndex:6},{value:" and ",paraId:196,tocIndex:6},{value:"afterelementupdate",paraId:196,tocIndex:6},{value:":\n",paraId:196,tocIndex:6},{value:"afteritemstatechange",paraId:198,tocIndex:6},{value:"afteritemstatesclear",paraId:198,tocIndex:6},{value:"afteritemvisibilitychange",paraId:198,tocIndex:6},{value:"beforeitemstatechange",paraId:198,tocIndex:6},{value:"beforeitemstatesclear",paraId:198,tocIndex:6},{value:"beforeitemvisibilitychange",paraId:198,tocIndex:6},{value:"The following events have been changed:\n",paraId:196,tocIndex:6},{value:"The ",paraId:199,tocIndex:6},{value:"graphstatechange",paraId:199,tocIndex:6},{value:" event has been changed to ",paraId:199,tocIndex:6},{value:"beforeelementstatechange",paraId:199,tocIndex:6},{value:" / ",paraId:199,tocIndex:6},{value:"afterelementstatechange",paraId:199,tocIndex:6},{value:".",paraId:199,tocIndex:6},{value:"The ",paraId:199,tocIndex:6},{value:"viewportchange",paraId:199,tocIndex:6},{value:" event has been changed to ",paraId:199,tocIndex:6},{value:"beforetransform",paraId:199,tocIndex:6},{value:" / ",paraId:199,tocIndex:6},{value:"aftertransform",paraId:199,tocIndex:6},{value:".",paraId:199,tocIndex:6},{value:"For a complete list of events, please refer to ",paraId:200,tocIndex:6},{value:"Event",paraId:201,tocIndex:6},{value:".",paraId:200,tocIndex:6}];}}]);
//# sourceMappingURL=aa64e27e-async.5a4f19e3.js.map