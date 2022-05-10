import {
  FingerCurl,
  Finger,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const eight = new GestureDescription("eight");

eight.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
eight.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
eight.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
eight.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
eight.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
eight.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

eight.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
eight.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
eight.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
eight.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
eight.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
eight.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

eight.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
eight.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
eight.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
eight.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
eight.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);
eight.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);

eight.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
eight.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
eight.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
eight.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
eight.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);
eight.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);

eight.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
eight.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

export default eight;
