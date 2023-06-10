document.addEventListener('DOMContentLoaded', function() {
    var heart = document.querySelector('.heart');
    heart.addEventListener('click', function() {
        heart.classList.add('animated-heart');
        setTimeout(function() {
            heart.classList.remove('animated-heart');
        }, 1000);
    });
});
