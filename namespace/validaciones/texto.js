var Validaciones;
(function (Validaciones) {
    function validarTexto(text) {
        if (text.length > 3) {
            return true;
        }
        return false;
    }
    Validaciones.validarTexto = validarTexto;
})(Validaciones || (Validaciones = {}));
