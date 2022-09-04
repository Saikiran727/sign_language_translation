import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

export const someGesture = new GestureDescription('thankyou');

someGesture.addCurl(Finger.Thumb,FingerCurl.FullCurl,1.0)
someGesture.addCurl(Finger.Thumb,FingerCurl.HalfCurl,1.0)
someGesture.addDirection(Finger.Thumb,FingerDirection.HorizontalRight,1.0)

someGesture.addCurl(Finger.Index,FingerCurl.NoCurl,1.0)
someGesture.addDirection(Finger.Index,FingerDirection.VerticalUp,1.0)

someGesture.addCurl(Finger.Middle,FingerCurl.FullCurl,2.0)
someGesture.addCurl(Finger.Middle,FingerCurl.HalfCurl,2.0)
someGesture.addDirection(Finger.Middle,FingerDirection.VerticalDown,1.0)

someGesture.addCurl(Finger.Ring,FingerCurl.FullCurl,2.0)
someGesture.addCurl(Finger.Ring,FingerCurl.HalfCurl,2.0)
someGesture.addDirection(Finger.Ring,FingerDirection.VerticalDown,1.0)

someGesture.addCurl(Finger.Pinky,FingerCurl.NoCurl,1.0)
someGesture.addDirection(Finger.Pinky,FingerDirection.VerticalUp,1.0)