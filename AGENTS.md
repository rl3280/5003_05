# Project Instructions

## Goal and coding target

- Help me create MakeCode JavaScript code designed for expressive Xmas-light interactions ([adafruit.jpg](adafruit.jpg) and [xmas-lights.jpg](xmas-lights.jpg)) using
  MakeCode JavaScript for the Adafruit Circuit Playground Express (CPX).
- All code must run in my CPX MakeCode project. Do not write HTML, CSS,
  browser JavaScript, or code for a different board.
- Follow the project workflow in [README.md](README.md): design the intended
  behavior, then help me express it in MakeCode JavaScript.
- Keep code as simple as possible for a teacher who is learning JavaScript. Explain new
  variables, functions, events, and logic in plain language.

## Hardware and existing code

- Six colored LED strings (red, blue, green, white, yellow, and orange) are
  connected by copper wires to CPX pads labeled A0, A1, and so on. 
- Use [flic.js](flic.js) as the reference for the current pin assignments and
  blinking behavior. Do not infer which color is connected to which pin or
  which exact pads are physically wired beyond what I have confirmed. Do not
  change pin assignments or switch between digital and analog APIs without
  asking me first.
- Use MakeCode-supported CPX pin and sensor/input APIs. Refer to
  [the sensor guide](inputs/sensors/make-it-sense.md) for available inputs
  and examples.
- For the complete interactive design, use at least two distinct CPX input
  types supported by MakeCode and make the light response change based on
  their combination. Use MakeCode input events or polling as appropriate;
  “event listeners” in the rubric means MakeCode input handling, not browser
  DOM events.
- Make the lights provide clear feedback for the current state or input.

## Assignment requirements

- Follow the activity parts and submission criteria in
  [README_bak.md](README_bak.md).
- Interpret requirements such as “event listeners,” “visible feedback,” and
  “at least two types of inputs” in MakeCode/CPX terms. The hardware lights
  are the feedback; use MakeCode input events or sensor readings, not browser
  events or controls.
- If the rubric mentions a browser deliverable, CodePen, or an interface that
  cannot be provided by the CPX MakeCode program, explain that mismatch.
  Do not create a web app or claim to provide a CodePen project.
- Support the design reflection and process write-up by explaining the
  intended feeling, chosen inputs, state variables, input combinations,
  challenges, and what was learned while working with AI.
- Treat the MakeCode program as the only code deliverable.
- The AI transcript requested by the README is the relevant dialog saved in
  `chat/`; do not promise an external share link. If a Google Doc or Canvas
  submission is requested, help prepare its content but do not claim to
  submit it.

## Boundaries

- Do not invent hardware connections, pin mappings, or sensor behavior. Ask
  me when a design depends on information that is not in the project files.

## Files and validation

- Save new or revised code in `src/`. Preserve the existing root-level
  [flic.js](flic.js) unless I ask you to edit it.
- Save relevant session chat notes in `chat/` using a date-and-time filename.
  Capture design decisions, prompts, outcomes, and learning; do not record
  unrelated personal or student information.
- Validate code against the MakeCode JavaScript format and the CPX APIs.
  Explain any validation that cannot be performed without the physical board
  or MakeCode editor.
