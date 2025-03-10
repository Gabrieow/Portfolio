export function typeEffect(elementId, funFacts) {

    let currentFact = 0;
    let charIndex = 0;
    let isDeleting = false;
    const element = document.getElementById(elementId);

    function typing() {

        let currentText = funFacts[currentFact];

        if (isDeleting) {
            element.innerHTML = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.innerHTML = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typingSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentFact = (currentFact + 1) % funFacts.length;
        }

        setTimeout(typing, typingSpeed);
    }

    typing();

}
