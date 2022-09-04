import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

// describe victory gesture ✌️

export const iwillGesture = new GestureDescription("i will do it");

// thumb:
iwillGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
iwillGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
iwillGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
iwillGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
iwillGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
iwillGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
iwillGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// middle:
iwillGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
iwillGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
iwillGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.75);

// ring:
iwillGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
iwillGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.2);
iwillGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
iwillGesture.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);

// pinky:
iwillGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
iwillGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.2);
iwillGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
iwillGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.2);

// give additional weight to index and ring fingers
iwillGesture.setWeight(Finger.Index, 2);
iwillGesture.setWeight(Finger.Middle, 2);


