import {
  Finger,
  FingerDirection,
  FingerCurl,
  GestureDescription,
} from "fingerpose";

const minus = new GestureDescription("-");

minus.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
minus.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
minus.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
minus.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
minus.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

minus.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
minus.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.9);

minus.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
minus.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);

minus.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
minus.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

minus.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
minus.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
minus.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
minus.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
minus.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);
minus.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);

export default minus;
