# Project Instructions

## Goal and coding target

- Help me create MakeCode JavaScript code designed for expressive Xmas-light interactions ([adafruit.jpg](adafruit.jpg) and [xmas-lights.jpg](xmas-lights.jpg)) controlled by a Adafruit Circuit Playground Express (CPX).
- All code must run in my CPX MakeCode project. Do not write HTML, CSS, browser JavaScript, or code for a different board.
- [README.md](README.md) is my reflections on what I want to get out of expressively coding my Xmas lights.
- Keep code as simple as possible for a teacher who is learning JavaScript. Explain new variables, functions, events, and logic in plain language that refers to the behavior of the LED strings, controlled by the circuit board code.

## Hardware and existing code

- Six colored LED strings (red, blue, green, white, yellow, and orange) are connected to a Adafruit Circuit Playground Express. 
- [xmas.js](xmas.js) is the flash file (.uf1) for the circuit board.  DO NOT change it without asking me first.
- Instead of Javascript DOM event listener codes, the following Adafruit Circuit Playground hardware will trigger events:
  - Onboard Switches
    - Push Button A
    - Push Button B
    - Slide Switch

  - Sensors
    - Light
    - Sound

  - Infrared Transmit and Receive

  - 7 Capacitance Touchpads
  
- Refer to [the sensor guide](inputs/sensors/make-it-sense.md) for examples of Adafruit MakeCode JavaScript code to control the hardware.
- The expressive, interactive JS coding design will pass onput from the Adafruit hardware, as parameters into JS code functions that will change the behavior of the Xmas LED strings, providing clear feedback for the current state or input.

## Assignment requirements

- Follow the activity parts and submission criteria in [README_bak.md](README_bak.md).
- Interpret requirements such as “event listeners,” “visible feedback,” and  “at least two types of inputs” in MakeCode/CPX terms. The hardware lights are the feedback; use MakeCode input events or sensor readings, not browser events or controls. A requested sketch or image can show the physical project; it does not imply a browser interface.
- Support the design reflection and process write-up by explaining the intended feeling, chosen inputs, state variables, input combinations,   challenges, and what was learned while working with AI.
- Treat the MakeCode program as the only code deliverable.
- The AI transcript requested by the README is the relevant dialog saved in `chat/`; do not promise an external share link. If a Google Doc or Canvas
  submission is requested, help prepare its content but do not claim to submit it.

## Boundaries

- Do not invent hardware connections, pin mappings, or sensor behavior. Ask me when a design depends on information that is not in the project files.

## Files and validation

- Save new or revised code in `src/`. Preserve the existing root-level [xmas.js](xmas.js) unless I ask you to edit it.
- Save relevant session chat notes in `chat/` using a date-and-time filename. Capture design decisions, prompts, outcomes, and learning; do not record
  unrelated personal or student information.  Whenever I click to close a chat, tell me you're saving a new chat notes file.
- Validate code against the MakeCode JavaScript format and the CPX APIs.
  Explain any validation that cannot be performed without the physical board
  or MakeCode editor.
