import React from "react";

const About = () => {
  return (
    <div
      style={{
        margin: "auto",
        padding: "50px 400px 100px",
        textAlign: "Left",
        fontFamily: "Playfair display",
        fontSize: 22,
        fontWeight: 700,
      }}
    >
      Touchscreen calculators require a user to visually locate a button on the
      screen. This poses a challenge for individuals with limited or no vision.
      To overcome this challenge, prior to use these individuals must invest
      additional time and energy into memorizing the calculator layout. There is
      currently no application that simplifies the calculator user-interface for
      individuals with limited or no vision. To fill this void, this team
      proposes Hand Tracking Claculator. Hand Tracking Claculator is a
      button-free calculator application for touchscreen devices that utilizes
      gestures to operate. Using finger , the user can input a number using
      Gestures and the application will compute the Gesture to its corresponding
      numerical value. Results indicate that Hand Tracking Claculator is faster
      and more accessible to blind users than the traditional touchscreen
      calculator. However, in order to increase the efficiency of Hand Tracking
      Claculator further development of the underlying algorithm is required.
    </div>
  );
};

export default About;
