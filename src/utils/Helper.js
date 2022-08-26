export const checkPassword = str => {
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(str);
};

export const isEmpty = text => {
  return !(text.toString().trim().length > 0 && text.toString().trim() !== '0');
};

export const isOnlyEmpty = text => {
  return !(text.toString().trim().length > 0);
};

export function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(mail)) {
    return true;
  }
  return false;
}

export function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color + "65";
}
