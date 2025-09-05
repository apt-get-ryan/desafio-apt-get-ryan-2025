class AbrigoAnimais {
  animais = {
    'Rex': ['cão', 'rato,bola'],
    'Mimi': ['gato', 'bola,laser'],
    'Fofo': ['gato', 'bola,rato,laser'],
    'Zero': ['gato', 'rato,bola'],
    'Bola': ['cão', 'caixa,novelo'],
    'Bebe': ['cão', 'laser,rato'],
    'Loco': ['jabuti', 'skate,rato']
  };
  /**
   * 
   * @param {String} brinquedosPessoa1 
   * @param {String} brinquedosPessoa2 
   * @param {String} ordemAnimais 
   */
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {

    let pessoa1TotalAnimais = 0;
    let pessoa2TotalAnimais = 0;
    let res = [];
    


    let arrayAnimais = ordemAnimais.split(',').sort();

    if(this.verificaSeHaAnimaisDuplicados(arrayAnimais))
      return { erro: "Animal inválido"}


    for(let animal of arrayAnimais) {
      if(!Object.keys(this.animais).includes(animal)) {
        return { erro: "Animal inválido"}
      }
      
      const [ tipoAnimal, brinquedosFavoritos ] = this.animais[animal];
      let pessoa1adota = false;
      let pessoa2adota = false;
      if(pessoa1TotalAnimais < 3) {
        if ( animal == "Loco") {
          if(pessoa1TotalAnimais > 0) {
            pessoa1adota = true;
          }
        }
        if(this.verificaOrdemDosBrinquedos(brinquedosPessoa1, brinquedosFavoritos)) {
          pessoa1TotalAnimais++;
          pessoa1adota = true;
        }
      }
      if(pessoa2TotalAnimais < 3) {
        if ( animal == "Loco") {
          if(pessoa2TotalAnimais > 0) {
            pessoa2adota = true;
          }
        }
        if(this.verificaOrdemDosBrinquedos(brinquedosPessoa2, brinquedosFavoritos)) {
          pessoa2TotalAnimais++;
          pessoa2adota = true;
        }
      }

      if (pessoa1adota && pessoa2adota)
        res.push(`${animal} - abrigo`);
      else if( pessoa1adota) 
        res.push(`${animal} - pessoa 1`);
      else if(pessoa2adota )
        res.push(`${animal} - pessoa 2`);
      else
        res.push(`${animal} - abrigo`);
       
    }
    return { lista: res };
  }


 /**
  * @param {String} arrAnimais 
  */
  verificaSeHaAnimaisDuplicados(arrAnimais) {
    const setAnimais = new Set(arrAnimais);

    if(setAnimais.size != arrAnimais.length)
      return true;
    else 
      return false;
  }

  verificaOrdemDosBrinquedos(brinquedos, brinquedosFavoritos) {
    const arrayBrinquedos = brinquedos.split(',');
    const arrayBrinquedosFavoritos = brinquedosFavoritos.split(",");

    let i = 0;
    for(let brinquedo of arrayBrinquedos) {
      if(brinquedo.toLowerCase() == arrayBrinquedosFavoritos[i].toLowerCase())
        i++;
    }
    if(i == arrayBrinquedosFavoritos.length)
      return true;
    else 
      return false;
  }
}


export { AbrigoAnimais as AbrigoAnimais };
