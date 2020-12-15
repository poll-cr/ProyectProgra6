
$(function () {
    validarDirecciones();
});

function validarDirecciones() {
    $("#frmCurso").validate({
        rules: {
            NombreCurso: {
                required: true,
                maxlength: 100
            },

            CodigoCurso: {
                required: true,
                maxlength: 100
            }           

        }
    });
}