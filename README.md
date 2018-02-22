# Ori and the Blind Forest Restreaming Site

This web app is intended for restreaming Ori and the Blind Forest speedrun races.

* Basic timer
* Change the players and commentary name without reloading the page
* Visual Audio selection to show which runner has audio

Build instructions:
- Development:
Run `npm start` in one terminal (to start the server) and `ng serve --port=4201` in another (to start the development environment).
Alternatively, if you install dev dependencies, you can simply run `run-p start dev` or `npm run start-dev`.
- Production:
Run `ng build --prod` to output the web app to `/dist`. Copy `/dist` to the web app server and run `npm start` on the socket server OR simply run both socket and web app from the same server via `npm start`.
