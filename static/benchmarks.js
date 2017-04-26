
let totalTime = 0;

function createIframe(times) {
  let iframe = document.createElement('iframe');
  iframe.id = `iframe_${times}`;
  document.body.appendChild(iframe);

  iframe.onload = function() {
    console.log(parseInt((iframe.contentWindow.chrome.loadTimes().firstPaintTime - iframe.contentWindow.chrome.loadTimes().startLoadTime) * 1000, 10));
    totalTime += parseInt((iframe.contentWindow.chrome.loadTimes().firstPaintTime - iframe.contentWindow.chrome.loadTimes().startLoadTime) * 1000, 10);

    document.body.removeChild(iframe);
    if (!times) {
      console.log('done');
    } else {
      setTimeout(() => createIframe(times - 1), 0);
    }
  };

  iframe.src = '/';
}

createIframe(5);
console.log('Average time to first paint: ', totalTime / 5);