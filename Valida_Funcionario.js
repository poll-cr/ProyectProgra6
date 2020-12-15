$(function () {
    validaFuncionario();
});

function validaFuncionario() {
    $("#frmFuncionario").validate({
        rules: {
            NombreComp: {
                required: true,
                maxlength: 100
            },

            Cedula: {
                required: true,
                maxlength: 100
            },

            provincia: {
                required: true
            },

            canton: {
                required: true
            },

            distrito: {
                required: true
            },
            Fecha_De_Contratacion: {
                required: true
            }
        }
    });
}