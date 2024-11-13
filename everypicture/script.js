(function() {
    'use strict';

    const area1 = document.querySelector('#camera-area');
    const area2 = document.querySelector('#headphones-area');
    const area3 = document.querySelector('#matcha-area');
    const area4 = document.querySelector('#lashes-area');
    const area5 = document.querySelector('#pendant-area');

    // Function to open the correct modal when an area is clicked
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex'; // Show the modal
        } else {
            console.error(`Modal with ID ${modalId} not found`);
        }
    }

    // Add event listeners to each area
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

    // Function to close modals when clicking outside the modal content
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none'; // Hide the modal
            }
        });
    });

    // Closing the Overlay with Escape Key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal').forEach(modal => {
                if (modal.style.display === 'flex') {
                    modal.style.display = 'none'; // Hide the modal
                }
            });
        }
    });

    
    function putImageOnTop(id) {
        const allImgs = document.querySelectorAll('div > img');
        for (const eachImg of allImgs) {
            if (eachImg.id === id) {
                eachImg.style.zIndex = '1';
            } else {
                eachImg.style.zIndex = '0';
            }
        }
    }
})();
