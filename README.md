# pokeProgress

## Initial Setup
Before running the project, make sure to:
1. Install dependencies:
```bash
npm install
# or use pnpm or yarn
```

2. Initialize the SQLite database:
```bash
npx prisma migrate dev --name init
```

## Developing
Start a development server:
```bash
npm run dev
# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building
To create a production version of your app:
```bash
npm run build
```
You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
