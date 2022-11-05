# Chore Helper

This is a simple app to spit out chores at you, for when you have down time and want to do something useful with yourself!

Design Doc: https://docs.google.com/document/d/1LKRBs6MyPBE4YD5cktKAYCYhkTKjhbxQS84mu8PpKYs/edit?usp=sharing

# Getting Started

You will need to copy `.env-example` to `.env`

Probably need to do an `npm install`

I think `npx prisma db push` will build the DB for you, but who knows!?

You should be able to add and delete items now, so you shouldn't need to manually update the DB.

Then `npm run dev` should start the app.

# Create T3 App

This is an app bootstrapped according to the [init.tips](https://init.tips) stack, also known as the T3-Stack.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with the most basic configuration and then move on to more advanced configuration.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next-Auth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [TailwindCSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

We also [roll our own docs](https://beta.create.t3.gg) with some summary information and links to the respective documentation.

Also checkout these awesome tutorials on `create-t3-app`.

- [Build a Blog With the T3 Stack - tRPC, TypeScript, Next.js, Prisma & Zod](https://www.youtube.com/watch?v=syEWlxVFUrY)
- [Build a Live Chat Application with the T3 Stack - TypeScript, Tailwind, tRPC](https://www.youtube.com/watch?v=dXRRY37MPuk)
- [Build a full stack app with create-t3-app](https://www.nexxel.dev/blog/ct3a-guestbook)
- [A first look at create-t3-app](https://dev.to/ajcwebdev/a-first-look-at-create-t3-app-1i8f)

## How do I deploy this?

Follow our deployment guides for [Vercel](https://beta.create.t3.gg/en/deployment/vercel) and [Docker](https://beta.create.t3.gg/en/deployment/docker) for more information.
