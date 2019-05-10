chrome.runtime.onMessage.addListener(function(request, sender, callback) {
    Array.from(document.getElementsByClassName('css-4xipnm')).forEach((el) => {
        const className = 'font-size';
        if (el.classList) {
            el.classList.toggle(className);
        } else {
            var classes = el.className.split(' ');
            var existingIndex = classes.indexOf(className);

            if (existingIndex >= 0) classes.splice(existingIndex, 1);
            else classes.push(className);

            el.className = classes.join(' ');
        }
    });

    Array.from(document.getElementsByClassName('map-container')).forEach((el) => {
        const className = 'map-padding';
        if (el.classList) {
            el.classList.toggle(className);
        } else {
            var classes = el.className.split(' ');
            var existingIndex = classes.indexOf(className);

            if (existingIndex >= 0) classes.splice(existingIndex, 1);
            else classes.push(className);

            el.className = classes.join(' ');
        }
    });

    Array.from(document.querySelectorAll('.map-container > svg')).forEach((el) => {
        const className = 'svg-scale';
        if (el.classList) {
            el.classList.toggle(className);
        } else {
            var classes = el.className.split(' ');
            var existingIndex = classes.indexOf(className);

            if (existingIndex >= 0) classes.splice(existingIndex, 1);
            else classes.push(className);

            el.className = classes.join(' ');
        }
    });

    Array.from(document.querySelectorAll('.map-container foreignObject > *')).forEach((el) => {
        const className = 'foreignObject-to-all';
        if (el.classList) {
            el.classList.toggle(className);
        } else {
            var classes = el.className.split(' ');
            var existingIndex = classes.indexOf(className);

            if (existingIndex >= 0) classes.splice(existingIndex, 1);
            else classes.push(className);

            el.className = classes.join(' ');
        }
    });
});

console.log('hello - contnet');
