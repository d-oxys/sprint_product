/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        negative: "#E34343",
        whiteSecondary: "#FAFAFA",
        primary: "#387AFF",
        "primary-hover": "#2859BD",
        "primary-transparent": "rgba(56, 122, 255, 0.25)",
        secondary: "#1572A1",
        "secondary-hover": "rgba(21, 114, 161, 0.25)",
        "secondary-transparent": "rgba(21, 114, 161, 0.2)",
        "link-transparent": "rgba(21, 114, 161, 0.2)",
        success: "#01A037",
        "success-hover": "rgb(13, 129, 29)",
        "success-transparent": "rgb( 1, 184, 26, 0.082)",
        pink: "#f2eafb",
        "pink-transparent": "rgb(242, 234, 251, 0.082)",
        warning: "#FFA837",
        "warning-transparent": "rgba(250, 139, 12, 0.082)",
        danger: "#E34343",
        "danger-transparent": "rgb( 255, 15, 15, .082)",
        info: "#00AAFF",
        link: "#1890ff",
        "info-transparent": "rgba(0, 170, 255, 0.082)",
        dark: "#0A0A0A",
        "dark-transparent": "rgba(10, 10, 10, 0.082)",
        body: "#1E1E1E",
        "theme-gray": "#5C6880",
        "theme-grayDark": "rgb(255, 255, 255, .06)",
        "theme-gray-transparent": "rgba(64, 64, 64, 0.082)",
        light: "#747474",
        lightDark: "rgb(255, 255, 255, .06)",
        "light-extra": "#a0a0a0",
        "light-extraDark": "rgb(255, 255, 255, .06)",
        violet: "#47DEFF",
        section: "#f4f5f7",
        breadcrumbs: "#666D92",
        active: "#01A037",
        unactive: "#D5D5D5",
        "active-transparent": "rgb( 1, 184, 26, 0.082)",
        done: "#01A037",
        "done-transparent": "rgb( 1, 184, 26, 0.082)",
        deactivated: "#FFA837",
        "deactivated-transparent": "rgba(250, 139, 12, 0.082)",
        pending: "#FFA837",
        "pending-transparent": "rgba(250, 139, 12, 0.082)",
        blocked: "#E34343",
        "blocked-transparent": "rgba(255, 15, 15, 0.082)",
        early: "#47DEFF",
        late: "#FFA837",
        progress: "#ff4d4f",
        complete: "#01A037",
        "google-plus": "rgb(240, 101, 72)",
        "google-plus-transparent": "rgba(240, 101, 72, 0.063)",
        google: "rgb(241, 67, 54)",
        "google-transparent": "rgba(241, 67, 54, 0.063)",
        facebook: "rgb(58, 88, 155)",
        "facebook-transparent": "rgba(58, 88, 155, 0.063)",
        youtube: "#FF0000",
        twitter: "rgb(3, 169, 244)",
        "twitter-transparent": "rgba(3, 169, 244, 0.063)",
        github: "rgb(9, 14, 48)",
        "github-transparent": "rgba(3, 169, 244, 0.063)",
        linkedin: "rgb(0, 122, 185)",
        "linkedin-transparent": "rgba(0, 122, 185, 0.063)",
        instagram: "rgb(209, 32, 143)",
        dribbble: "#c2185b",
        medium: "#66cdaa",
        "instagram-transparent": "rgba(209, 32, 143, 0.063)",
        "shadow-transparent": "rgba(130, 49, 211, 0.02)",
        "hbr-primary": "#387AFF",
        "hbr-secondary": "#1572A1",
        "hbr-success": "#0D811D",
        "hbr-info": "#0787C7",
        "hbr-warning": "#D9790A",
        "hbr-danger": "#CB0000",
        "hbr-dark": "#272525",
        "hbr-gray": "#585858",
        "hbr-light": "#585858",
        "hbr-light-extra": "#585858",
        regular: "#F1F2F6",
        normal: "#E3E6EF",
        deep: "#C6D0DC",
        regularDark: "rgb(255, 255, 255, .06)",
        normalDark: "rgb(255, 255, 255, .06)",
        deepDark: "rgb(255, 255, 255, .06)",
        regularBG: "#F8F9FB",
        normalBG: "#F4F5F7",
        deepBG: "#EFF0F3",
        insideBG: "#efeffe",
        white: "#FAFAFA",
        regularBGdark: "rgb(255, 255, 255, .10)",
        normalBGdark: "rgb(255, 255, 255, .10)",
        deepBGdark: "rgb(255, 255, 255, .10)",
        whiteDark: "rgb(255, 255, 255, .10)",
        currentColor: "currentColor",
        white87: "rgb(255, 255, 255, .87)",
        white60: "rgb(255, 255, 255, .60)",
        white30: "rgb(255, 255, 255, .30)",
        white20: "rgb(255, 255, 255, .20)",
        white10: "rgb(255, 255, 255, .10)",
        white06: "rgb(255, 255, 255, .06)",
        positif: "#01A037",
      },
      boxShadow: {
        regular: "0 5px 20px rgba(160,160,160,0.05)",
        pricing: "0 5px 20px rgba(146,153,184,0.2)",
        action: "0 5px 20px rgba(64, 64, 64, 0.08)",
        box: "0 15px 25px rgba(146,153,184,0.2)",
        boxLarge: "0 10px 40px rgba(146,153,184,0.2)",
        custom: "0 15px 50px #9299b820",
        dot: "0 0 0 1px #fff",
        btn: "0 8px 13px rgba(56, 122, 255, 0.25)",
        faq: "0 15px 40px rgba(116, 116 ,116, 0.08)",
      },
      borderWidth: {
        1: "1px",
        5: "5px",
      },
      borderRadius: {
        4: "4px",
        6: "6px",
        10: "10px",
      },
      fontFamily: {
        Poppins: ["Jost", "sans-serif"],
      },
      fontSize: {
        10: ["10px", "14px"],
        11: ["11px", "15px"],
        13: ["13px", "18px"],
        15: ["15px", "24px"],
        17: ["17px", "26px"],
        22: ["22px", "30px"],
        42: ["42px", "62px"],
        58: ["58px", "86px"],
      },
      zIndex: {
        998: "998",
        99998: "99998",
      },
    },
    screens: {
      "4xl": { max: "1699px" },
      "3xl": { max: "1599px" },
      "2xl": { max: "1299px" },
      xl: { max: "1199px" },
      lg: { max: "991px" },
      md: { max: "767px" },
      sm: { max: "575px" },
      ssm: { max: "480px" },
      xs: { max: "380px" },
      xxs: { max: "320px" },
      "min-xxs": "320px",
      "min-xs": "380px",
      "min-ssm": "480px",
      "min-sm": "575px",
      "min-md": "768px",
      "min-lg": "991px",
      "min-xl": "1199px",
      "min-2xl": "1299px",
      "min-3xl": "1599px",
      "min-4xl": "1699px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
