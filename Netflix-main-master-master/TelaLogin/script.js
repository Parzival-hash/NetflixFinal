const usuario = [
    {
        email: 'usuario1@hotmail.com',
        senha: 'Teste.123'
    },
    {
        email: 'usuario2@hotmail.com',
        senha: 'Teste.123'
    },
    {
        email: 'usuario3@hotmail.com',
        senha: 'Teste.123'
    },
    {
        email: 'usuario4@hotmail.com',
        senha: 'Teste.123'
    }
]

let botao = document.getElementById('btnEntrar');

botao.addEventListener('click', function logar (evt){

   evt.preventDefault()

    let pegaUsuario = document.getElementById('inptEgmail').value;
    let pegaSenha = document.getElementById('inptSenha').value;
    let validarLogin = false;


    for(let i in usuario){
        
        if (pegaUsuario == usuario[i].email && pegaSenha == usuario[i].senha){

            validarLogin = true;
            break
        }
    }


    if(validarLogin == true){
        location.href = '../perfil/perfil.html'
    }else{
        Swal.fire({
            title: 'Senha incorreta',
            text: "Sua senha ou Usuário está incorreta",
            icon: 'warning',

            confirmButtonColor: '#3085d6',

          })
    }
})
