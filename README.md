# @koheimukai/react-responsive

> react hooks for designing responsive layout

[![NPM](https://img.shields.io/npm/v/@koheimukai/react-responsive.svg)](https://www.npmjs.com/package/@koheimukai/react-responsive) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @koheimukai/react-responsive
```

## Usage

```jsx
import React, { Component } from "react";

import {
  ResponsiveProvider,
  useResponsive,
} from "@koheimukai/react-responsive";

const Consumer = () => {
  const { xs, sm, md, lg, xl } = useResponsive();

  return xl ? (
    <h1>Desktop with extra large screen size</h1>
  ) : lg ? (
    <h1>Desktop with large screen size</h1>
  ) : md ? (
    <h1>Tablet or Desktop with medium screen size</h1>
  ) : sm ? (
    <h1>Mobile or tablet with small screen size</h1>
  ) : (
    <h1>Mobile with extra small screen size</h1>
  );
};

const App = () => {
  return (
    <ResponsiveProvider>
      <Consumer />
    </ResponsiveProvider>
  );
};
```

Default breakpoints (min-width):
* extra small: 0px
* small: 600px
* medium: 960px
* large: 1280px
* extra large: 1920px

useResponsive custom hook returns an object containing 5 boolean values: xs, sm, md, lg, and xl. 

xs always returns true.

You can use these boolean values to style HTML element.

```jsx
  <div data-sm={sm} />
  <div data-md={md} data-lg={lg} />
  <div data-xl={xl} />
```

```css
div[data-md="true"] {
  font-size: 24px;
}

div[data-lg="true"] {
  font-size: 32px;
}

div[data-lg="true"][data-xl="false"] {
  color: orange;
}
```

You can specify custom breakpoints (e.g. `<ResponsiveProvider customBreakpoints={{md: 900}}>`)


## License

MIT © [koheimukai](https://github.com/koheimukai)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
