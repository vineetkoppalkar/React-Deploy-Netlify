## How to deploy a React project to Netlify?

1. Run `npm run build` to build your react project
2. In the `build` folder, create a `_redirects` file containing `/* /index.html 200`. This will fix redirecting issues with react router dom
3. Visit https://app.netlify.com/drop
4. Drag and drop `build` folder

