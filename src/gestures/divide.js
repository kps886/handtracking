import {
  Finger,
  FingerDirection,
  FingerCurl,
  GestureDescription,
} from "fingerpose";

const div = new GestureDescription("/");

div.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
div.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
div.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
div.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
div.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

div.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
div.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.9);

div.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
div.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
div.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
div.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
div.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
div.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

div.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
div.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

div.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
div.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
div.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
div.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
div.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);
div.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);

export default div;
