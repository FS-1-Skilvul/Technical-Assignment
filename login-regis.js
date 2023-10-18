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
  localStorage.setItem("email", json);


  alert("AKUN BERHASIL DIBUAT!");
  document.location.href = "login.html";

}


function loginFunc(e) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  console.log(email);
  let password = document.getElementById("password").value;
  console.log(password);
  let result = document.getElementById("result");
  console.log(result);

  let user = localStorage.getItem("email");
  console.log(user);
  let data = JSON.parse(user);

  


  if (email == "" && password == "") {
    result.innerHTML = "Masukan Email dan Password dengan Benar!";
  } else if (email == data.email && password == data.password) {
    alert("BERHASIL LOGIN!");
    document.location.href = "index.html";
  } else {
    result.innerHTML = "Password Salah!";
  }
}
