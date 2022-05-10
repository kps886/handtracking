import {
  FingerCurl,
  Finger,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const seven = new GestureDescription("seven");

seven.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
seven.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
seven.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
seven.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
seven.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
seven.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

seven.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
seven.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
seven.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
seven.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
seven.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
seven.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

seven.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
seven.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
seven.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
seven.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
seven.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);
seven.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);

seven.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
seven.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

seven.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
seven.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

export default seven;
