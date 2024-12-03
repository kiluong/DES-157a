(function() {
    'use strict';

    const area1 = document.querySelector('#camera-area');
    const area2 = document.querySelector('#headphones-area');
    const area3 = document.querySelector('#matcha-area');
    const area4 = document.querySelector('#lashes-area');
    const area5 = document.querySelector('#pendant-area');
    const allImgs = document.querySelectorAll('#image-container img');

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
        putImageOnTop(id);
    }

    function putImageOnTop(id) {
        for (const eachImg of allImgs) {
            if (eachImg.id === id) {
                eachImg.style.zIndex = '2'; // Bring the hovered image to the top
                eachImg.style.opacity = '1'; // Make the image visible
            } 
        }
       
    }

    function resetBackground() {
        for (const eachImg of allImgs) {
            eachImg.style.zIndex = '0'; // Reset z-index
            eachImg.style.opacity = '0'; // Hide the image
        }

        document.querySelector('#bg').style.opacity = 1;
        
        // Reset the background to the default image
        const imageContainer = document.getElementById('image-container');
        imageContainer.style.backgroundImage = 'url("bg.jpg")';
    }

    // Existing click event listeners (dont modify)
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

    // Function to open the correct modal when an area is clicked
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            console.log(`Opening modal: ${modalId}`); // Log modal ID
            modal.style.display = 'flex'; // Show the modal
        } else {
            console.error(`Modal with ID ${modalId} not found`);
        }
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
