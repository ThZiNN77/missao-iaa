const nomes = ["Matheus","Cauan","Tadeu","Cassio","Poliana"];
export function aleatorio (lista) {
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);