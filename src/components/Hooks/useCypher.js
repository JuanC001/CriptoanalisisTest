import React, { useState } from 'react'

export const useCypher = () => {

    const cifradoAfin = (stringText = String, a = Number, b = Number) => {

        let cifrado = ''
        const ABC = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'

        stringText = removeAccents(stringText.toUpperCase())

        // C = a * m + b mod n

        for (let i = 0; i < stringText.length; i++) {

            const letraActual = stringText.charAt(i);
            const m = ABC.indexOf(stringText.charAt(i));

            let c = (parseInt(a) * m + parseInt(b)) % 27

            if (m !== -1) {
                cifrado += ABC.charAt(c)
            }

        };

        return cifrado;


    }

    const decifradoAfin = (stringText = String, invertido = Boolean) => {

        const numeroAux = invertido ? 1 : 0
        const ABC = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'

        stringText = stringText.toUpperCase()
        const { numeroCaracteres, letrasMasRepetidas } = calcularMaximo(stringText)
        const b = getIndex(letrasMasRepetidas[1 - numeroAux], ABC)
        const a = calcularA(getIndex(letrasMasRepetidas[0 + numeroAux], ABC), b)

        let textoDecifrado = ''

        // m = (c – b) * inv (a, n) mod n.

        for (let i = 0; i < stringText.length; i++) {

            const letraActual = stringText.charAt(i)
            const c = parseInt(ABC.indexOf(letraActual))
            let m = (c - b) * modInverse(a, 27) % 27

            if (m < 0) {
                m += 27
            }

            if (c !== -1) {
                textoDecifrado += ABC.charAt(m)
            }

        }

        console.log(letrasMasRepetidas)

        return {

            numeroCaracteres,
            letrasMasRepetidas,
            textoDecifrado,
            a,
            b

        }

    }

    const calcularA = (letraMasRepetida = String, b) => {

        //a = (letrasMasRepetida - b) * inv(4,27) % 27
        let a = (letraMasRepetida - b) * modInverse(4, 27) % 27
        if (a < 0) {
            a += 27
        }

        return a;

    }

    const getIndex = (letra, ABC = String) => {

        return ABC.indexOf(letra.letra);

    }

    const calcularMaximo = (texto = String) => {

        const letras = texto.split('').sort()

        let numeroCaracteres = 0

        let letrasUnicas = []
        let vecesRepetidas = []

        let letrasMasRepetidas = []

        let contador = 1
        for (let j = 0; j < texto.length; j++) {

            if (letras[j] !== " " && letras[j] !== "\n") {

                numeroCaracteres++;

                if (letras[j] === letras[j + 1]) {

                    contador++;

                } else {

                    letrasUnicas.push(letras[j])
                    vecesRepetidas.push(contador)
                    contador = 1;

                }

            }

        }

        for (let i = 0; i < 2; i++) {

            let valorMax = Math.max(...vecesRepetidas)

            for (let j = 0; j < vecesRepetidas.length; j++) {

                if (vecesRepetidas[j] === valorMax) {

                    let porcentaje = 100 * vecesRepetidas[j] / numeroCaracteres
                    porcentaje = cutNumber(porcentaje)

                    letrasMasRepetidas.push({

                        letra: letrasUnicas[j],
                        veces: vecesRepetidas[j],
                        porcentaje

                    })

                    letrasUnicas.splice(j, 1)
                    vecesRepetidas.splice(j, 1)
                    break;

                }

            }

        }

        return {

            numeroCaracteres,
            letrasMasRepetidas

        }

    }

    const cutNumber = (num) => {

        return +(Math.round(num + "e+2") + "e-2");

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

    function removeAccents(text) {
        const sustitutions = {
            àáâãäå: "a",
            ÀÁÂÃÄÅ: "A",
            èéêë: "e",
            ÈÉÊË: "E",
            ìíîï: "i",
            ÌÍÎÏ: "I",
            òóôõö: "o",
            ÒÓÔÕÖ: "O",
            ùúûü: "u",
            ÙÚÛÜ: "U",
            ýÿ: "y",
            ÝŸ: "Y",
            ß: "ss",
        };
        // Devuelve un valor si 'letter' esta incluido en la clave
        function getLetterReplacement(letter, replacements) {
            const findKey = Object.keys(replacements).reduce(
                (origin, item, index) => (item.includes(letter) ? item : origin),
                false
            );
            return findKey !== false ? replacements[findKey] : letter;
        }
        // Recorre letra por letra en busca de una sustitución
        return text
            .split("")
            .map((letter) => getLetterReplacement(letter, sustitutions))
            .join("");
    }

    return {
        cifradoAfin,
        decifradoAfin
    }
}
