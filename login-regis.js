function register(e) {
  event.preventDefault();

  let namaLengkap = document.getElementById("namaLengkap").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user = {
    namaLengkap: namaLengkap,
    email: email,
    password: password,
  };

  let json = JSON.stringify(user);
  localStorage.setItem(namaLengkap, json);

  result.innerHTML = `Nama Akun Dengan Nama Lengkap : ${namaLengkap} Berhasil dibuat!`;
}

function loginFunc(e) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let result = document.getElementById("result");

  let user = localStorage.getItem(email);
  let data = JSON.parse(user);

  if ((user = null)) {
    result.innerHTML = "Masukan Email dan Password dengan Benar!";
  } else if (email == data.email && password == data.password) {
    result.innerHTML = "BERHASIL LOGIN!";
  } else {
    result.innerHTML = "Password Salah!";
  }
}
