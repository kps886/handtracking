import {
  FingerCurl,
  Finger,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const Okay = new GestureDescription("zero");

Okay.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
Okay.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
// Okay.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.9);
// Okay.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.9);

Okay.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
Okay.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.9);

Okay.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
Okay.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);

Okay.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
Okay.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

Okay.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
Okay.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

// Okay.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
// Okay.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
// Okay.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
// Okay.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

export default Okay;
