function identidades() {
    var x = parseInt(document.getElementById("x").value);
    var a1 = Math.pow((Math.sin(x) + Math.cos(x)), 2)
    var a2 = 1 + (2 * Math.sin(x) * Math.cos(x))
    if (a1 == a2) {
        document.getElementById('resultadoa').innerHTML = "Los dos lados de la  primera identidad son iguales"
    } else {
        document.getElementById('resultadoa').innerHTML = "Los dos lados de la  primera identidad a no son iguales"
    }

    var b1 = (1 - (2 * Math.cos(x)) - (3 * Math.pow(Math.cos(x), 2))) / (Math.pow(Math.sin(x), 2))
    var b2 = (1 - (3 * Math.cos(x))) / (1 - Math.cos(x))
    if (b1 == b2) {
        document.getElementById('resultadob').innerHTML = "Los dos lados de la  segunda identidad son iguales"
    } else {
        document.getElementById('resultadob').innerHTML = "Los dos lados de la  segunda identidad no son iguales"
    }
}

function variables() {
    var alpha = Math.PI / 8
    var beta = Math.PI / 6
    var c1 = Math.tan(alpha + beta)
    var c2 = (Math.tan(alpha) + Math.tan(beta)) / (1 - (Math.tan(alpha) * Math.tan(beta)))
    if (c1 == c2) {
        document.getElementById('resultadoc').innerHTML = "Dadas las variables los dos lados son iguales"
    } else {
        document.getElementById('resultadoc').innerHTML = "Dadas las variables los dos lados no son iguales"
    }
}

function elipse() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var p = Math.PI * (a + b) * (3 - ((Math.sqrt(((3 * a) + b) * (a + (3 * b)))) / (a + b)))
    document.getElementById('resultadoelipse').innerHTML = "el Perimetro de la elipse es " + p
}

function raiz() {
    p1 = parseInt(document.getElementById("x1").value);
    x1 = p1
    e1 = 1
    while (e1 > 0.00001) {
        x2 = x1 * (Math.pow(x1, 3) + (2 * p1)) / ((2 * (Math.pow(x1, 3))) + p1)
        var e1 = Math.abs((x2 - x1) / x1)
        x1 = x2
    }
    document.getElementById('resultadoraiz').innerHTML = "el resultado de la raiz es " + x2
}

function farmaco(t, inc) {
    var dg = 150
    var vd = 50
    var ka = 1.6
    var ke = 0.4
    var e = Math.E
    var cp = (dg / vd) * (ka / (ka - ke)) * (Math.pow(e, -(ke * t)) - Math.pow(e, -(ka * t)))
        //document.getElementById('resultadofarmaco').innerHTML = "a) Cp 0h= " + (cp)
    if (inc == 0) {
        var capa = document.getElementById("capa");
    } else {
        var capa = document.getElementById("capa1");
    }

    var h6 = document.createElement("h6");
    h6.innerHTML = "Cuando t= " + t + ": Cp= " + cp;
    capa.appendChild(h6);

}

/*function addElemento(texto) {
    var capa = document.getElementById("capa");
    var h1 = document.createElement("h1");
    h1.innerHTML = texto;
    capa.appendChild(h1);
}*/
//identidades
/*dos identidades trigonométricas están dadas por.
  para cada parte, verifique que la identidad sea correcta calculando los valores de los lados izquierdo y derecho de la ecuación, sustituyendo x=20*/
//Variables
/*Defina dos variables: ... Utilizando estas variables, demuestre que la siguiente identidad trigonométrica es correcta calculando los valores de los lados izquierdo y derecho de la ecuación. */
// elipse
/*el perímetro de una elipse se puede aproximar por...
calculate the perimeter of an ellipse with .... */
//raiz cubica
/*un método numérico para calcular la raíz cúbica de un número, ... es el método de Halley. El proceso de solución comienza eligiendo un valor x1 como primera estimación de la solución. utilizando este valor, se calcula un segundo valor x2 más preciso con ..... que luego se utiliza para calcular un tercer valor x3 aún más preciso, y así sucesivamente la ecuación general para calcular el valor xi a partir del valor de xi es... Escriba un programa matlab que calcule la raíz cúbica de un número. en el programa use x1=P para la primera estimación de la solución. Luego, utilizando la ecuación general en un ciclo, calcule valores nuevos y más precisos. detenga el ciclo cuando el error relativo estimado E definido por .... sea menor que 0.00001 Use el programa para calcular: */
//farmaco
/*la concentración de un fármaco en el cuerpo C se puede representar mediante la ecuación:
donde D es la dosis administrada mg V es el volumen de distribución L K es la constante de velocidad de absorción... k es la constante de velocidad de eliminación... y t es el tiempo h desde que se administró el fármaco. Para un determinado medicamento, se dan las siguientes cantidades ..........
se administra una sola dosis en t- 0 calcular y trazar C frente a t durante 10 h
se administra una primera dosis en t-0 y posteriormente cuatro dosis más se administran a intervalos de 4h... calcular y graficar C versus t para 24 */