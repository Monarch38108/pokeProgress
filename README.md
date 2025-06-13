# pokeProgress🏆🎮

A web app designed for Pokémon enthusiasts who strive for 100% completion! Whether you're doing a full Pokédex run, a Professor Oak Challenge, or just want to track your progress across multiple games, this tool helps you stay organized.
Features (Planned)

    📊 Track your progress across all Pokémon games

    🏅 Support for 100% completion runs and special challenges

    🔄 Sync data across devices

    🎨 Clean and intuitive UI for easy tracking

Stay tuned for updates! 🚀

## Initial Setup

Before running the project, make sure to:

1. Install dependencies:

```bash
npm install
# or use pnpm or yarn
```

2. Create the .env File

You have to copy the .env.example file and rename it to ".env". 
After you created the file, you have to specify the database path. 
If you plan on using a sqlite database, the path can stay the same.

3. Initialize the SQLite database:

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
