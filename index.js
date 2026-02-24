let cursos_btn_website = document.getElementById("btn_websites_cursos");
let cursos_btn_matematica = document.getElementById("btn_matematica_cursos");
let cursos_btn_outros = document.getElementById("btn_outros_cursos");

let pagina_1 = document.getElementById("pagina_1");
let pagina_2 = document.getElementById("pagina_2");
let pagina_3 = document.getElementById("pagina_3");

function mudar_btn_filtro(ativo, desativado_1, desativado_2) {
    ativo.style.backgroundColor = "#0E402D";
    ativo.style.color = "#9FCC2E";

    desativado_1.style.backgroundColor = "#9FCC2E";
    desativado_1.style.color = "#0E402D";

    desativado_2.style.backgroundColor = "#9FCC2E";
    desativado_2.style.color = "#0E402D";

}

function mudar_pagina_cursos(ativo, desativado_1, desativado_2) {
    ativo.style.backgroundColor = "#000000";

    desativado_1.style.backgroundColor = "rgb(85, 85, 85)";

    desativado_2.style.backgroundColor = "rgb(85, 85, 85)";
}

cursos_btn_website.onclick = function () {
    mudar_btn_filtro(cursos_btn_website, cursos_btn_matematica, cursos_btn_outros);
}

cursos_btn_matematica.onclick = function () {
    mudar_btn_filtro(cursos_btn_matematica, cursos_btn_website, cursos_btn_outros);
}

cursos_btn_outros.onclick = function () {
    mudar_btn_filtro(cursos_btn_outros, cursos_btn_website, cursos_btn_matematica);
}

pagina_1.onclick = function () {
    mudar_pagina_cursos(pagina_1, pagina_2, pagina_3)
}

pagina_2.onclick = function () {
    mudar_pagina_cursos(pagina_2, pagina_1, pagina_3)
}

pagina_3.onclick = function () {
    mudar_pagina_cursos(pagina_3, pagina_1, pagina_2)
}