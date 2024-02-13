module.exports = {
  content: ["./dist/**/*.html", "./src/**/*.{js,jsx,ts,tsx}", "./*.html"],
  theme: {
    variants: {
      outline: ["focus"],
      opacity: ["disabled"],
      cursor: ["disabled"],
    },

   
    screens: {},
    extend: {
      
      colors: {
        'smc-blue': '#1369A2',
      },
      backgroundImage: {
        'answer-drawer': "url('assets/generic/answer_drawer/curveBackground.png')",
      },
      fontFamily: {
        'paytone': ['"Paytone One"','ui-sans-serif', 'system-ui'],
        'cabinet-grotesk': ['"Cabinet Grotesk"','ui-sans-serif', 'system-ui']
      },
      rotate: {
        'bubble-text': '1.65deg',
      }
    },
  },
};
