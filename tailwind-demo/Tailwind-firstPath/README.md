# Tailwind css

# Rapidly build modern websites without ever leaving your HTML.
A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

# Play CDN 
https://cdn.tailwindcss.com

# Installation through Tailwind CLI
1. npx tailwindcss init

# Steps to set up tailwind css
1. Create the dist folder inside it create the index.html file 
2. Create the src folder inside it create the input.css
add these three line: 
@tailwind base;
@tailwind components;
@tailwind utilities;
after that if there is an error so in mac press command + , and type error "unknown rule" and ignore it. 
3. Run the command in terminal:  npx tailwindcss -i ./src/input
.css -o ./dist/style.css
4. npx tailwindcss -i ./src/input.css -o ./dist/style.css --watch 
5. In the tailwind.config.js type: /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}





