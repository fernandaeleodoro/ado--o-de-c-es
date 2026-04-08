let cpfsCadastrados = ["12345678900", "11111111111"];

const form = document.getElementById("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let nome = nomeVal("nome", 3);
    let email = emailVal();
    let telefone = nomeVal("telefone", 8);
    let cpf = cpfVal();
    let idade = document.getElementById("idade").value;
    let cidade = nomeVal("cidade", 1);
    let moradia = document.getElementById("moradia").value;
    let quintal = document.getElementById("quintal").value;
    let pet = document.getElementById("pet").value;
    let horas = document.getElementById("horas").value;
    let motivo = nomeVal("motivo", 10);
    let termo = document.getElementById("termo").checked;

    if(!nome || !email || !telefone || !cpf || !cidade || !motivo){
        alert("Corrija os campos");
        return;
    }

    if(idade < 18) return alert("Menor de idade");
    if(!termo) return alert("Aceite o termo");

    if(cpfsCadastrados.includes(cpf)) return alert("CPF duplicado");

    if(moradia === "apartamento" && quintal === "sim"){
        return alert("Apartamento não pode ter quintal");
    }

    if(horas > 8){
        let j = prompt("Justifique:");
        if(!j) return;
    }

    if(pet === "nao"){
        alert("A ONG acompanhará sua adaptação");
    }

    if(["quero","porque sim"].includes(motivo.toLowerCase())){
        return alert("Motivo inválido");
    }

    if(!confirm("Possui condições financeiras?")){
        return alert("Adoção negada");
    }

    if(confirm("Decidiu hoje?")){
        alert("Evite decisões impulsivas");
    }

    document.getElementById("resultado").innerHTML = `
        <h3>Solicitação enviada com sucesso!</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Cidade:</strong> ${cidade}</p>
    `;
});

// funções auxiliares
function nomeVal(id, min){
    let campo = document.getElementById(id);
    let erro = campo.nextElementSibling;

    if(campo.value.length < min){
        erro.innerText = "Campo inválido";
        return null;
    } else {
        erro.innerText = "";
        return campo.value;
    }
}

function emailVal(){
    let campo = document.getElementById("email");
    let erro = campo.nextElementSibling;

    if(!campo.value.includes("@")){
        erro.innerText = "Email inválido";
        return null;
    } else {
        erro.innerText = "";
        return campo.value;
    }
}

function cpfVal(){
    let campo = document.getElementById("cpf");
    let erro = campo.nextElementSibling;

    if(campo.value === ""){
        erro.innerText = "CPF obrigatório";
        return null;
    } else {
        erro.innerText = "";
        return campo.value;
    }
}