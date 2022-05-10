import {
  FingerCurl,
  Finger,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const five = new GestureDescription("five");

five.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
// five.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
five.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
five.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
five.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 1.0);
five.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 1.0);
five.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
five.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

five.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
five.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.9);

five.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
five.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);

five.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
five.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

five.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
five.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

export default five;
