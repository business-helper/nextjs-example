module.exports = {
  theme: {
    extend: {
      borderColor: {
        'dd-0': '#4DAAFF',
        'dd-1': '#ED4141'
      },
      borderWidth: {
        '3': '3px',
      },
      colors: {
        LIGHT: {
          authBtn: "#405EF9",
          logo: '#212121',
          default: "#323232",
          black1: "#2C2C2C",
          blackLight: "#464646",
          blackLight1: "#505050",
          blue: "#1971C1",
          blue01: '#3158E3',
          blue1: "#405EF9",
          blue2: '#516AF0',
          blue3: '#0029ff',
          gray: '#747474',
          gray1: '#676767',
          gray2: '#8D8D8D',
          gray3: '#999999',
          gray4: '#A0A0A0',
          green: '#019C07',
          green1: '#02c10a',
          green2: '#11D600',
          red: '#E40000',
          red1: '#f00',
        },
      },
      fontSize: {
        '1d2': '1.2rem',
        '1d3': '1.3rem',
        '1d4': '1.4rem',
        '1d6e': '1.6rem',
        '1d6': '1.675rem',
        '1d7': '1.7rem',
        '2d4': '2.4rem',
        '3d3': '3.3rem',
        '3d5': '3.5rem',
        '3d75': '3.75rem',
        '4d5': '4.5rem',
        '7xl': '5rem',
        '6rem': '6rem',
        '8xl': '7rem',
      },
      lineHeight: { 
        'tighter': "1.1",
      },
      maxWidth: {
        '1/2': '50%',
        '400px': '400px',
        '992': '992px',
        '1024': '1024px',
        '1136': '1136px',
      },
      spacing: {
        '300px': '300px',
      }
    },
    colors: {
      bg: '#14151e',
      bgSecondary: '#26262e',
      black: {
        default: '#000',
        '100': '#333',
      },
      blue: '#41b9ed',
      mediumBlue: '#1971C1',
      darkBlue: '#0066FF',
      darkerBlue: '#025ce3',
      danger: '#FF0000',
      darkGreen: '#25C85A',
      green: {
        default: '#52d25f',
        light: '#6FED7B',
        dark: '#4dc75a',
        darker: '#48af52',
        alert: '#3eb55e',
        tradebox: '#6FED7B',
        tradeboxHover: '#4dd15a',
      },
      grey: {
        default: '#ACACAC',
        mid: '#4F4F58',
        light: '#d1d1d1',
        lighter: '#D8D8D8',
        lighter2: '#E8E8E8',
        newhome: '#7B7B7B',
      },
      lightGrey: '#d1d1d1',
      lighterGrey: '#D8D8D8',
      midGrey: '#4F4F58',
      indigo: {
        default: '#1971C1',
        light: '#1b84e3',
        tradebox: '#41B9ED',
        tradeboxHover: '#2399cc'
      },
      invalid: '#FF3C3C',
      red: {
        default: '#fb4444',
        dark: '#ED4141',
        light: '#ff0000',
        alert: '#f76363',
        tradebox: '#F57575',
        tradeboxHover: '#eb5757',
      },
      white: '#ffffff',
      yellow: '#ffe117',
      cookie: {
        bk: '#655863',
        moreInfo: '#C9B33B',
        moreHover: '#e8ce41',
        bkBtn: '#F1D849',
      },
    },
    borderColor: theme => ({
      ...theme('colors'),
      green: {
        light: '#6FED7B',
      }
    }),
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      default: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      '50p': '50%'
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      '200': '200px',
      '150': '150px',
      '300': '300px',
    },
    zIndex: {
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
      'auto': 'auto',
    }
  },
  variants: {},
  plugins: []
}
