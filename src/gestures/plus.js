import {Finger, FingerDirection, FingerCurl, GestureDescription} from "fingerpose"

const plus = new GestureDescription("+");

plus.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
plus.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
plus.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
plus.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
plus.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

plus.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
plus.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
plus.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
plus.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
plus.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
plus.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

plus.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
plus.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);

plus.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
plus.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

plus.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
plus.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
plus.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
plus.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
plus.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);
plus.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);

export default plus;