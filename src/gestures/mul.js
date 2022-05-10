import {
  Finger,
  FingerDirection,
  FingerCurl,
  GestureDescription,
} from "fingerpose";

const mul = new GestureDescription("*");

mul.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
mul.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
mul.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
mul.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
mul.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

mul.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
mul.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
mul.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
mul.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
mul.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
mul.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

mul.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
mul.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
mul.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
mul.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
mul.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
mul.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

mul.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
mul.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

mul.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
mul.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
mul.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
mul.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
mul.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);
mul.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);

export default mul;
