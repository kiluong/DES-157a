document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners to each image to open corresponding modal
    document.querySelectorAll('.image').forEach(image => {
        image.addEventListener('click', function() {
            const imageId = this.id;
            const modalId = `modal${imageId.slice(-1)}`; 
            const modal = document.getElementById(modalId);
            
            if (modal) {
                modal.style.display = 'flex'; // Show the modal
            } else {
                console.error(`Modal with ID ${modalId} not found`);
            }
        });
    });

    // Add click event to close modals when clicking outside modal content
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none'; // Hide the modal
            }
        });
    });
});
