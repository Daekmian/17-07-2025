const container = document.getElementById('corazones-container');

function crearCorazon() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '❤️';

  // Posición aleatoria en el ancho de la pantalla
  heart.style.left = Math.random() * window.innerWidth + 'px';
  // Tamaño aleatorio
  heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
  // Duración aleatoria para la animación
  heart.style.animationDuration = (Math.random() * 3 + 3) + 's';

  container.appendChild(heart);

  // Eliminar el corazón después de que termine la animación
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Crear corazones cada cierto tiempo
setInterval(crearCorazon, 300);
