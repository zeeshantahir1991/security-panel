export function colorWithOpacity(color = '', opacity = 1) {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (color.length === 4) {
    r = "0x" + color[1] + color[1];
    g = "0x" + color[2] + color[2];
    b = "0x" + color[3] + color[3];

    // 6 digits
  } else if (color.length === 7) {
    r = "0x" + color[1] + color[2];
    g = "0x" + color[3] + color[4];
    b = "0x" + color[5] + color[6];
  }

  return "rgba(" + +r + "," + +g + "," + +b + "," + opacity + ")";
}

export const AppColors = {
  //Purple
  jacksonsPurple: "#292496",

  //Red
  radicalRed: '#FF3C69',
  flamingo: '#EF4545',
  burntSienna: '#EF6363',

  //White
  white: '#FFFFFF',

  //gray
  gray: '#888888',
  gray1: '#8B8B8B',
  gallery: '#F6F4F4',
  gray94: '#f0f0f0',
  doveGray: '#707070',
  alabaster: '#F8F8F8',
  emperor: '#555555',
  alto: '#DDDDDD',
  alabaster1: '#FAFAFA',
  alabaster2: '#F7F7F7',
  gray2: '#444444',
  gallery1: "#EEEEEE",

  //black
  mineShaft: '#222222',
  black: '#000000',

  //blue
  indigo: '#3f51b5',
  skyBlue: '#75CFEB',
  mariner: '#1F60D9',
  twilightBlue: '#F2FCFF',
  cerulean: '#00A5DC',
  cornFlowerBlue: '#60b0f4',
  pictonBlue: '#37A5E1',
  tropicalBlue: '#E6F3FA',
  newGrey: '#7C9DBC',

  //silver
  silverChalice: '#AAAAAA',

  //green
  sulu: '#AEEF63',
  conifer: '#A6D34E',


  martini: '#b4a19d',

  //Yello
  brightSun: "#F7DE42",

  //Orange
  orange: '#FFA500'
}