window.onload = function () {
    const numOfSnowflakes = 100; // Number of snowflakes
    const isMobile = window.innerWidth <= 768; // Mobile screen check

    // Generate snowflakes
    for (let i = 0; i < numOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Random size and speed
        const size = Math.random() * 4 + 2 + 'px'; // Random size between 2px and 6px
        const animationDuration = Math.random() * 5 + 5 + 's'; // Random speed between 5s and 10s
        const delay = Math.random() * 5 + 's'; // Random delay to offset animations

        // Random horizontal movement (drift), from 0% to 100% of the screen width
        const xMovement = isMobile ? Math.random() * 250 + 'vw' : Math.random() * 100 + 'vw';

        // Set CSS custom properties dynamically
        snowflake.style.width = size;
        snowflake.style.height = size;
        snowflake.style.animationDuration = animationDuration;
        snowflake.style.animationDelay = delay;
        snowflake.style.setProperty('--x', xMovement);

        console.log('Adding snowflake:', snowflake); // Debug log

        // Append the snowflake to the body
        document.body.appendChild(snowflake);
    }
};