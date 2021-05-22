// Funcion para detener la reproduccion del video cuando se cierra la ventana modal

$('#videoModal').on('hidden.bs.modal', function () {
    var iframe = $(".modal-body").find('iframe');
    var src = $(iframe).attr('src');      
    $(iframe).attr('src', '').attr('src', src);
});
