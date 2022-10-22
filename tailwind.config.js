/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			colors: {
				darkBlue: "hsl(234, 12%, 34%)",
				grayBlue: "hsl(229, 6%, 66%)",
				lightGray: "hsl(0, 0%, 98%)",
				paragraphGray: "hsl(0, 0%, 96%)",
			},
			fontFamily: {
				Poppins: "Poppins",
			},
			boxShadow: {
				"3xl": "-1px 12px 17px -4px rgba(50,98,176,0.23)",
				"3xl": "-1px 12px 17px -4px rgba(50,98,176,0.23)",
			},
		},
	},
	plugins: [],
};
