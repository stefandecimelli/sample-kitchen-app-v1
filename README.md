# App

This app uses a monorepo aproach for serving the api and ui in development mode, and also for building each component.

Rather than using a fullstack framework like Next.js, I am using Vite as the frontend dev server and bun to run the backend api server. This approach lets me develop in one terminal instance while also retaining hot reloading for the ui and api. In addition, Vite adds hot browser reloading and will automatically reload your frontend. Bun is chosen as the preferred JS runtime due to it's overall speed, native typescript support, and fun-factor. 

This would never be the best approach in most cases, but when deveoping enterprise apps in JavaScript/TypeScript I want to maxmize my development momentum. This does exactly that. 

## Development

Before you start, ensure you have bun installed. Go [here](https://bun.sh/docs/installation) to do so. 

To start, just clone this repo and run
```
bun i
```
And then to run the app run
```
bu nrun dev
```
So simple.
