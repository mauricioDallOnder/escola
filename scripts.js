const tabela = document.getElementById('myTable')
fetch('https://sheetdb.io/api/v1/dawhudst1ngau?sheet=pagina1')
    .then(response => response.json()) // retorna uma promise
    .then(result => {
        for (i in result) {

            const objeto = {
                "id": result[i].id,
                "nome": result[i].nome_do_aluno,
                "nascimento": result[i].data_de_nascimento,
                "mae": result[i].mae,
                "pai": result[i].pai,
                "turma": result[i].turma_em_2022,
                "telefone": result[i].telefone,
                "codigo_biblioteca": result[i].codigo_biblioteca,
                "naturalidade": result[i].naturalidade
            }

            for (let i = 1; i < 1000; i++) {
                let tr = document.createElement('tr');

                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                let td3 = document.createElement('td');
                let td4 = document.createElement('td');
                let td5 = document.createElement('td');
                let td6 = document.createElement('td');
                let td7 = document.createElement('td');
                let td8 = document.createElement('td');
                let td9 = document.createElement('td');

                let text1 = document.createTextNode(result[i].id);
                let text2 = document.createTextNode(result[i].nome_do_aluno);
                let text3 = document.createTextNode(result[i].data_de_nascimento);
                let text4 = document.createTextNode(result[i].mae);
                let text5 = document.createTextNode(result[i].pai);
                let text6 = document.createTextNode(result[i].turma_em_2022);
                let text7 = document.createTextNode(result[i].telefone);
                let text8 = document.createTextNode(result[i].codigo_biblioteca);
                let text9 = document.createTextNode(result[i].naturalidade);


                td1.appendChild(text1);
                td2.appendChild(text2);
                td3.appendChild(text3);
                td4.appendChild(text4);
                td5.appendChild(text5);
                td6.appendChild(text6);
                td7.appendChild(text7);
                td8.appendChild(text8);
                td9.appendChild(text9);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tr.appendChild(td6);
                tr.appendChild(td7);
                tr.appendChild(td8);
                tr.appendChild(td9);

                tabela.appendChild(tr);
            }


        }

    })

document.body.appendChild(tabela);



function myFunction() {

    let input = document.getElementById("myInput");
    let filter = input.value.toUpperCase();
    const tr = tabela.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        let id = tr[i].getElementsByTagName("td")[0];
        let nome = tr[i].getElementsByTagName("td")[1];
        let nascimento = tr[i].getElementsByTagName("td")[2];
        let mae = tr[i].getElementsByTagName("td")[3];
        let pai = tr[i].getElementsByTagName("td")[4];
        let turma = tr[i].getElementsByTagName("td")[5];
        let biblioteca = tr[i].getElementsByTagName("td")[7];
        let naturalidade = tr[i].getElementsByTagName("td")[8];

        if (nome || mae || pai || biblioteca || id || turma) {
            let texto_nome = removerCaracteres(nome.textContent)
            let texto_mae = removerCaracteres(mae.textContent)
            let texto_pai = removerCaracteres(pai.textContent)
            let texto_biblioteca = removerCaracteres(biblioteca.textContent)
            let texto_id = removerCaracteres(id.textContent)
            let texto_turma = removerCaracteres(turma.textContent)
            let texto_naturalidade = removerCaracteres(naturalidade.textContent)
            let texto_nascimento = removerCaracteres(nascimento.textContent)

            if ((texto_nome.toUpperCase().indexOf(filter) > -1) ||
                (texto_mae.toUpperCase().indexOf(filter) > -1) ||
                (texto_pai.toUpperCase().indexOf(filter) > -1) ||
                (texto_biblioteca.toUpperCase().indexOf(filter) > -1) ||
                (texto_turma.toUpperCase().indexOf(filter) > -1) ||
                (texto_id.toUpperCase().indexOf(filter) > -1) ||
                (texto_naturalidade.toUpperCase().indexOf(filter) > -1) ||
                (texto_nascimento.toUpperCase().indexOf(filter) > -1)) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


function removerCaracteres(texto) {
    // eliminando acentuação e o espaço em branco
    texto = texto.replace(/[ÀÁÂÃÄÅ]/, "A");
    texto = texto.replace(/[àáâãäå]/, "a");
    texto = texto.replace(/[ÈÉÊË]/, "E");
    texto = texto.replace(/[Ç]/, "C");
    texto = texto.replace(/[ç]/, "c");
    return texto.replace(/( )+[^a-z0-9]/gi, '');
}
