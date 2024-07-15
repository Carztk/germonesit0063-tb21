document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.fa-bars');
    const menuList = document.querySelector('.menu-list');

    menuIcon.addEventListener('click', function () {
        if (menuList.style.display === 'none' || menuList.style.display === '') {
            menuList.style.display = 'flex';
        } else {
            menuList.style.display = 'none';
        }
    });
});

function toggleAnswer(id, answer) {
    const answerElement = document.getElementById(id);
    if (answerElement.style.display === "none" || answerElement.style.display === "") {
        answerElement.style.display = "block";
        answerElement.innerHTML = answer;
    } else {
        answerElement.style.display = "none";
    }
}
