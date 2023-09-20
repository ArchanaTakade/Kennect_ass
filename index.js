

// const backendURL = 'http://localhost:3000';

document.getElementById('randomize-button').addEventListener('click', () => {
  const newSize = parseInt(prompt('Enter the size for the random array:'));
  if (!isNaN(newSize) && newSize > 0) {
    generateRandomArray(newSize);
  } else {
    alert('Please enter a valid size.');
  }
});

document.getElementById('apply-sort-button').addEventListener('click', () => {
   
  const sortingAlgorithm = document.getElementById('sorting-algorithm').value;
  applySorting(sortingAlgorithm);
});

document.getElementById('change-size-button').addEventListener('click', () => {
  const newSize = parseInt(prompt('Enter the new size for the bars:'));
  if (!isNaN(newSize) && newSize > 0) {
    generateRandomArray(newSize);
  } else {
    alert('Please enter a valid size.');
  }
});

async function generateRandomArray(size) {
  const response = await fetch(`${backendURL}/generate?size=${size}`);
  const data = await response.json();
  bars = data;
  renderBars();
}

async function applySorting(sortingAlgorithm) {
  const response = await fetch(`${backendURL}/sort`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ algorithm: sortingAlgorithm })
  });
  const data = await response.json();
  bars = data;
  renderBars();
}


