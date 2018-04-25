"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _canvas = require("@jworkshop/canvas");

var _canvas2 = _interopRequireDefault(_canvas);

var _animator = require("@jworkshop/animator");

var _animator2 = _interopRequireDefault(_animator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasAnimator = function (_Canvas) {
  _inherits(CanvasAnimator, _Canvas);

  function CanvasAnimator(props) {
    _classCallCheck(this, CanvasAnimator);

    var _this = _possibleConstructorReturn(this, (CanvasAnimator.__proto__ || Object.getPrototypeOf(CanvasAnimator)).call(this, props));

    _this.removeAnimation = null;
    _this.removePause = null;
    _this.removeResume = null;
    return _this;
  }

  _createClass(CanvasAnimator, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this._mount();

      var props = this.props;
      var animator = props.animator;


      this.removeAnimation = animator.add(function (timeDiff) {
        var _state = _this2.state,
            width = _state.width,
            height = _state.height;

        var context = _this2.getContext();

        props.animate(context, width, height, timeDiff);
      });
      this.removePause = animator.onPause(props.onPause);
      this.removeResume = animator.onResume(props.onResume);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._unmount();

      this.removeAnimation();
      this.removePause();
      this.removeResume();
    }

    /** Pause the animation. */

  }, {
    key: "start",
    value: function start() {
      this.props.animator.start();
    }

    /** Pause the animation. */

  }, {
    key: "pause",
    value: function pause() {
      this.props.animator.pause();
    }

    /** Pause the animation. */

  }, {
    key: "resume",
    value: function resume() {
      this.props.animator.resume();
    }
  }]);

  return CanvasAnimator;
}(_canvas2.default);

CanvasAnimator.propTypes = {
  animator: _propTypes2.default.instanceOf(_animator2.default),
  animate: _propTypes2.default.func,
  onPause: _propTypes2.default.func,
  onResume: _propTypes2.default.func
};

CanvasAnimator.defaultProps = {
  animator: new _animator2.default(),
  animate: function animate() {},
  onPause: function onPause() {},
  onResume: function onResume() {}
};

exports.default = CanvasAnimator;