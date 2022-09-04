import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

export const hiiGesture = new GestureDescription("i don't know");

hiiGesture.addCurl(Finger.Thumb,FingerCurl.HalfCurl,1.0)
hiiGesture.addDirection(Finger.Thumb,FingerDirection.HorizontalRight,1.0)

hiiGesture.addCurl(Finger.Index,FingerCurl.NoCurl,1.0)
hiiGesture.addDirection(Finger.Index,FingerDirection.HorizontalRight,1.0)

hiiGesture.addCurl(Finger.Middle,FingerCurl.NoCurl,1.0)
hiiGesture.addDirection(Finger.Middle,FingerDirection.HorizontalRight,1.0)

hiiGesture.addCurl(Finger.Ring,FingerCurl.FullCurl,1.0)
hiiGesture.addDirection(Finger.Ring,FingerDirection.HorizontalLeft,2.0)

hiiGesture.addCurl(Finger.Pinky,FingerCurl.FullCurl,1.0)
hiiGesture.addDirection(Finger.Pinky,FingerDirection.HorizontalLeft,2.0)