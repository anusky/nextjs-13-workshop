type userType = "admin" | "client";
interface Interfaz {
  tipoDato: number;
}

type Patata = {
  id: number;
};

type Pepito = Patata & Interfaz;
