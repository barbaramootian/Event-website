//The click functionality
$('#click').on('click', function() {
    if ($('#events').text() === 'show') {

        // This block is executed when
        // you click the event button
        $('#events').text('hide');
        $('#event-info').css('display', 'flex');
    } else {

        // This block is executed when
        // you click the event report button
        $('#event-report').text('show');
        $('#event-info').css('display', 'none');
    }
});