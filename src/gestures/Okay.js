import {
  Finger,
  FingerDirection,
  FingerCurl,
  GestureDescription,
} from "fingerpose";

const zero = new GestureDescription("Done");

zero.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
zero.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9);

zero.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
zero.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.9);

zero.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
zero.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);

zero.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
zero.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

zero.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
zero.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

export default zero;
