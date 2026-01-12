const inputs = document.querySelectorAll<HTMLInputElement>('.form');
const button = document.querySelector<HTMLButtonElement>('#crack-btn');
const resultDisplay = document.querySelector<HTMLSpanElement>('#result');

interface PagePair {
  position: number;
  digit: string;
}

const decryptCode = () => {
  const pairs: PagePair[] = [];

  inputs.forEach((input) => {
    const val = input.value.trim();
    if (val.length >= 2) {
      pairs.push({
        position: parseInt(val[0]),
        digit: val[1] // Second number is code digit
      });
    }
  });

  pairs.sort((a, b) => a.position - b.position);

  const finalCode = pairs.map(p => p.digit).join('');

  if (resultDisplay) {
    resultDisplay.innerText = finalCode || "Invalid Input";
  }
};

button?.addEventListener('click', decryptCode);