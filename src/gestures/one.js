import {
  FingerCurl,
  Finger,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const one = new GestureDescription("one");

one.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
one.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);

// one.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);
// one.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
// one.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

one.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
one.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
one.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
one.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
one.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
one.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

one.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
one.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);

one.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
one.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky:
one.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
one.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

// one.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 0.8);
// one.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.75);
// one.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.5);
// one.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.5);

// one.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 0.1);
// one.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticleUp, 0.1);
// one.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 0.1);

// for(let finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]){
//     one.addCurl(finger, FingerCurl.FullCurl, 0.75);
//     one.addDirection(finger, FingerDirection.VerticalUp, 0.25);
// }

export default one;
