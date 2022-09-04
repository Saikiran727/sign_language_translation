import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

export const gunGesture = new GestureDescription('i need help');

gunGesture.addCurl(Finger.Thumb,FingerCurl.NoCurl,1.0)
gunGesture.addDirection(Finger.Thumb,FingerDirection.DiagonalUpLeft,1.0)

gunGesture.addCurl(Finger.Index,FingerCurl.NoCurl,1.0)
gunGesture.addDirection(Finger.Index,FingerDirection.VerticalUp,1.0)

gunGesture.addCurl(Finger.Middle,FingerCurl.NoCurl,1.0)
gunGesture.addDirection(Finger.Middle,FingerDirection.VerticalUp,1.0)

gunGesture.addCurl(Finger.Ring,FingerCurl.NoCurl,1.0)
gunGesture.addDirection(Finger.Ring,FingerDirection.VerticalUp,1.0)

gunGesture.addCurl(Finger.Pinky,FingerCurl.NoCurl,1.0)
gunGesture.addDirection(Finger.Pinky,FingerDirection.VerticalUp,1.0)


