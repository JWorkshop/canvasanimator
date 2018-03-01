# canvasanimator

A canvas react UI component integrated with animation feature.
It is an extension of [canvas](https://nodei.co/npm/@jworkshop/canvas),
integrated with an [animator](https://nodei.co/npm/@jworkshop/animator).

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/@jworkshop/canvasanimator.svg
[npm-url]: http://npmjs.org/package/@jworkshop/canvasanimator
[travis-image]: https://img.shields.io/travis/JWorkshop/canvasanimator.svg
[travis-url]: https://travis-ci.org/JWorkshop/canvasanimator
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/@jworkshop/canvasanimator.svg
[download-url]: https://npmjs.org/package/@jworkshop/canvasanimator

## install

[![NPM](https://nodei.co/npm/@jworkshop/canvasanimator.png)](https://nodei.co/npm/@jworkshop/canvasanimator)

## Usage

```javascript
import React, { Component } from "react";
import ReactDOM from "react-dom";

import CanvasAnimator from "@jworkshop/canvasanimator";

import "./style.css";

class Example extends Component {
  constructor(props) {
    super(props);

    this.resizeHandler = this.resizeHandler.bind(this);
    this.animate = this.animate.bind(this);
    this.pauseHandler = this.pauseHandler.bind(this);
    this.resumeHandler = this.resumeHandler.bind(this);
  }

  someFunction() {
    const canvas = this.myCanvas;

    /** Retrieve the canvas react component. */
    canvas.getCanvasElement();

    /** Get the width of the canvas react component. */
    canvas.getCanvasWidth();

    /** Get the width of the canvas react component. */
    canvas.getCanvasHeight();

    /** Get the context of the canvas. */
    canvas.getContext();

    /** Get the image data of the canvas with a give area. */
    canvas.getImageData(startX, startY, endX, endY);

    /** Start the animation. */
    canvas.start();

    /** Pause the animation. */
    canvas.pause();

    /** Resume the animation. */
    canvas.resume();
  }

  resizeHandler(width, height) {
    // Do you stuff
  }

  animate(context, width, height, timeDiff) {
    // Do you stuff
  }

  pauseHandler() {
    // Do you stuff
  }

  resumeHandler() {
    // Do you stuff
  }

  render() {

    return (
      <CanvasAnimator
        ref={myCanvas => this.myCanvas = myCanvas}
        className="className"
        style={ ... }
        canvasClassName="canvasClassName"
        canvasStyle={ ... }
        onResize={this.resizeHandler}
        animate={this.animate}
        onPause={this.pauseHandler}
        onResume={this.resumeHandler}
      />
    );
  }
}

ReactDOM.render(<Test />, document.getElementById("root"));
```
