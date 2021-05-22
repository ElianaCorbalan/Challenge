$('#videoModal').on('hidden.bs.modal', function () {
    var iframe = $(".modal-body").find('iframe');
    var src = $(iframe).attr('src');      
    $(iframe).attr('src', '').attr('src', src);
});
