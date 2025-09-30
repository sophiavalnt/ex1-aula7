class Jogador{
    constructor(id, nome, pontos, status = true){
        this.id = id;
        this.nome = nome;
        this.pontos = pontos;
        this.status = status;
    }

    getData(){
        console.log(`
            -----DADOS DO JOGADOR-----
            ID: ${this.id}
            Nome: ${this.nome}
            Pontos: ${this.pontos}
            Status: ${this.status ? Ativo : Inativo}
            -------------------------`)
    }
}

let jogador1 = new Jogador(1, "Zé", 578);
console.table(jogador1);