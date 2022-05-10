import {
  FingerCurl,
  Finger,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const six = new GestureDescription("six");

six.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
six.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
six.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
six.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
six.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
six.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

six.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
six.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
six.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
six.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
six.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
six.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

six.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
six.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);

six.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
six.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

six.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
six.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

export default six;
