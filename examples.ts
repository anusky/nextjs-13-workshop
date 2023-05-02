let anything: any;
anything = 4;
anything = true;
anything = "hola";
anything.toUpperCase();

/**
 * Examples with unknown and any
 */
let something: unknown;
something = 4;
something = true;
something = "hola";

// something.toUpperCase();

// (something as string).toUpperCase();

// const a = (dato?: string) => {

//   console.log("dato", (dato || '').toUpperCase());
// };

// a();

const generics = (props: Interfaz | InterfazAux | {
    tipoDato?: 'hola' | 'adios';
    patata?: number;
}) => {
    if(!props.tipoDato) {//
    }
    if(typeof props.tipoDato === "number" )
        return 3 + props.tipoDato
    else {
        return props.tipoDato.toUpperCase();
    }
  console.log("props.tipoDato", typeof props.tipoDato);
  return props.tipoDato;
};

generics({
  tipoDato: ,
  patata: 'hola,
});

const bbla : Pepito = {
    id: 3,
    tipoDato: 4
}