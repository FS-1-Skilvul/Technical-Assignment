function register(e) {
  event.preventDefault();

  const namaLengkap = document.getElementById("namaLengkap").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const result = document.getElementById("result");

  if (localStorage.getItem(email)) {
    result.innerHTML = "Akun dengan email tersebut sudah ada!";
  } else {
    localStorage.setItem(email, JSON.stringify({ namaLengkap, password }));
    alert("BERHASIL REGIS!");
    document.location.href = "login.html";
  }
}

function loginFunc(e) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const result = document.getElementById("result");

  const user = JSON.parse(localStorage.getItem(email));
  if (user && user.password === password) {
    alert("BERHASIL LOGIN!");
    document.location.href = "index.html";
  } else {
    result.innerHTML = "Login gagal. Pastikan email dan kata sandi benar!";
  }
}
