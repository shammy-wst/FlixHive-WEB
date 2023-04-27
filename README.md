This is a [Next.js](https://nextjs.andg/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
This WebApp is a school project made by Icham M'MADI , Wissem KARBOUB and Samy HAMLAT, this website is a streaming website created with NEXTJS, TAILWIND, FIREBASE, REACT PLAYER and the TMDB Api.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.


## Getting errors?
If you are getting errors this is completely normal, modules and API Key are not installed.

To install them open your terminal and type:

```bash
npm install recoil
# and
npm install firebase
# and
npm install @mui/material @emotion/react @emotion/styled
# and
npm install react-player
```

## Installing API Key
To install the API Key in order to get all the queries in the website you'll need to create a file named :

```bash
.env.local
```

This file will contain the following Key : NEXT_PUBLIC_API_KEY=db7ff1bedcfb63197436b09955f17eef

## Additonal content
For more information about the API :
API_IMG :

[https://image.tmdb.org/t/p/w500/]

API_SEARCH :

[https://api.themoviedb.org/3/search/company?api_key=db7ff1bedcfb63197436b09955f17eef&query]