
# Proyecto: Calculadora de Factorial en JavaScript

## 🎯 Objetivo

Desarrollar un programa interactivo en JavaScript que solicite un número entero no negativo al usuario, valide la entrada de datos, calcule su factorial y muestre el resultado de forma clara.

## 🛠️ Requisitos del Programa

1. **Entrada de Datos:**
   * Solicitar al usuario un número mediante la función `prompt()` o un campo `<input>` en el HTML.

2. **Validación de Datos:**
   * Verificar que la entrada sea **exclusivamente un número válido** y entero no negativo ($ \ge 0 $).
   * Si la entrada es inválida (texto, espacios, números negativos), mostrar un **mensaje de error descriptivo** y volver a solicitar el dato.

3. **Lógica de Negocio (Cálculo):**
   * Calcular el factorial del número ingresado ($n!$).
   * *Nota:* Considerar casos especiales como $0! = 1$ y $1! = 1$.

4. **Salida de Resultados:**
   * Mostrar el resultado en la **consola del navegador** (`console.log`) y/o directamente en la **interfaz web (DOM)**.

## 🧪 Casos de Prueba

| Caso de Prueba | Entrada | Salida Esperada | Notas |
| :--- | :--- | :--- | :--- |
| **Prueba 1** | `5` | `120` | $5! = 5 \times 4 \times 3 \times 2 \times 1$ |
| **Prueba 2** | `6` | `720` | $6! = 6 \times 5 \times 4 \times 3 \times 2 \times 1$ |
| **Prueba 3** | `0` | `1` | Caso base matemático |
| **Prueba 4 (Error)** | `"hola"` / `-3` | Mensaje de error | Debe volver a solicitar el número |
