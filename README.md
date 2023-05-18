# NextJS 13 Workshop

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

## Introduction to Typescript

### Official Typescript courses - FREE
- [Microsoft official course](https://learn.microsoft.com/es-es/training/paths/build-javascript-applications-typescript/)

### Add some VCode extensions if you like 
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- [Pretty Typescript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)

### Notes

- [Ts Cheatsheets](https://www.typescriptlang.org/cheatsheets)
- 

## Using Prisma with SQLite 
- npx prisma init --datasource-provider sqlite
- Create User and Todo models
- npx prisma migrate dev --name initialize
More Info on [Prisma documentation](https://www.prisma.io/docs/concepts/database-connectors/sqlite)

## Workshop 4th Session guide
- Fundamentals are found under `/app/users`
  - Explain issue with ClientComponent -> ServerComponent (infinite loop at the latest version)
  - Explain on older versions router.replace do trigger a hard reload of the page
- Static & Dynamic rendering
  - `/app/dashboard` - supposed to be dynamic but latest version is loading it statically
  - `/app/posts` - fetch examples to opt into static/dynamic render
  - `/app/albums` - searchParams examples to opt into static/dynamic render
  - `/app/home` and `/app/get-cookie`- cookies() Dynamic Function usage

## Workshop 5th Session guide
- Data Fetching types
  - `/member-profile/1/parallel` - Parallel data fetching
    - `/member-profile/1/parallel-with-suspense` -  
  - `/member-profile/1/sequential` -  Sequential data fetching
- Caching
  - `/member-profile/1/cache-per-request` -  caching per request and preload pattern with cache()
- Revalidating
  - LatestUpdateDate from root layout
- Alpha Actions
  - `/users?user=1` - Through components
  - `/` Explain how, in example, we would setup a cookie and get it on an Client Component

## Workshop 6th Session guide
- Route Segment Options for SSR
  - dynamic
  - dynamicParams
  - revalidate
  - fetchCache
- SSG
  - `/static-posts` - SSG Example
- Typescript is it you?
  - React Component Example - events
  - Utility Example - unknown
  - Utility Example - Generics
  - 
## Workshop 7th Session guide
- Config-based Metadata
  - `app/posts` as static metadata example
  - `app/posts/[id]` as dynamic metadata example
- not found example under posts/id
  - `app/posts/2` 
- redirect example under posts/id
  - `app/posts/3` 
- useParams, usePathname, useSearchparams and WebVitals example under posts/id
  - `app/posts/[id]/page.tsx` 
  - `app/posts/[id]/layout.tsx` 
- useParams, usePathname and WebVitals example under posts/id
  - `app/posts/[id]/page.tsx` 
  - `app/posts/[id]/layout.tsx` 
- useSelectedLayoutSegment, useSelectedLayoutSegments example under Root Layout
  - `app/layout.tsx` 

## Workshop 8th Session guide
- Global CSS
  - `app/layout` containing the global one
  - `app/custom-css/page.tsx` containing custom css
- CSS Modules
  - `app/css-modules/page.tsx` 
    - merge between css modules and tailwindcss
- Tailwind CSS
  - `app/css-modules/page.tsx` 
- Sass Module
  - `app/sass-module/page.tsx` 