# pending-task

A pending task scheduler for complex apps

## Features

- Zero-dependency
- Secure
- Async/Promise support
- Condition support
- Throttle support
- Good performance

## Installation

```sh
yarn add pending-task@dalisoft/pending-task
```

## Usage

```js
import pending from "pending-task";

app.get("/is_verified", async (req, res) => {
  await pending(
    () => res.json({ verified: true }),
    async () => UserController.isVerified()
  );
});
```

## License

MIT
