# PRADA RAge UI Kit

<div style="text-align:center;">

<table style="border:1px solid #ccc; border-collapse: collapse; width:100%;">
  <tr>
    <td style="padding:10px; border:1px solid #ccc; text-align:center;">
      <a href="https://dream-aim-deliver.github.io/dad-ui-components-starter-template/">
        <img src="https://bischrob.github.io/images/githubpages/githubpages.jpeg" alt="Github Pages" width="100px" style="border-radius: 10px;">
      </a>
    </td>
    <td style="padding:10px; border:1px solid #ccc; text-align:center;">
      <a href="https://dream-aim-deliver.github.io/dad-ui-components-starter-template/storybook">
        <img src="https://storybook.js.org/images/logos/icon-storybook.png" alt="Storybook" width="100px" style="border-radius: 10px;">
      </a>
    </td>
    <td style="padding:10px; border:1px solid #ccc; text-align:center;">
      <a href="https://dream-aim-deliver.github.io/dad-ui-components-starter-template/docs">
        <img src="https://user-images.githubusercontent.com/21266147/101224549-386fb400-368f-11eb-8390-6db2ecd1fe61.png" alt="Docs" height="100px" style="border-radius: 10px;">
      </a>
    </td>
    <td style="padding:10px; border:1px solid #ccc; text-align:center;">
      <a href="https://dream-aim-deliver.github.io/dad-ui-components-starter-template/coverage">
        <img src="https://vitest.dev/logo.svg" alt="Coverage" width="100px" height="100px" style="border-radius: 10px;">
      </a>
    </td>
  </tr>
</table>
</div>

## Usage
The component library built with this template can be used in any project that supports TailwindCSS. After publishing your component library to NPM, you can install it in your project by running:

```
npm install @maany_shr/rage-ui-kit
```

You should then configure the `tailwind.config.js` file in your project to include the styles from the component library.

First, import the tailwind config exported from the component library:

```js
import { defaultTheme } from "@maany_shr/rage-ui-kit";
```

Then, include the theme in your project's `tailwind.config.js` file:

```js
export default {
  theme: {
    ...defaultTheme,
    extend: {
    },
  },
  plugins: [],
};
```

Additionally, modify the `content` array in the Tailwind Config to include the components from the component library:

```js
export default {
  content: [
    "node_modules/@maany_shr/rage-ui-kit/dist/**/*.js",
    ...other sources
  ],
  theme: {
    ...defaultTheme,
    extend: {
    },
  },
}
```


Then you can import and use the components in your project:

```tsx
import { Button } from '@maany_shr/rage-ui-kit';
```