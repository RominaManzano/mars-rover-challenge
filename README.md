# Mars Rover Challenge

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Environment

To make sure this project works correctly, you must create an `.env.local` file on the root folder. Inside this file you should include the following environment variables:

```
NEXT_PUBLIC_API_KEY=<your_api_key>
NEXT_PUBLIC_API_BASE_URL=https://api.nasa.gov/mars-photos/api/v1
```

To obtain an `api_key`, go to the [NASA Open API](https://api.nasa.gov/);

## Local Development

First, install all the requiered dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Local Testing

To make sure the tests run smoothly, you must create an `.env.test` file, identical to `.env.local`, on the root folder.

Then, run:

```bash
npm run test
```

or, to get the coverage report:

```bash
npm run test:coverage
```
