import {
  FingerCurl,
  Finger,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const four = new GestureDescription("four");

four.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
four.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);

four.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
four.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
four.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
four.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
four.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
four.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

four.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
four.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
four.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
four.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
four.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
four.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

four.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
four.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
four.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
four.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
four.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);
four.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

four.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
four.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
four.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
four.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
four.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);
four.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);

export default four;
