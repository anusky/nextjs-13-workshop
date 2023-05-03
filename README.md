This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Ensure you are using Node 18
Create this boilerplate by running
```bash
npx create-next-app@latest  
```


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.js`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
  

## Typescript - NextJs related issues
- Trying to load a Server Component on a page will imply an Error telling "'ServerComponentName' cannot be used as a JSX component."
  - prevent it by adding a ts-expect-error before the line that fails
   ```jsx 
   {/* @ts-expect-error Server Component */}
   <ServerComponentName />
   ```
## Latest used version for this workshop session
> npm i next@13.3.5-canary.2 

## Workshop Session guide
- Fundamentals are found under `/app/users`
  - Explain issue with ClientComponent -> ServerComponent (infinite loop at the latest version)
  - Explain on older versions router.replace do trigger a hard reload of the page
- Static & Dynamic rendering
  - `/app/dashboard` - supposed to be dynamic but latest version is loading it statically
  - `/app/posts` - fetch examples to opt into static/dynamic render
  - `/app/albums` - searchParams examples to opt into static/dynamic render
  - `/app/home` and `/app/get-cookie`- cookies() Dynamic Function usage