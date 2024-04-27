// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

// JavaScript animation example
document.addEventListener("DOMContentLoaded", function () {
    var element = document.querySelector('iframe');
    element.addEventListener('mouseover', function () {
        element.style.transform = 'scale(1.1)';
    });
    element.addEventListener('mouseout', function () {
        element.style.transform = 'scale(1)';
    });
});