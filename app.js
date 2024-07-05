function detectViewportEntryExit(className) {
    const elements = document.getElementsByClassName(className);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log(`Element with class '${className}' entered the viewport`);
                entry.target.classList.add('in-view');

            } else {
                console.log(`Element with class '${className}' left the viewport`);
                entry.target.classList.remove('in-view');
            }
        });
    });

    Array.from(elements).forEach((element) => {
        observer.observe(element);
    });
}

detectViewportEntryExit('article');