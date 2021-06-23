let heading = document.querySelector('.heading');
let container = document.querySelector('.container');
let displayed = false;
heading.addEventListener('mouseenter', function () {
  if (!displayed) {
    let img = document.createElement('img');
    img.src =
      'https://thumbs.gfycat.com/FlawlessThirdCurlew-size_restricted.gif';
    img.style.width = '500px';
    let h1 = document.createElement('h1');
    h1.classList.add('nature');
    h1.innerText = 'Rick-Rolled';
    h1.style.fontFamily =
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;";
    container.appendChild(img);
    container.appendChild(h1);
    displayed = true;
  }
});
