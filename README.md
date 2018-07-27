# Elements

Prototyping kit.

Easily style html elements with values from your design system.
Harness the power of react and css-in-js while writing semantic Html.

Made with:

- Create-react-app 
- Styled-System 
- Glamorous

## Getting started

```
git clone git@github.com:mrmrs/elements.git
```

```
npm i && npm start
```

### Component example

#### H1.js

```js
import glamorous from 'glamorous'
import { space, width, fontSize, color } from 'styled-system'

const H1 = glamorous.h1(space,  width, fontSize, color, {
  lineHeight: 1.25,
})

H1.defaultProps = {
  fontSize: [3,4,5]
}

export default H1
```

Reference the component in your jsx like so
```jsx
<H1 fontSize={[ 2,3,5 ]}>First heading</H1>
```
