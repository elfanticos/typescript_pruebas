namespace Validaciones {
    export function validarTexto(text: string): boolean {
        if (text.length > 3) {
            return true;
        }
        return false;
    }
}