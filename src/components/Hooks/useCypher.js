import React, { useState } from 'react'

export const useCypher = () => {

    const cifradoAfin = (stringText = String, a = Number, b = Number) => {

        let cifrado = ''
        const ABC = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
        const newText = stringText.toUpperCase()

        for (let i = 0; i < newText.length; i++) {

            const letra = newText.charAt(i);
            const indice = ABC.indexOf(letra);

            const x = indice

            let nuevoNumero = (a * x) + parseInt(b);
            let nuevoNumero2 = nuevoNumero % 27;

            const nuevaLetra = ABC.charAt(nuevoNumero2)

            if (indice === -1) {
                cifrado += " "
            }

            if (indice !== -1) {
                cifrado += nuevaLetra
            }

        };

        return cifrado;


    }

    const decifradoAfin = (stringText = String) => {

        let letraMasRepetidaEnv = {}
        let letra2MasRepetidaEnv = {}
        const ABC = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
        const newText = stringText.toUpperCase()
        const letras = newText.split('').sort()
        const letrasUnicas = []
        const vecesRepetidas = []
        let textoDecifrado = ""
        let contador = 1;

        for (let i = 0; i < letras.length; i++) {

            if (letras[i] === letras[i + 1]) {

                contador++;

            } else {

                vecesRepetidas.push(contador);
                letrasUnicas.push(letras[i]);
                contador = 1;

            }

        }

        let letraMasRepetida = "";
        let letra2MasRepetida = "";

        if (letrasUnicas[0] !== "A" || letrasUnicas[1] !== "B") {

            letrasUnicas.shift();
            vecesRepetidas.shift();

        }

        if (letrasUnicas[0] !== "A" || letrasUnicas[1] !== "B") {

            letrasUnicas.shift();
            vecesRepetidas.shift();

        }

        let valorMax = Math.max(...vecesRepetidas)

        for (let i = 0; i < vecesRepetidas.length; i++) {

            if (vecesRepetidas[i] === valorMax) {
                letraMasRepetida = letrasUnicas[i]
                const veces = vecesRepetidas[i]
                letraMasRepetidaEnv = {

                    letra: letraMasRepetida,
                    veces

                }
                letrasUnicas.splice(i, 1)
                vecesRepetidas.splice(i, 1)
                break
            }

        }

        valorMax = Math.max(...vecesRepetidas)

        for (let i = 0; i < vecesRepetidas.length; i++) {

            if (vecesRepetidas[i] === valorMax) {
                letra2MasRepetida = letrasUnicas[i]
                const veces = vecesRepetidas[i]

                letra2MasRepetidaEnv = {

                    letra: letra2MasRepetida,
                    veces

                }

                letrasUnicas.splice(i, 1)
                vecesRepetidas.splice(i, 1)
                break
            }

        }

        const b = ABC.indexOf(letra2MasRepetida)
        const lmrI = ABC.indexOf(letraMasRepetida)

        //lmrI - b* inv(4,27) mod 27
        let resultParcial = lmrI - b
        let modInver = modInverse(4, 27)
        const a = (resultParcial * modInver) % 27

        // m = (c – b) * inv (a, n) mod n.

        for (let i = 0; i < newText.length; i++) {

            const letra = newText.charAt(i);
            const indice = ABC.indexOf(letra);
            const x = indice

            let nuevoNumero = (x - b) * modInverse(a, 27);
            let nuevoNumero2 = nuevoNumero % 27;

            if (nuevoNumero2 < 0) {
                nuevoNumero2 = 27 + nuevoNumero2
            }

            const nuevaLetra = ABC.charAt(nuevoNumero2)

            if (indice <= -1) {
                textoDecifrado += " "
            }

            if (indice !== -1) {
                textoDecifrado += nuevaLetra
            }

        };

        return {

            textoDecifrado,
            letraMasRepetidaEnv,
            letra2MasRepetidaEnv,
            a,
            b

        }

    }

    function modInverse(a, m) {
        let m0 = m;
        let y = 0;
        let x = 1;

        if (m === 1) {
            return 0;
        }

        while (a > 1) {
            let q = Math.floor(a / m);
            let t = m;

            m = mod(a, m);
            a = t;
            t = y;

            y = x - q * y;
            x = t;
        }

        if (x < 0) {
            x = x + m0;
        }

        return x;
    }

    function mod(n, m) {
        return ((n % m) + m) % m;
    }

    return {
        cifradoAfin,
        decifradoAfin
    }
}
