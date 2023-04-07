/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Montserrat: "Montserrat",
                Quicksand: "Quicksand",
            },
        },
    },
    plugins: [],
};
