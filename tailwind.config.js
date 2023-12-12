E/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["lien vers les contents"],
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                lightRed: "#FD9089",
                white: "#f7f6CF",
                lightGreen2: "#DBF9E7",
                lightPink: "#F4CFDF",
                lightBlue:"#B6D8F2",
                darkGrey: "#CCB1AB",
                lightGreen:"#E1FEC5",
                ligtPurple:"#E3BDFF",
                purple:"#C1ADFF",
                primary: "#000000",
                secondary: "#FFFFFF",
            },
            fontSize: {
                h1: "56px",
                h2: "48px",
                h3: "40px",
                h4: "32px",
                h5: "24px",
                h6: "18px",
                base: "16px",
                xs: "11px",
            },
            fontFamily: {
                title: ["Barlow", "sans-serif"],
                text: ["Roboto", "sans-serif"],
            },
            backgroundImage: {
                "top-banner": "url('lien vers top banner.png')",
            },
        },
    },
    plugins: [],
};
