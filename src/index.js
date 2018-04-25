import PropTypes from "prop-types";
import Canvas from "@jworkshop/canvas";
import Animator from "@jworkshop/animator";

class CanvasAnimator extends Canvas {
  constructor(props) {
    super(props);

    this.removeAnimation = null;
    this.removePause = null;
    this.removeResume = null;
  }

  componentDidMount() {
    this._mount();

    const { props } = this;
    const { animator } = props;

    this.removeAnimation = animator.add(timeDiff => {
      const { width, height } = this.state;
      const context = this.getContext();

      props.animate(context, width, height, timeDiff);
    });
    this.removePause = animator.onPause(props.onPause);
    this.removeResume = animator.onResume(props.onResume);
  }

  componentWillUnmount() {
    this._unmount();

    this.removeAnimation();
    this.removePause();
    this.removeResume();
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
