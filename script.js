// Update script.js to add animations when planet information appears
$(document).ready(function() {
    $('.planet').click(function() {
        // Trigger animations when a planet is clicked
        $('.info-panel').addClass('fadeIn').removeClass('slideUp');
        $('.info-content').addClass('fadeIn').removeClass('slideUp');

        // Sample function to show planet info
        showPlanetInfo($(this).data('planet')); // Assuming data-planet attribute has the info
    });

    // Function to show planet info with animations
    function showPlanetInfo(planet) {
        $('.info-panel').fadeIn(400).slideDown(400);
        $('.info-content').text(planet); // Update content with planet info
    }
});