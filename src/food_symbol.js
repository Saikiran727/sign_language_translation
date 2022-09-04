import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

export const foodGesture = new GestureDescription('iam hungry');

foodGesture.addCurl(Finger.Thumb,FingerCurl.NoCurl,1.0)
foodGesture.addDirection(Finger.Thumb,FingerDirection.DiagonalUpRight,1.0)

foodGesture.addCurl(Finger.Index,FingerCurl.NoCurl,1.0)
foodGesture.addDirection(Finger.Index,FingerDirection.VerticalUp,1.0)

foodGesture.addCurl(Finger.Middle,FingerCurl.NoCurl,1.0)
foodGesture.addDirection(Finger.Middle,FingerDirection.VerticalUp,1.0)

foodGesture.addCurl(Finger.Ring,FingerCurl.NoCurl,1.0)
foodGesture.addDirection(Finger.Ring,FingerDirection.VerticalUp,1.0)

foodGesture.addCurl(Finger.Pinky,FingerCurl.NoCurl,1.0)
foodGesture.addDirection(Finger.Pinky,FingerDirection.VerticalUp,1.0)
