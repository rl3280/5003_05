# Project Instructions

## Goal and coding target

- Help me make JavaScript code designed for expressive Xmas-light interactions using
  MakeCode JavaScript for the Adafruit Circuit Playground Express (CPX).
- All code must run in my CPX MakeCode project. Do not write HTML, CSS,
  browser JavaScript, or code for a different board.
- Keep code as simple as possible for a teacher who is learning JavaScript. Explain new
  variables, functions, events, and logic in plain language.

## Hardware and existing code

- Six colored LED strings (red, blue, green, white, yellow, and orange) are
  connected to analog CPX pins.
- Use [flic.js](flic.js) as the reference for the current pin assignments and
  blinking behavior. Do not change pin assignments or the meaning of a pin
  without asking me first.
- Use MakeCode-supported CPX pin and sensor/input APIs. Refer to
  [the sensor guide](inputs/sensors/make-it-sense.md) for available inputs
  and examples.
- When designing an interactive experience, use at least two CPX inputs and
  make the light response change based on their combination. Use MakeCode
  event handlers or polling as appropriate; “event listeners” in the rubric
  means MakeCode input events, not browser DOM events.
- Make the lights provide clear feedback for the current state or input.

## Assignment requirements

- Follow the activity parts and submission criteria in
  [README_bak.md](README_bak.md).
- Support the design reflection and process write-up by explaining the
  intended feeling, chosen inputs, state variables, input combinations,
  challenges, and what was learned while working with AI.
- Treat the MakeCode program as the code deliverable. Do not introduce a
  separate web-app deliverable.

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
