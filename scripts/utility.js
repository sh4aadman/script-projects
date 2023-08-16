function cursorPointer(elementId) {
    const element = document.getElementById(elementId);
    element.addEventListener('mouseenter', function () {
        element.classList.add('cursor-pointer');
    })
}