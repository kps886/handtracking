import {
  FingerCurl,
  Finger,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const equals = new GestureDescription("=");

// equals.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
// equals.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
// equals.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
// equals.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
// equals.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

equals.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
equals.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
equals.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.9);
equals.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.9);

equals.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
equals.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
equals.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
equals.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 1.0);
equals.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 1.0);
equals.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
equals.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

equals.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
equals.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
equals.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
equals.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 1.0);
equals.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 1.0);
equals.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
equals.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

equals.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
equals.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
equals.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
equals.addDirection(Finger.Ring, FingerDirection.DiagonalDownLeft, 1.0);
equals.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 1.0);
equals.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);
equals.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

equals.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
equals.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);

export default equals;
