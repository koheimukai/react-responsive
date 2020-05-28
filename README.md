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

## Default breakpoints

Each breakpoint (a key) matches with a fixed screen width (a value):

- xs, extra-small: 0px
- sm, small: 600px
- md, medium: 960px
- lg, large: 1280px
- xl, extra-large: 1920px

These breakpoint values are used to determine breakpoint ranges. A range starts from the breakpoint value inclusive, to the next breakpoint value exclusive:

These values can be customized.

## Custom breakpoints

You define your project's breakpoints by passing in `customBreakpoints` props to `ResponsiveProvider` component.

### Example

```jsx
const breakpoints = { md: 900, xl: 1400 };

function App() {
  return (
    <ResponsiveProvider customBreakpoints={breakpoints}>
      <Conosumer />
    </ResposiveProvider>
  );
}
```

## Returned values

useResponsive custom hook returns an object containing 5 boolean values: xs, sm, md, lg, and xl.

You can use these boolean values to style HTML element.

### JSX

```jsx
  <div data-sm={sm} />
  <div data-md={md} data-lg={lg} />
  <div data-xl={xl} />
```

### CSS

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

## License

MIT © [koheimukai](https://github.com/koheimukai)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
