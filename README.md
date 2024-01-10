# Astro email maker

Create static email templates using the power of [Astro](https://astro.build/).

## File structure

**pages**

Each email template is treated as a route and placed in `src/pages` directory. (checkout `src/pages/emailer-one.astro`)

**components**

Resuable components are placed (not mandatory) in `src/components` directory. (checkout `src/components/H1.astro`)

**layouts**

Resuable layouts are placed (not mandatory) in `src/layouts` directory. (checkout `src/layouts/DefaultLayout.astro`)

**public/email**

Images are placed in `public/email` directory

## Helper functions

**createStyles**

Promised a fully type checked function to pass inline css.

It can be ustilised like the following

```jsx
<H1
  style={createStyles({
    color: 'red',
  })}
>
  This is an email template
</H1>
```

## Configurations

The project can be configured accordingly using `.env` file. copy `.env.example` as `.env`

**EMAIL_FILE_EXTENSION**

Set the email template file extenstion. By default it's `html`

**COMPRESS_HTML**

Enable/disble Html compression. By default it's `FALSE`, set `TRUE` to enable compression.

**VITE_DYNAMIC_LOCAL_PATH**

dynamic local path adreesing public email `public/email/` folder. it's left blank by default

## How this project came to be?

I was using a custom static email builder based on react which hacked react server components rendere to generate html file. It was fine but with astro I was able to replicate the functionality with minimal changes. Astro support features like file based routing, in-line styles, a vite based build system and at the end generates a clean html code.
