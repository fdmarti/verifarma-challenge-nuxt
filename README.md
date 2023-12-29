# Nuxt 3 Verifarme Challenge


## Setup

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

First of all, you have to create an account on the link below, this will be helpful for the API call to get the movies.

[OMDBapi](https://www.omdbapi.com/)

`NUXT_API_MOVIES_URL=http://www.omdbapi.com/?apikey=${yourApiKey}&`


Then need to create an account in [Supabase](https://supabase.com/) and create a new organization. After that, you will have to add the following environment variables so the login can work 

`SUPABASE_URL=`

`SUPABASE_KEY=`


Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Demo

[Here](https://verifarmamovieschallenge.netlify.app) is the demo.
You could try with the following credentials:

email : `test@test.com`

password : `abc123`

Or you could create a new user but be careful! You must use a real email because it has a confirmation email for login!