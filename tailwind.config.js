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
        'social-x': "url('assets/generic/icons_social/social_twitter.svg')",
        'social-instagram': "url('assets/generic/icons_social/social_instagram.svg')",
        'audio-muted': "url('assets/generic/icons_sound/sound_off_white.svg')",
        'audio-unmuted': "url('assets/generic/icons_sound/sound_on_white.svg')",

      },
      fontFamily: {
        'paytone': ['"Paytone One"','ui-sans-serif', 'system-ui'],
        'cabinet-grotesk': ['CabinetGrotesk-Variable','ui-sans-serif', 'system-ui'],
        'cabinet-grotesk-bold': ['CabinetGrotesk-Bold','ui-sans-serif', 'system-ui']

      },
      rotate: {
        'bubble-text': '1.65deg',
      }
    },
  },
};
