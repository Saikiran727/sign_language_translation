import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

export const toiletGesture = new GestureDescription("where is toilet");

toiletGesture.addCurl(Finger.Thumb,FingerCurl.NoCurl,1.0)
toiletGesture.addDirection(Finger.Thumb,FingerDirection.DiagonalUpRight,1.0)

toiletGesture.addCurl(Finger.Index,FingerCurl.FullCurl,2.0)
toiletGesture.addCurl(Finger.Index,FingerCurl.HalfCurl,2.0)
toiletGesture.addDirection(Finger.Index,FingerDirection.HorizontalRight,1.0)

toiletGesture.addCurl(Finger.Middle,FingerCurl.FullCurl,2.0)
toiletGesture.addCurl(Finger.Middle,FingerCurl.HalfCurl,2.0)
toiletGesture.addDirection(Finger.Middle,FingerDirection.HorizontalRight,1.0)

toiletGesture.addCurl(Finger.Ring,FingerCurl.FullCurl,2.0)
toiletGesture.addCurl(Finger.Ring,FingerCurl.HalfCurl,2.0)
toiletGesture.addDirection(Finger.Ring,FingerDirection.HorizontalLeft,2.0)

toiletGesture.addCurl(Finger.Pinky,FingerCurl.NoCurl,1.0)
toiletGesture.addDirection(Finger.Pinky,FingerDirection.VerticalUp,2.0)