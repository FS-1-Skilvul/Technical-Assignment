document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  localStorage.setItem("indexKelas", params.get("indexKelas"));

  const indexKelas = localStorage.getItem("indexKelas");

  async function getData() {
    try {
      // Fetch data Kelas
      const response1 = await fetch(
        "https://65280fcd931d71583df1d176.mockapi.io/course"
      );
      if (!response1.ok) {
        throw new Error(`HTTP error! Status: ${response1.status}`);
      }

      const data1 = await response1.json();

      // Fetch data Pengajar dan Modul Kelas
      const response2 = await fetch(
        "https://6524c553ea560a22a4ea1537.mockapi.io/modul-pengajar"
      );
      if (!response2.ok) {
        throw new Error(`HTTP error! Status: ${response2.status}`);
      }

      const data2 = await response2.json();

      // Simpan data kelas ke dalam session storage
      sessionStorage.setItem(
        "dataKelas",
        JSON.stringify(data1[indexKelas])
      );

      // Ubah tampilan halaman sesuai kelas yang dipilih user
      // Get elemen-elemen data kelas
      const namaKelas = document.getElementById("nama-kelas");
      const gambarKelas = document.getElementById("gambar-kelas");
      const hargaKelas = document.getElementById("kelas-price");
      const deskripsiKelas = document.getElementById(
        "deskripsi-kelas-paragraf"
      );

      // Get elemen list modul kelas
      const listModulKelas = document.getElementById("list-modul-kelas");

      // Get elemen-elemen data pengajar
      const namaPengajar = document.getElementById("nama-pengajar");
      const gambarPengajar = document.getElementById("gambar-pengajar");
      const titlePengajar = document.getElementById("title-pengajar");
      const detailPengajar = document.getElementById("detail-pengajar");

      // Ubah data kelas
      namaKelas.textContent = data1[indexKelas].coursename;
      gambarKelas.src = data1[indexKelas].image;
      hargaKelas.textContent = data1[indexKelas].price;
      deskripsiKelas.textContent = data1[indexKelas].description;

      const dataSinkron = data2.find((item) => item.idKelas == data1[indexKelas].id); // get data2 (pengajar dan modul) yang sesuai dengan data1 (kelas) yang dipilih user

      // Ubah data modul
      dataSinkron.modul.map((mod, index) => {
        listModulKelas.innerHTML += `
          <li class="mb-2 px-3 py-2 d-flex align-items-center blue-1-border rounded-3">
            <span class="rounded-circle text-center bg-warning text-white">${index + 1}</span>
            <p class="ms-3 blue-1-color">${mod}</p>
          </li>
        `
      })

      // Ubah data pengajar
      namaPengajar.textContent = dataSinkron.namaPengajar;
      gambarPengajar.src = dataSinkron.imgPengajar;
      titlePengajar.textContent = dataSinkron.title;
      detailPengajar.textContent = dataSinkron.detailPengajar;

    } catch (error) {
      console.error("Error:", error);
    }
  }

  getData();

  // Buka halaman pembayaran ketika button beli kelas diklik
  document.getElementById("btn-beli").addEventListener("click", () => {
    window.location.href = `pembayaran-kelas.html`;
  });
});
