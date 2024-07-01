document.getElementById('flexContainer').style.alignItems = 'flex-start'
document.getElementById('flexContainer').style.justifyContent = 'flex-start'

function resetFlexbox() {
    document.getElementById('flexContainer').style.flexDirection = 'row';
    document.getElementById('flexContainer').style.justifyContent = 'flex-start';
    document.getElementById('flexContainer').style.alignItems = 'flex-start';
    document.getElementById('flexContainer').style.gap = '0px';
    resetFlexGrow();
}


function updateGap() {
    const gap = document.getElementById('gap').value;
    document.getElementById('flexContainer').style.gap = gap + 'px';
}


function setFlexDirection(direction) {
    document.getElementById('flexContainer').style.flexDirection = direction;
}


function setJustifyContent(justify) {
    document.getElementById('flexContainer').style.justifyContent = justify;
}


function setAlignItems(align) {
    document.getElementById('flexContainer').style.alignItems = align;
}


function resetFlexGrow() {
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`item${i}`).style.flexGrow = '0';
        document.getElementById(`grow${i}`).value = '0';
    }
}


function setFlexGrow(box, grow) {
    document.getElementById(`item${box}`).style.flexGrow = grow;
    document.getElementById(`grow${box}`).value = grow;
}


function updateFlexGrow(box) {
    const grow = document.getElementById(`grow${box}`).value;
    document.getElementById(`item${box}`).style.flexGrow = grow;
}
