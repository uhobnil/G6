(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["82c9c50e"],{"82c9c50e":function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"texts",{enumerable:!0,get:function(){return t;}}),a("ac9c2a36");let t=[{value:"The execution logic for behaviors typically involves: 1. Listening for user behavior events, 2. Updating the canvas or performing other operations based on the events. For example, the ",paraId:0,tocIndex:0},{value:"DragCanvas",paraId:0,tocIndex:0},{value:" behavior listens for pointer drag events and updates the position of the camera based on the distance dragged.",paraId:0,tocIndex:0},{value:"behaviors and plugins are both derived from G6's internal ",paraId:1,tocIndex:0},{value:"BaseExtension",paraId:1,tocIndex:0},{value:" base class, so the implementation methods for behaviors and plugins are essentially the same. However, based on the concept of visualization, behaviors are usually used to handle user behavior events, while plugins are typically used to handle canvas rendering logic, rendering of additional components, etc.",paraId:1,tocIndex:0},{value:"The implementation of an behavior is quite flexible, and you can implement your behavior in the style you prefer.",paraId:2,tocIndex:1},{value:"Below is a simple implementation of a custom behavior that adds a node to the canvas when the user clicks on it:",paraId:3,tocIndex:1},{value:"import { BaseBehavior, CanvasEvent } from '@antv/g6';\nimport type { BaseBehaviorOptions, RuntimeContext, IPointerEvent } from '@antv/g6';\n\ninterface ClickAddNodeOptions extends BaseBehaviorOptions {}\n\nclass ClickAddNode extends BaseBehavior<ClickAddNodeOptions> {\n  constructor(context: RuntimeContext, options: ClickAddNodeOptions) {\n    super(context, options);\n\n    const { graph } = this.context;\n    graph.on(CanvasEvent.CLICK, (event: IPointerEvent) => {\n      const { layerX, layerY } = event.nativeEvent as PointerEvent;\n      graph.addNodeData([\n        {\n          id: 'node-' + Date.now(),\n          style: { x: layerX, y: layerY },\n        },\n      ]);\n      graph.draw();\n    });\n  }\n}\n",paraId:4,tocIndex:1},{value:"In the example code, we implemented an behavior called ",paraId:5,tocIndex:1},{value:"ClickAddNode",paraId:5,tocIndex:1},{value:" based on ",paraId:5,tocIndex:1},{value:"BaseBehavior",paraId:5,tocIndex:1},{value:". This behavior adds an event listener to the Graph in its constructor. When the user clicks on the canvas, a node will be added at the clicked position.",paraId:5,tocIndex:1},{value:"Click on an empty space in the canvas below to add a node",paraId:6,tocIndex:1},{value:"(async () => {\n  const { BaseBehavior, CanvasEvent, register, ExtensionCategory, Graph } = window.g6;\n\n  class ClickAddNode extends BaseBehavior {\n    constructor(context, options) {\n      super(context, options);\n\n      const { graph } = this.context;\n      graph.on(CanvasEvent.CLICK, (event) => {\n        const { layerX, layerY } = event.nativeEvent;\n        graph.addNodeData([\n          {\n            id: 'node-' + Date.now(),\n            style: { x: layerX, y: layerY },\n          },\n        ]);\n        graph.draw();\n      });\n    }\n  }\n\n  register(ExtensionCategory.BEHAVIOR, 'click-add-node', ClickAddNode);\n\n  const container = createContainer({ width: 300, height: 300 });\n  container.style.border = '1px solid #ccc';\n\n  const graph = new Graph({\n    container,\n    width: 300,\n    height: 300,\n    data: {\n      nodes: [],\n    },\n    behaviors: ['click-add-node'],\n  });\n\n  await graph.render();\n\n  return container;\n})();\n",paraId:7,tocIndex:1},{value:"The above example is the simplest implementation of an behavior. In actual development, you will also need to handle the destruction of event listeners, enabling and disabling behaviors, and other logic.",paraId:8},{value:"In addition, there may be event conflicts between multiple behaviors, and you will need to carefully manage these conflicts.",paraId:9},{value:"You can register behaviors through the registration method provided by G6. For more details, see ",paraId:10,tocIndex:2},{value:"Register Behavior",paraId:11,tocIndex:2},{value:".",paraId:10,tocIndex:2},{value:"You can pass the name of the behavior type or a configuration parameters object in the ",paraId:12,tocIndex:3},{value:"behaviors",paraId:12,tocIndex:3},{value:". For more details, see ",paraId:12,tocIndex:3},{value:"Configure Behavior",paraId:13,tocIndex:3}];}}]);
//# sourceMappingURL=82c9c50e-async.e16d5590.js.map