const debounceOptimized = function (fn, delay) {
  let timer = null;
  return function (value) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(value);
    }, delay);
  };
};
function stringToColor(string = "") {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

function stringAvatar(name = "") {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: name
      .split(" ")
      .map((n) => n.charAt(0).toUpperCase())
      .join(""),
  };
}

export { debounceOptimized, stringToColor, stringAvatar };
