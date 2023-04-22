const debounceOptimized = function (fn, delay) {
  let timer = null;
  return function (value) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(value);
    }, delay);
  };
};
export { debounceOptimized };
