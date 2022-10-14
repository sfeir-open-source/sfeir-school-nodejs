# Sfeir Schools

## Step 9

And how do we know what's going on? We put logs!

- We will add the [wintson](https://www.npmjs.com/package/winston) module.
- We add the logger to output in the console and in *.log files.
- We will modify the log level via the environment variable `LOG_LEVEL`.
- And we put logs everywhere!
- We will also use the events [`uncaughtException`](https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_event_uncaughtexception) and [`unhandledRejection`](https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_event_unhandledrejection)...
