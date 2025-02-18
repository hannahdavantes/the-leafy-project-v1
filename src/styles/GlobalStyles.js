import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 :root {
  --color-white: #ffffff;
  --color-off-white-1: #dad7cd;
  --color-off-white-2: #faedca;

  --color-black: #000000;
  --color-brown-black-1: #222222;
  --color-brown-black-2: #12100e;

  --color-gray-1: #f3f4f6;
  --color-gray-2: #e5e7eb;
  --color-gray-3: #d1d5db;
  --color-gray-4: #9ca3af;
  --color-gray-5: #6b7280;
  --color-gray-6: #4b5563;
  --color-gray-7: #374151;
  --color-gray-8: #1f2937;
  --color-gray-9: #111827;

  --color-primary-1: #cfe1b9;
  --color-primary-2: #b4cf92;
  --color-primary-3: #7ebc89;
  --color-primary-4: #5bba6f;
  --color-primary-5: #2d6a4f;
  --color-primary-6: #3f6634;
  --color-primary-7: #006400;
  --color-primary-8: #1a4301;
  --color-primary-9: #054a29;
  --color-primary-10: #073b3a;

  --color-secondary-1: #e7cb8a;
  --color-secondary-2: #f9c74f;
  --color-secondary-3: #f7c01b;

  --color-tertiary-1: #f2c078;
  --color-tertiary-2: #fcac5d;
  --color-tertiary-3: #f3722c;
  --color-tertiary-4: #e36414;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Roboto Mono", serif;
  color: var(--color-brown-black-1);
  background-color: var(--color-off-white-1);
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-gray-2);
  color: var(--color-gray-5);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-primary-7);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Arvo", serif;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}


`;

export default GlobalStyles;
