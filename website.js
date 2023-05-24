const triggers = document.querySelectorAll('.highlight-item');
const highlight = document.createElement('span');
highlight.classList.add('highlight-hover');
document.body.append(highlight);

function highlightLink() {
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    // const coords = {
    //     with: linkCoords.width,
    //     height: linkCoords.height,
    //     top: linkCoords.top + window.scrollY,
    //     left: linkCoords.left + window.scrollX
    // }
    highlight.style.width = `${linkCoords.width}px`;
    highlight.style.height = `${linkCoords.height}px`;
    highlight.style.transform = `translate(${linkCoords.left}px, ${linkCoords.top}px)`;
}

triggers.forEach(function(a) {
    a.addEventListener('mouseenter', highlightLink)
});
