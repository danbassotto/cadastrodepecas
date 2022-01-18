// Variável de peso de peças

let PesodaPeca = 200;
if (PesodaPeca < 100 )
{ console.log ("Não é possível cadastrar essa peça, pois a mesma possui um peso inferior a capacidade mínima");
} 
  else {console.log("Cadastro de peça habilitado");
}

//Capacidade máxima da caixa = a 10

let CapacidadeCaixa = 10;
if (CapacidadeCaixa > 10 )
{ console.log ("Não é possível inserir a peça na caixa, pois excede a quantida máxima de peças que cabem na caixa");
}
  else { console.log ("Peça inserida na caixa. Por favor, insira o nome da mesma");
}

//Caso a peça tenha quantidade inferior a 3, apontar erro

let QtdminChar = "P";
var Conta = (3 - QtdminChar.length);
if (QtdminChar.length < 3 )
 { console.log (`Erro! O nome da peça deve conter no mínimo 3 caracteres. A quantidade digitada é de: ${QtdminChar.length} caracteres. Faltam ${Conta} caracteres`);
}
 else { console.log ("Cadastro de peça efetuado com sucesso!");
}

//Tarefa finalizada.

