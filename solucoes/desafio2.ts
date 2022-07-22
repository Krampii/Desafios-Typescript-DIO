enum Trabalho {
  Artista,
  Enfermeiro,
  Confeiteiro
}

type Humano = {
  nome: string,
  idade: number,
  profissao: Trabalho
}

let pessoa1: Humano = {
  nome: 'Joana',
  idade: 29,
  profissao: Trabalho.Confeiteiro
};

let pessoa2: Humano = {
  nome: 'Carlos',
  idade: 55,
  profissao: Trabalho.Enfermeiro
};

let pessoa3: Humano = {
  nome: 'Laura',
  idade: 18,
  profissao: Trabalho.Artista
};

let pessoa4: Humano = {
  nome: "Sabrina",
  idade: 60,
  profissao: Trabalho.Confeiteiro
}