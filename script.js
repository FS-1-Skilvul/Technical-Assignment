// function includeNavbar() {
//     fetch('navbar.html')
//     .then(response => response.text())
//     .then(data => {
//         document.getElementById('navbar-container').innerHTML = data;
//     const menuList = document.getElementById('menu-list');
//     const menuIcon = document.getElementById("menu-icon");
//    menuIcon.addEventListener("click", () => {
//     menuList.classList.toggle('hidden')

//    })

// });
// }

// includeNavbar()

async function getCourses() {
  try {
    const apiUrl = await fetch("https://65280fcd931d71583df1d176.mockapi.io/course");
    const apiDataElement = document.getElementById("apiData");

    let item = await apiUrl.json();
    const limit = 12;
    const sliceData = item.slice(0, limit);
    sliceData.forEach((course, index) => {
      let listCourse = document.getElementById("apiData");
      let card = `
   
   <div class="col-category col-6 " style=" max-width: 17rem">
    <div class="card h-100 shadow-lg">
    <img src="${course.image}" class="card-img-top p-1 shadow-sm" alt="...">
    <div class="card-body d-flex flex-column justify-content-between">
      <h5 class="card-title">${course.coursename}</h5>
      <div class="card-text fw-bold
       ">${course.category}</div>
      <p class="card-text">${course.description}</p>
      <div class="d-flex justify-content-around align-items-start">
              <h2 class="" style="font-size: 18px">${course.price}</h2>
              <a href="#" class="btn p-1" style="color:#64CCC5">Ikuti Kelas</a>
            </div>
      
    </div>
    </div>
    </div>`;

      listCourse.innerHTML += card;
    });
  } catch (error) {
    console.log(error);
  }
}
getCourses();

[
  {
    "coursename": "Manajemen Keuangan Bisnis",
    "description": "Pelajari prinsip-prinsip dasar manajemen keuangan. Dari perencanaan anggaran hingga analisis laporan keuangan",
    "price": "Rp. 60.000",
    "image": "https://www.bfi.co.id/Blog/Blog%20New/Perusahaan%20Pembiayaan%20BFI%20Finance.jpg",
    "category": "Keuangan",
    "id": "1"
  },
  {
    "coursename": "Strategi Pemasaran Digital",
    "description": "Pahami strategi pemasaran digital yang efektif meningkatkan visibilitas bisnis online. Dari SEO hingga pemasaran media sosial",
    "price": "Rp. 50.000",
    "image": "https://www.mas-software.com/wp-content/uploads/2022/12/Strategi-Pemasaran.jpg",
    "category": "Pemasaran",
    "id": "2"
  },
  {
    "coursename": "Fundamentals Desain Produk",
    "description": "Pelajari dasar desain produk, dari konsepsi ide hingga prototipe, untuk menciptakan produk yang menarik dan fungsional",
    "price": "Rp. 70.000",
    "image": "https://www.quipper.com/id/blog/wp-content/uploads/2021/04/Template-Image-Blog-white-24-04-2021-b.jpg",
    "category": "Desain Produk",
    "id": "3"
  },
  {
    "coursename": "Membangun Brand yang Kuat Pemasaran UMKM",
    "description": "Pahami tren pemasaran digital, termasuk penggunaan iklan online, email marketing, dan pemanfaatan influencer",
    "price": "Rp. 100.000",
    "image": "https://www.nuvonium.com/images/uploads/blog/_large/shutterstock_197106008.jpg",
    "category": "Pemasaran",
    "id": "4"
  },
  {
    "coursename": "Menjadi Pemimpin yang Mampu Membuat Perubahan",
    "description": "Pelajari identifikasi peluang hingga merancang solusi yang unik, temukan peran penting kreativitas kewirausahaan yang sukses",
    "price": "GRATIS",
    "image": "https://www.kubikleadership.com/wp-content/uploads/2021/05/II.-jenis-leadership.jpg",
    "category": "Kewirausahaan",
    "id": "5"
  },
  {
    "coursename": "Menciptakan Produk Unik yang Meninggalkan Jejak di Pasar",
    "description": "Pelajari langkah-langkah praktis untuk menciptakan produk dengan daya tarik visual yang membangun citra merk di pasaran",
    "price": "Rp. 80.000",
    "image": "https://images.bisnis.com/posts/2022/02/22/1503270/kemasan.jpg",
    "category": "Desain Produk",
    "id": "6"
  },
  {
    "coursename": "Menjadi Pemimpin yang Visioner: Pelatihan Soft Skills untuk Pengusaha UMKM",
    "description": "Fokus pada komunikasi efektif dan kepemimpinan, pelajari panduan langkah demi langkah mencapai kesuksesan bisnis",
    "price": "Rp. 70.000",
    "image": "https://www.intipesan.com/wp-content/uploads/2018/05/empat.teorikepemimpinan.intipesan.jpg",
    "category": "Soft Skills",
    "id": "7"
  },
  {
    "coursename": "Kreatifitas Tanpa Batas: UMKM dalam Revolusi Desain",
    "description": "Pelajari seni penataan warna, bentuk, dan material untuk menciptakan produk yang menarik perhatian.",
    "price": "Rp.120.000",
    "image": "https://www.maisondidee.com/wp-content/uploads/2021/10/blog-packaging-obalovy-design-ako-strategicky-nastroj-znaciek-10.jpg",
    "category": "Pemasaran",
    "id": "8"
  },
  {
    "coursename": "Mengasah Problem Solving dalam Bisnis",
    "description": ": Soft Skills untuk Sukses UMKMPraktikkan keterampilan problem-solving untuk merancang solusi kreatif dan inovatif",
    "price": "Rp. 90.000",
    "image": "https://www.dictio.id/uploads/db3342/original/2X/3/3d27bac71f9fa022973e11e72ea2c79a4d643e2f.jpg",
    "category": "Kewirausahaan",
    "id": "9"
  },
  {
    "coursename": "coursename 10",
    "description": "description 10",
    "price": "price 10",
    "image": "image 10",
    "category": "category 10",
    "id": "10"
  },
  {
    "coursename": "coursename 11",
    "description": "description 11",
    "price": "price 11",
    "image": "image 11",
    "category": "category 11",
    "id": "11"
  },
  {
    "coursename": "coursename 12",
    "description": "description 12",
    "price": "price 12",
    "image": "image 12",
    "category": "category 12",
    "id": "12"
  },
  {
    "coursename": "coursename 13",
    "description": "description 13",
    "price": "price 13",
    "image": "image 13",
    "category": "category 13",
    "id": "13"
  },
  {
    "coursename": "coursename 14",
    "description": "description 14",
    "price": "price 14",
    "image": "image 14",
    "category": "category 14",
    "id": "14"
  },
  {
    "coursename": "coursename 15",
    "description": "description 15",
    "price": "price 15",
    "image": "image 15",
    "category": "category 15",
    "id": "15"
  },
  {
    "coursename": "coursename 16",
    "description": "description 16",
    "price": "price 16",
    "image": "image 16",
    "category": "category 16",
    "id": "16"
  }
]
