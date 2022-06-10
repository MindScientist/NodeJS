ready = () => {
  const button = document.getElementById('alert');
  button.addEventListener('click', event => {
    alert ('HELLO!')
  });
}
document.addEventListener("DOMContentLoaded", ready);