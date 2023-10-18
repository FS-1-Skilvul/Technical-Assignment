document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  localStorage.setItem("indexKelas", params.get("indexKelas"));

  const indexKelas = localStorage.getItem("indexKelas");

  async function getData() {
    try {
      const response = await fetch(
        "https://65280fcd931d71583df1d176.mockapi.io/course"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  getData().then((dataKelas) => {
    // Simpan data kelas ke dalam session storage
    sessionStorage.setItem("dataKelas", JSON.stringify(dataKelas[indexKelas]));

    // Ubah tampilan halaman sesuai kelas yang dipilih user
    const namaKelas = document.getElementById("nama-kelas");
    const gambarKelas = document.getElementById("gambar-kelas");
    const hargaKelas = document.getElementById("kelas-price");
    const deskripsiKelas = document.getElementById("deskripsi-kelas-paragraf");

    namaKelas.textContent = dataKelas[indexKelas].coursename;
    gambarKelas.src = dataKelas[indexKelas].image;
    hargaKelas.textContent = dataKelas[indexKelas].price;
    deskripsiKelas.textContent = dataKelas[indexKelas].description;
  });

  // Buka halaman pembayaran ketika button beli kelas diklik
  document.getElementById("btn-beli").addEventListener("click", () => {
    window.location.href = `pembayaran-kelas.html`;
  });
});
