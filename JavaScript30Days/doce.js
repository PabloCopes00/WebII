"Use strict";
// const str = "I love JavaScript";
// const pattern = /LOVE/i; // con I desestimamos mayusculas
// const result = pattern.test(str);
// console.log(result);

// match():Retorna un array que contiene todas las coincidencias, incluyendo los grupos de captura, o null si no se encuentra ninguna coincidencia. Si no utilizamos una bandera global, match() retorna un array que contiene el patrón, el índice, la entrada y el grupo.

// test():Comprueba si hay una coincidencia en una cadena. Devuelve verdadero o falso.
// const str = "I love JavaScript";
// const pattern = /love/;
// const result = str.match(pattern);
// console.log(result);

// const str = "I love JavaScript";
// const pattern = /love/;
// const result = str.search(pattern);
// console.log(result);

// replace(): Ejecuta una búsqueda de una coincidencia en una cadena, y reemplaza la subcadena coincidente con una subcadena de reemplazo.
const txt =
  "Python es el lenguaje más bello que ha creado el ser humano.\
Recomiendo python para un primer lenguaje de programación";

matchReplaced = txt.replace(/Python/gi, "JavaScript");
console.log(matchReplaced);

const txt1 =
  "%So%y p%r%%of%%es%or%a% y m%e %% enc%an%ta en%se%ña%r.\
N%o h%a%y n%a%d%a mas g%r%at%if%icante q%ue e%d%uc%a%r y c%a%p%ac%i%ta%r %a l%a g%e%n%t%e.\
L%a e%n%%señ%anza m%e %p%ar%ec%e ma%s% i%n%te%r%esa%nt%e que %cu%alq%uie%r %otro t%ra%ba%jo.\
E%s%t%o te mo%ti%v%a a s%er p%ro%fe%sor.";
console.log(`texto:   "%So%y p%r%%of%%es%or%a% y m%e %% enc%an%ta en%se%ña%r.\
N%o h%a%y n%a%d%a mas g%r%at%if%icante q%ue e%d%uc%a%r y c%a%p%ac%i%ta%r %a l%a g%e%n%t%e.\
L%a e%n%%señ%anza m%e %p%ar%ec%e ma%s% i%n%te%r%esa%nt%e que %cu%alq%uie%r %otro t%ra%ba%jo.\
E%s%t%o te mo%ti%v%a a s%er p%ro%fe%sor."`);
matches = txt1.replace(/%/g, "");
console.log(matches);


// retomar esta clase de patterns mas adelante.