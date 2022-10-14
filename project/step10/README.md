# Sfeir Schools

## Step 10

Middleware!

- We will add an error middleware to replace the `res.sendStatus(...)` which send 4xx or 5xx.
- We will add middleware to measure the processing time of requests to send them to the logs.
  - We install the [on-headers](https://www.npmjs.com/package/on-headers) module.
  - And we play with [process.hrtime()](https://nodejs.org/api/process.html#process_process_hrtime_time).
