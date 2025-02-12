document.addEventListener('DOMContentLoaded', () => {
    console.log("Script loaded!"); // Debugging check

    const envelope = document.getElementById('envelope');
    const mailText = document.getElementById('mailText'); // Select the "You got mail" text
    const letter = document.getElementById('letter');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const resetBtn = document.getElementById('resetBtn');

    // Debugging: Check if elements exist
    if (!envelope || !letter || !yesBtn || !noBtn || !resetBtn || !mailText) {
        console.error("One or more elements not found!");
        return;
    }

    // Hide buttons and letter initially
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    letter.style.display = 'none';
    resetBtn.style.display = 'none';

    // Step 1: Open envelope and show letter
    envelope.addEventListener('click', () => {
        console.log("Envelope clicked! Showing letter...");
        envelope.style.display = 'none'; // Hide the envelope
        mailText.style.display = 'none'; // Hide "You got mail" text
        letter.style.display = 'block'; // Show the letter
        letter.classList.add('show'); // Ensure it's fully visible
        yesBtn.style.display = 'inline-block'; // Show Yes button
        noBtn.style.display = 'inline-block'; // Show No button
    });

    // Step 2: Confetti effect and hide letter when "Yes" is clicked
    yesBtn.addEventListener('click', () => {
        console.log("Yes button clicked! Confetti triggered!");

        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.animationDelay = `${Math.random() * 2}s`;
            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 2000);
        }

        // Step 1: Fade out the letter
        setTimeout(() => {
            letter.classList.add('fade-out'); // Apply fade-out effect
        }, 500); // Small delay before fading out

        // Step 2: Fully remove letter from view before showing prize
        setTimeout(() => {
            letter.style.display = 'none'; // Completely remove it
            letter.style.visibility = 'hidden'; // Extra security to hide it
            console.log("Letter is now fully hidden.");

            // Step 3: Show prize message
            const prizeMessage = document.createElement('div');
            prizeMessage.innerHTML = "🎉 Congratulations! You are now officially my Valentine! 💖";
            prizeMessage.classList.add('prize-message');
            document.body.appendChild(prizeMessage);

            // Step 4: Show reset button AFTER the prize message appears
            setTimeout(() => {
                resetBtn.style.display = 'inline-block';
            }, 1000); // Slight delay to let the message appear first
        }, 1000); // Wait for fade-out animation to complete before hiding
    });

    // Step 3: Burn effect ONLY when "No" is clicked
    noBtn.addEventListener('click', () => {
        console.log("No button clicked! Burn effect triggered!");

        // Ensure the burn animation runs
        letter.classList.add('burn'); 

        // Step 1: Change the letter content to a broken heart after burn animation
        setTimeout(() => {
            letter.innerHTML = '<div class="ash">Your loss</div>'; // Replace letter content with ash
            letter.classList.remove('burn'); // Remove burn animation so ash stays visible
            letter.style.display = 'block'; // Ensure the letter remains visible in its burnt state
        }, 3000); // Wait 3 seconds for burn effect to complete

        // Step 2: Display the reset button AFTER the letter changes to ash
        setTimeout(() => {
            resetBtn.style.display = 'inline-block'; // Show reset button
            console.log("Reset button is now visible.");
        }, 3200); // Small delay to ensure it's shown after ash appears
    }); // ✅ Correctly closed the function

    // Step 4: Reset the app
    resetBtn.addEventListener('click', () => {
        location.reload(); // Reload page to reset everything
    });

}); // ✅ Correctly closed `DOMContentLoaded` function
