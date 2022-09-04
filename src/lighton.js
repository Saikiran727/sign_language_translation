import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 


export const lightGesture = new GestureDescription("iam thirsty");

lightGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
lightGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
lightGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.25);
lightGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.25);


for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  lightGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  lightGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
  lightGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}