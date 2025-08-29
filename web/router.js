document.addEventListener('DOMContentLoaded', () => {
    const contentFrame = document.getElementById('content-frame');
    const navItems = document.querySelectorAll('.nav-item');

    const routes = {
        '/': 'dashboard.html',
        '/csvmerger': 'csvmerger.html',
        '/youtube-dl': 'coming-soon.html',
        '/wheel': 'coming-soon.html',
        '/tournament': 'coming-soon.html'
    };

    const handleRouteChange = () => {
        const path = window.location.hash.substring(1) || '/';
        const navItem = document.querySelector(`.nav-item[data-path='${path}']`);
        
        let targetPage;

        if (navItem && navItem.classList.contains('disabled')) {
            targetPage = routes['/youtube-dl']; // Hepsi için coming-soon.html
        } else {
            targetPage = routes[path] || '404.html';
        }

        if (contentFrame.src !== window.location.origin + '/' + targetPage) {
            contentFrame.src = targetPage;
        }

        navItems.forEach(item => {
            item.classList.toggle('active', item.getAttribute('data-path') === path);
        });
    };

    window.addEventListener('hashchange', handleRouteChange);
    handleRouteChange(); // Initial load
});
