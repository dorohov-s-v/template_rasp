let themeSelector = document.querySelector('.theme-selector');

window.addEventListener('DOMContentLoaded', function() {
    [].forEach.call(document.querySelectorAll('td'), function(item) {
        item.onmouseover = ('');
        item.onmouseout = ('');
    });
});
    const sidebar = document.getElementById('sidebar');
    const openSidebarButton = document.getElementById('open-sidebar');
    openSidebarButton.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('-translate-x-full');
    });

    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !openSidebarButton.contains(e.target)) {
            sidebar.classList.add('-translate-x-full');
        }
    });

window.addEventListener('load', () => {
    if (!localStorage.hasOwnProperty('theme')) {
        localStorage.theme = 'system';
    }
    switch(localStorage.theme) {
        case 'system':
            if (window.matchMedia('(prefers-color-scheme: dark').matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            document.documentElement.setAttribute('color-theme', 'system');
            break;
        case 'dark':
            document.documentElement.classList.add('dark');
            document.documentElement.setAttribute('color-theme', 'dark');
            break;
        case 'light':
            document.documentElement.classList.remove('dark');
            document.documentElement.setAttribute('color-theme', 'light');
            break;
    }
})
function toDarkMode(){
    localStorage.theme = 'dark';
    window.updateTheme();
}
function toLightMode(){
    localStorage.theme = 'light';
    window.updateTheme();
}
function toSystemMode(){
    localStorage.theme = 'system';
    window.updateTheme();
}
function animation() {
    themeSelector.classList.add('anim');
    setTimeout(function(){
        themeSelector.classList.remove('pre-animation');
        location.reload();
    },200)

}
function updateTheme() {
   if (!localStorage.hasOwnProperty('theme')) {
        localStorage.theme = 'system';
    }
   animation();

}