export default function throttle(callback, wait, immediate = false) {
    let timeout = null;
    let initialCall = true;
    
    return function() {
      const callNow = immediate && initialCall;
      function next(thisSelf) {
        callback.apply(thisSelf, arguments);
        timeout = null;
      }
      if (callNow) { 
        initialCall = false;
        next(this);
      }
      if (!timeout) {
        timeout = setTimeout(next, wait);
      }
    }
  }