import PropTypes from "prop-types";
import Canvas from "@jworkshop/canvas";
import Animator from "@jworkshop/animator";

class CanvasAnimator extends Canvas {
  constructor({ animator, animate, onPause, onResume, ...props }) {
    super(props);

    this.animator = animator;
    this.animate = animate;
    this.onPause = onPause;
    this.onResume = onResume;
    this.removeAnimation = null;
    this.removePause = null;
    this.removeResume = null;
  }

  componentDidMount() {
    this._mount();

    const { animator, animate, onPause, onResume } = this.props;

    this.removeAnimation = animator.add(timeDiff => {
      const { width, height } = this.state;
      const context = this.getContext();

      animate(context, width, height, timeDiff);
    });

    this.removePause = animator.onPause(onPause);
    this.removeResume = animator.onResume(onResume);
  }

  componentWillUnmount() {
    this._unmount();

    const { removeAnimation, removePause, removeResume } = this;

    if (removeAnimation) {
      removeAnimation();
    }

    if (removePause) {
      removePause();
    }

    if (removeResume) {
      removeResume();
    }
  }

  /** Pause the animation. */
  start() {
    this.props.animator.start();
  }

  /** Pause the animation. */
  pause() {
    this.props.animator.pause();
  }

  /** Pause the animation. */
  resume() {
    this.props.animator.resume();
  }
}

CanvasAnimator.propTypes = {
  animator: PropTypes.instanceOf(Animator),
  animate: PropTypes.func,
  onPause: PropTypes.func,
  onResume: PropTypes.func
};

CanvasAnimator.defaultProps = {
  animator: new Animator(),
  animate: () => {},
  onPause: () => {},
  onResume: () => {}
};

export default CanvasAnimator;
