export function sum(args){ // si se coloca ...args genera un arreglo de n parametros de la funcion
    return args.reduce(function (acc, cur){
        return acc + cur;
    })
}