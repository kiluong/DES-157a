(function() {
    'use strict';
    console.log('reading js');

    const area1 = document.querySelector('#camera-area');
    const area2 = document.querySelector('#headphones-area');
    const area3 = document.querySelector('#matcha-area');
    const area4 = document.querySelector('#lashes-area');
    const area5 = document.querySelector('#pendant-area');
    const allImgs = document.querySelectorAll('#image-container img');

    document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
    
        const gradientCenterX = (mouseX / window.innerWidth) * 100;
        const gradientCenterY = (mouseY / window.innerHeight) * 100;
    
        const revealedArea = document.querySelector(".revealed-area");
        if (revealedArea) {
            revealedArea.style.background = `radial-gradient(
                circle 280px at ${gradientCenterX}% ${gradientCenterY}%,
                transparent 0%, rgba(0, 0, 0, 0.8) 100%
            )`;
        } else {
            console.error('Element with class "revealed-area" not found.');
        }
    });


    // Add event listeners for hover (mouseover and mouseout) to highlight images
    area1.addEventListener('mouseover', function() {
        highlights('camerahl');
    });
    area1.addEventListener('mouseout', function() {
        resetBackground();
    });

    area2.addEventListener('mouseover', function() {
        highlights('headphoneshl');
    });
    area2.addEventListener('mouseout', function() {
        resetBackground();
    });

    area3.addEventListener('mouseover', function() {
        highlights('matchahl');
    });
    area3.addEventListener('mouseout', function() {
        resetBackground();
    });

    area4.addEventListener('mouseover', function() {
        highlights('lasheshl');
    });
    area4.addEventListener('mouseout', function() {
        resetBackground();
    });

    area5.addEventListener('mouseover', function() {
        highlights('pendanthl');
    });
    area5.addEventListener('mouseout', function() {
        resetBackground();
    });

    function highlights(id) {
        const imageContainer = document.getElementById('image-container');
        putImageOnTop(id);
    }
    
    function putImageOnTop(id) {
        // Remove highlighted class from all images first
        const allImgs = document.querySelectorAll('#image-container img');
        allImgs.forEach(img => img.classList.remove('highlighted'));
    
        // Add the highlighted class to the targeted image
        const img = document.getElementById(id);
        if (img) {
            img.style.zIndex = '2';  // Bring the hovered image to the top
            img.style.opacity = '1';  // Make the image visible
            img.classList.add('highlighted');  // Add highlight class
        }
    }
    
    
    function resetBackground() {
        // Reset all images to their default state
        const images = document.querySelectorAll('#image-container img');
        images.forEach(img => {
            img.classList.remove('highlighted');  // Remove the highlighted class
            img.style.zIndex = '0';  // Reset z-index to default
            img.style.opacity = '0';  // Reset opacity to hidden
        });
    
        // Reset the background to full opacity (optional, uncomment if needed)
        document.querySelector('#bg').style.opacity = '1';
    }

    // Existing click event listeners (don't modify)
    area1.addEventListener('click', function() {
        openModal('modal1');
    });
    area2.addEventListener('click', function() {
        openModal('modal2');
    });
    area3.addEventListener('click', function() {
        openModal('modal3');
    });
    area4.addEventListener('click', function() {
        openModal('modal4');
    });
    area5.addEventListener('click', function() {
        openModal('modal5');
    });

    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal && modal.style.display !== 'flex') {
            closeAllModals();  // Close any open modals
            modal.style.display = 'flex'; // Show the modal
        }
    }
    
    function closeAllModals() {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.style.display = 'none'; // Hide the modal
        });
    }
    

    // Function to close modals when clicking outside the modal content
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none'; // Hide the modal
            }
        });
    });
})();
