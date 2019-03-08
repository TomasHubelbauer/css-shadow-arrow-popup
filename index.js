window.addEventListener('load', _event => {
  const arrowSizeInput = document.querySelector('#arrowSizeInput');
  document.body.style.setProperty('--arrow-size', arrowSizeInput.valueAsNumber + 'px');
  arrowSizeInput.addEventListener('input', event => {
    document.body.style.setProperty('--arrow-size', event.currentTarget.valueAsNumber + 'px');
  });

  const backgroundColorInput = document.querySelector('#backgroundColorInput');
  document.body.style.setProperty('--background-color', backgroundColorInput.value);
  backgroundColorInput.addEventListener('input', event => {
    document.body.style.setProperty('--background-color', event.currentTarget.value);
  });

  const borderThicknessInput = document.querySelector('#borderThicknessInput');
  document.body.style.setProperty('--border-thickness', borderThicknessInput.valueAsNumber + 'px');
  borderThicknessInput.addEventListener('input', event => {
    document.body.style.setProperty('--border-thickness', event.currentTarget.valueAsNumber + 'px');
  });

  const borderColorInput = document.querySelector('#borderColorInput');
  document.body.style.setProperty('--border-color', borderColorInput.value);
  borderColorInput.addEventListener('input', event => {
    document.body.style.setProperty('--border-color', event.currentTarget.value);
  });
});
