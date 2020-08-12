"use strict";
//************* NULL Explicito ****************** */
var nullVariable;
nullVariable = null; //solo acepta null y ningun otro valor
var otherNullVariable = null; //TS lo infiere como any y no como null
otherNullVariable = 'Pedro'; //como es any y no null, acepta cualquier tipo de dato
console.log("nullVariable: " + nullVariable);
console.log("otherNullVariable: " + otherNullVariable);
//-------------------- UNDEFINED ----------------//
//Exlicito
var undefinedVariable = undefined;
//undefinedVariable = 'test'; //error -> solo permite tipo undefined
//Implicito
var otherUndefinedVariable = undefined; //el compilador TS asigna el tipo any a la variable
otherUndefinedVariable = 'test'; //any type acepta cualquier tipo, en este caso string
console.log("undefinedVarible: " + undefinedVariable);
console.log("otherUndefinedVariable: " + otherUndefinedVariable);
//---------------- Null & Undefined como Subtipos -----------------//
