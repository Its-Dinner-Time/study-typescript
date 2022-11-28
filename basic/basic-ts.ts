const button = document.querySelector('#add-btn')! as HTMLButtonElement;
const input1 = document.querySelector('#num1')! as HTMLInputElement;
const input2 = document.querySelector('#num2')! as HTMLInputElement;

const add = (num1: number, num2: number) => num1 + num2;

button.addEventListener('click', () => {
  console.log(add(Number(input1.value), Number(input2.value)));
});
