
function opBasicas() {
    var n1;
    var n2;
    var s;
    var r;
    var m;
    var d;
    n1 = parseInt(prompt("Ingrese primer numero"));
    n2 = parseInt(prompt("Ingrese segundo numero"));

    s = n1 + n2;
    r = n1 - n2;
    m = n1 * n2;
    d = n1 / n2;

    alert("el resultado de la suma es: "+s);
    alert("el resultado de la resta es: "+r);
    alert("el resultado de la multiplicacion es: "+m);
    alert("el resultado de la division es: "+d);
}

function nMayor(){
    var A = 0;
    var B = 0;

    
    A = parseInt(prompt("Ingrese primer numero"));
    B = parseInt(prompt("Ingrese segundo numero"));
    
    
    if (A == B  ) {
        
        alert("los valores ingresados son iguales")
    
        }else if( A>B ){
            alert("el numero mayor es: "+A);
    
        }else{
    
            alert("el numero mayor es: "+B);
        }
    }
    
function nMenor() {
    var N1 = 0;
    var N2 = 0;
    var N3 = 0;

    N1 = parseInt(prompt("Ingrese el primero numero"));
    N2 = parseInt(prompt("Ingrese el segundo numero"));
    N3 = parseInt(prompt("Ingrese el tercero numero")); 
    
    if (N1<N2 && N1<N3 ) {
        
        alert("el numero menor es: "+N1)
    
        }else if( N2<N3 ){
            alert("el numero menor es: "+N2);
    
        }else{
    
            alert("el numero menor es: "+N3);
        }
    }

function PoI() {
    var numero = 0;

    numero = parseInt(prompt("Ingrese un numero"));
    
    if (numero%2 ==0) {
            alert("el numero "+numero+" ingresado es par");
        }else{
            alert("el numero ingresado "+numero+" es impar")
        }

    }

function Cnumero() {
    var a = 0;
    var R = 0;

    a = parseInt(prompt("Ingrese un numero:"));

    R = a*a;

    alert("El numero ingresado al cuadrado es: "+R);
    }

function area() {

    var base = 0;
    var altura = 0;
    var cuadrado = 0;

    base = parseInt(prompt("Ingrese la base:"));
    altura = parseInt(prompt("Ingrese la altura:"));

    cuadrado = base*altura/2;

    alert("El area del triangulo es: "+cuadrado);
    }


function longitud() {
    
    var valor = 0;
    var resultado = 0;

    valor = parseInt(prompt("Ingrese un valor : "));

    resultado = valor*100;

    alert("El valor ingresado en cm es: "+resultado+"cm");

}

function Ausuario() {
    var year = 2022;
    var edad = 0;
    var Ausuario = 0;

    year = parseInt(prompt("Ingrese el ultimo año que cumplio años : "));
    edad = parseInt(prompt("Ingrese su edad actual : "));


    Ausuario = year-edad;

    alert("Segun los datos ingresados usted nacio en el año: "+Ausuario);

}

function capital() {

    var capital = 0;
    var meses = 12;
    var años = 0;
    var interes = 30;
    var e1 = 0;
    var e2 = 0;
    var e3 = 0;
capital = parseInt(prompt("Ingrese el capital para cacular su interes"));
años = parseInt(prompt("Ingrese acunatos años desea ingresar su capital para saber su interes"));

e1 = (años * meses);
e2 = (capital * interes)/100;
e3 = (e2 + capital)*e1;

alert("la ganancia en meses seria de: " +e2+" y el total de las ganacias con el capital es: " +e3);

    
}

function promedio() {
    var nota1 = 0;
    var nota2 = 0;
    var nota3 = 0;
    var nota4 = 0;
    var nota5 = 0;
    var promedio_final = 0;


    nota1 = parseInt(prompt("Ingrese la primera nota"));
    nota2 = parseInt(prompt("Ingrese la segunda nota"));
    nota3 = parseInt(prompt("Ingrese la tercera nota"));
    nota4 = parseInt(prompt("Ingrese la cuarta nota"));
    nota5 = parseInt(prompt("Ingrese la quinta nota"));

    promedio_final = (nota1+nota2+nota3+nota4+nota5)/5;


    if (promedio_final <30) {

        alert("el alumno saco en el promedio final: "+promedio_final + " entonces el alumno reprovo la materia")
        
    }else{
        alert("el alumno aprovo la materia con un: "+promedio_final);
    }


    

}

function descuento() {

    var kmanzanas = 0;
    var precioM = 4500;
    var PagoT = 0 ;
    var des1 = 10;
    var des2 = 15;
    var des3 = 20;

    kmanzanas = parseInt(prompt("Ingrese el numero de kilos a comprar"));

   

    if (kmanzanas >= 3  && kmanzanas <= 5) {
        PagoT= (kmanzanas * precioM*des1)/100 ;
        alert("su total apagar con descuento  es:"+PagoT)
    }elseif( kmanzanas >= 6  && kmanzanas <= 10)
    {
        PagoT= (kmanzanas * precioM*des2)/100 ;
        alert("su total apagar con descuento  es:"+PagoT)
    }

    }elseif(kmanzanas >= 10  && kmanzanas <= 100)
    {
    PagoT= (kmanzanas * precioM*des3)/100;
    alert("su total apagar con descuento  es:"+PagoT)
    };





    


    
