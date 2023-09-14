function changeMode(size, weight, transform, background, color) {
    return function () {
      document.body.style.fontSize = `${size}px`;
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
    };
  }

  function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    const paragraph = document.createElement('p');
    paragraph.innerText = 'Welcome Holberton';
    document.body.appendChild(paragraph)

    const spookyButton = document.createElement('button');
    spookyButton.textContent('Spooky');
    spookyButton.addEventListener('click', spooky);
    document.body.appendChild(spookyButton);

    const darkModeButton = document.createElement('button');
    darkModeButton.textContent('Dark');
    darkModeButton.addEventListener('click', darkMode);
    document.body.appendChild(darkModeButton);

    const screamButton = document.createElement('button');
    screamButton.textContent('Scream Mode');
    dscreamButton.addEventListener('click', screamMode);
    document.body.appendChild(screamButton);

  }

  main();