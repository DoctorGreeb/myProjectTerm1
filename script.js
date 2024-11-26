

document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth - 0.5; // Нормализуем координату X
    const y = e.clientY / window.innerHeight - 0.5; // Нормализуем координату Y

    const background = document.querySelector('.background');
    background.style.transform = `translate(${x * 25}px, ${y * 25}px)`; // Перемещение фона в зависимости от курсора
});


document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth + 0.5; // Нормализуем координату X
    const y = e.clientY / window.innerHeight + 0.5; // Нормализуем координату Y

    const background = document.querySelector('.background2');
    background.style.transform = `translate(${x * -25}px, ${y * -25}px)`; // Перемещение фона в зависимости от курсора
});