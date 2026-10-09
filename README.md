# Due

The next train, as a minute.

Due is a board for the train you are about to catch. Save a route. The page shows how many minutes until it leaves, the train number, and where that train is.

A phone stays the board. A large screen that is not being used as a pointer becomes the display: the minute fills the glass, and the controls go away. There is no switch for this.

## Run

Serve this folder, or open index.html. There is no build and no install step.

A static host is enough. The manifest starts at /, standalone, with the status bar on the same paper as the page.

## Data

Regional Rail comes from SEPTA public Next to Arrive and TrainView feeds. No key. Times are Eastern. Saved routes stay on the device. If the feed is quiet, the last board still paints.

A route is a pair of stations and a source. Other agencies are not in this page. A feed that needs a credential, such as NJ Transit, would need a small server to hold the key and return the same facts: minutes, train number, line, place, late. The board would not change.

## License

MIT. See LICENSE.
