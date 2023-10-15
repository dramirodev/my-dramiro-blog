// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "davidramiro.com";
export const SITE_DESCRIPTION = "David Ramiro, front-end developer with javascript, react, astro, css, html, and performance skills.";
export const TWITTER_HANDLE = "@dramirobarragan";
export const MY_NAME = "David Ramiro";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
