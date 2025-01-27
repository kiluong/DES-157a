(function() {
    'use strict';
    console.log('reading js');

    const area1 = document.querySelector('#camera-area');
    const area2 = document.querySelector('#headphones-area');
    const area3 = document.querySelector('#matcha-area');
    const area4 = document.querySelector('#lashes-area');
    const area5 = document.querySelector('#pendant-area');
    const allImgs = document.querySelectorAll('#image-container img');

    let isMouseMoving = false;
    document.addEventListener("mousemove", (e) => {
        if (!isMouseMoving) {
            isMouseMoving = true;
            requestAnimationFrame(() => {
                const mouseX = e.clientX;
                const mouseY = e.clientY;
                const gradientCenterX = (mouseX / window.innerWidth) * 100;
                const gradientCenterY = (mouseY / window.innerHeight) * 100;
                document.querySelector(".revealed-area").style.background = `radial-gradient(circle 280px at ${gradientCenterX}% ${gradientCenterY}%, transparent 0%, rgba(0, 0, 0, 0.8) 100%)`;
                isMouseMoving = false;
            });
        }
    });

    // // Add event listeners for hover (mouseover and mouseout) to highlight images
    // area1.addEventListener('mouseover', function() {
    //     highlights('camerahl');
    // });
    // area1.addEventListener('mouseout', function() {
    //     resetBackground();
    // });

    // area2.addEventListener('mouseover', function() {
    //     highlights('headphoneshl');
    // });
    // area2.addEventListener('mouseout', function() {
    //     resetBackground();
    // });

    // area3.addEventListener('mouseover', function() {
    //     highlights('matchahl');
    // });
    // area3.addEventListener('mouseout', function() {
    //     resetBackground();
    // });

    // area4.addEventListener('mouseover', function() {
    //     highlights('lasheshl');
    // });
    // area4.addEventListener('mouseout', function() {
    //     resetBackground();
    // });

    // area5.addEventListener('mouseover', function() {
    //     highlights('pendanthl');
    // });
    // area5.addEventListener('mouseout', function() {
    //     resetBackground();
    // });

    // function highlights(id) {
    //     const imageContainer = document.getElementById('image-container');
    //     putImageOnTop(id);
    // }
    
    // function putImageOnTop(id) {
    //     const allImgs = document.querySelectorAll('#image-container img');
    
    //     const img = document.getElementById(id);
    //     if (img) {
    //         img.style.zIndex = '2';  
    //         img.style.opacity = '1';  
    //     }
    // }
    
    function resetBackground() {
        // Reset all images to their default state
        const images = document.querySelectorAll('#image-container img');
        images.forEach(img => {
            img.style.zIndex = '0';  
            img.style.opacity = '0';  
        });
    
        // Reset the background to full opacity 
        document.querySelector('#bg').style.opacity = '1'; //this is causing flicker
    }

    // Existing click event listeners 
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
        if (modal && !modal.classList.contains('show')) {
            closeAllModals(); 
            modal.classList.add('show'); 
        }
    }
    
    function closeAllModals() {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.classList.remove('show'); 
        });
    }

    // Function to close modals when clicking outside the modal content
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('show'); 
            }
        });
    });
    
})();
