import {
  FingerCurl,
  Finger,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const nine = new GestureDescription("nine");

nine.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
nine.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
nine.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
nine.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
nine.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
nine.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

nine.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
nine.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
nine.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
nine.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
nine.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
nine.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

nine.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
nine.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
nine.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
nine.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
nine.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
nine.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

nine.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
nine.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
nine.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
nine.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
nine.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);
nine.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

nine.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
nine.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
nine.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
nine.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
nine.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);
nine.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);

export default nine;
