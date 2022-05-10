import {
  Finger,
  FingerDirection,
  FingerCurl,
  GestureDescription,
} from "fingerpose";

const clear = new GestureDescription("clear");

clear.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
clear.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
clear.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
clear.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
clear.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

clear.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
clear.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
clear.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
clear.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
clear.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
clear.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

clear.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
clear.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);

clear.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
clear.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
clear.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
clear.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
clear.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);
clear.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

clear.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
clear.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
clear.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
clear.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
clear.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);
clear.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);

export default clear;
