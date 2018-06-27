namespace Validaciones {
    function validarTexto(text: string): boolean {
        if (text.length > 3) {
            return true;
        }
        return false;
    }

    function validarFecha(fecha: Date): boolean {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        return true;
    }
}
