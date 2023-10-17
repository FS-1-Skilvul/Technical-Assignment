document.addEventListener("DOMContentLoaded", function () {
  let kelasDipilih = JSON.parse(localStorage.getItem("dataKelas"));

  const namaKelas = document.getElementById("nama-kelas");
  const hargaKelas = document.getElementById("harga-kelas");
  const namaKelasModal = document.getElementById("class-payment-success");
  const totalBiaya = document.getElementById("total-biaya");

  namaKelas.textContent = kelasDipilih.coursename;
  hargaKelas.textContent = kelasDipilih.price;
  namaKelasModal.textContent = kelasDipilih.coursename;
  totalBiaya.textContent = kelasDipilih.price;

  const btnBeliKelas = document.getElementById("btn-beli");

  btnBeliKelas.addEventListener("click", function (e) {
    e.preventDefault();
    const isRadioSelected = checkPaymentMethod();
    console.log(isRadioSelected);

    if (!isRadioSelected) {
        document.getElementById("payment-error-warning").classList.remove("d-none");
    } else {
        document.getElementById("payment-error-warning").classList.add("d-none");
        // buat instance modal bootstrap agar bisa menggunakan method show
        const modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));

        // Pake method show untuk membuka modal bootstrap
        modal.show();
    }
  });
});

// Cek apakah user sudah memilih metode pembayaran
function checkPaymentMethod() {
  const radioButtons = document.querySelectorAll(
    ".metode-pembayaran input[type='radio']"
  );
  let isRadioSelected = false;

  radioButtons.forEach((radioButton) => {
    if (radioButton.checked) {
      isRadioSelected = true;
    }
  });

  return isRadioSelected;
}
