var Validaciones;
(function (Validaciones) {
    function validarTexto(text) {
        if (text.length > 3) {
            return true;
        }
        return false;
    }
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        return true;
    }
})(Validaciones || (Validaciones = {}));
