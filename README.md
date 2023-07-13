# Mars Rover Challenge

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Environment

To make this project work correctly, you must create a `.env.local` file on the root folder. Inside this file you should include the following environment variables:

```
NEXT_PUBLIC_API_KEY=<your_api_key>
NEXT_PUBLIC_API_BASE_URL=https://api.nasa.gov/mars-photos/api/v1
```

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
