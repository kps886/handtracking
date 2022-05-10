import {
  FingerCurl,
  Finger,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const three = new GestureDescription("three");

three.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
three.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);

three.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
three.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
three.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
three.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
three.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
three.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

three.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
three.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
three.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
three.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
three.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
three.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

three.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
three.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
three.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
three.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
three.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);
three.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

three.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
three.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

export default three;
