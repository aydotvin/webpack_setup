## Tailwind Setup

- Install the following.\
  `npm install -D tailwindcss autoprefixer postcss-cli mini-css-extract-plugin postcss-loader postcss postcss-preset-env`

- Initialize the tailwind config file.\
  `npx tailwindcss init`

- In the tailwind config file, setup the path for all the source files.

  ```
  module.exports = {
  	content: ["./src/**/*.{js,jsx,ts,tsx}"],
  	theme: {
  		extend: {},
  	},
  	plugins: [],
  };

  ```

- Create and setup the `postcss.config.js`

  ```
  const tailwindcss = require("tailwindcss");
  module.exports = {
  	plugins: ["postcss-preset-env", tailwindcss],
  };
  ```

- Add `postcss-loader` under css rules in webpack.

- Create `index.css` and add the following in it,

  ```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

- Import the `index.css` in the `index.js` file.

---
