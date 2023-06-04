const li = document.querySelectorAll('li')
const logo = document.querySelector('nav img')
const logout = document.querySelector('.user-information')
const button = document.querySelector('button');
const aside = document.querySelector('aside');

button.addEventListener('click', toggleElements);

function toggleElements(){
  li.forEach(element => {
    const p = element.querySelector('p')
    p.classList.toggle('hidden')

    if (p.classList.contains('hidden')) {
      p.style.opacity = '0'
    } else {
      setTimeout(() => {
       p.style.opacity = '1'; // Defina a opacidade como 1 após um pequeno atraso para dar o efeito de transição
      }, 150);
    }
  
  })
  logo.classList.toggle('remove')

  logout.classList.toggle('remove')
  aside.classList.toggle('collapsed'); // Alternar a classe "collapsed" para recolher ou expandir o aside
}
