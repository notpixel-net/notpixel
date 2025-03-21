// Скрипт для отображения контента через 5 секунд
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader')
    const content = document.getElementById('main')

    // Устанавливаем таймер на 5 секунд
    setTimeout(() => {
        loader.style.display = 'none' // Скрываем лоадер
        content.classList.remove('hidden') // Показываем контент
        document.body.style.overflow = '' // Включаем прокрутку
    }, 3000)
})