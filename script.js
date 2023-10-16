// function setActive(element) {
//   // Remove the "active" class from all navbar items
//   const navbarItems = document.querySelectorAll('nav a');
//   navbarItems.forEach(item => item.classList.remove('active'));

//   // Add the "active" class to the clicked navbar item
//   element.classList.add('active');
// }

const nav = document.querySelector("nav");

nav.addEventListener("click", (e) => {
    // Hanya mengubah warna jika yang diklik adalah elemen <a>
    if (e.target.tagName === 'A') {
        // Hapus kelas "active" dari semua elemen <a> di dalam <nav>
        const navLinks = document.querySelectorAll("nav a");
        navLinks.forEach(link => link.classList.remove('active'));

        // Tambahkan kelas "active" pada elemen <a> yang diklik
        e.target.classList.add('active');
    }
});


async function getCourses() {
  try {
    const apiUrl = await fetch("https://65280fcd931d71583df1d176.mockapi.io/course");
   
    let item = await apiUrl.json();
    const limit = 12;
    const sliceData = item.slice(0, limit);
    sliceData.forEach((course) => {
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
      <div class="d-flex justify-content-around align-items-center">
              <h2 class="" style="font-size: 18px">${course.price}</h2>
              <a href="#" class="btn btn-primary " style="color:#ffff">Ikuti Kelas</a>
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



// async function filterkategori(){
//   let kategori = document.getElementById(category)
//     const apiUrl = await fetch("https://65280fcd931d71583df1d176.mockapi.io/course");
//     let item = await apiUrl.json();
//     const filterData = item.filter((course) => course.category === kategori.value
//     )

//     filterData.forEach((course) => {
//       let listCourse = document.getElementById("apiData");
//       let card = ``;

      
//     })
//   }



  // async function myapp() {
  //   const apiUrl = await fetch("https://65280fcd931d71583df1d176.mockapi.io/course");
  //       let item = await apiUrl.json();
  //   const buttons = document.querySelectorAll("li");
  //   const cards = document.querySelectorAll(".card");
  
  //   function filter(category) {
  //     item.forEach((item) => {
  //       const isItemFiltered = !item.classList.contains(category);
  //       const isShowAll = category.toLowerCase() === "semua kelas";
  //       if (isItemFiltered && !isShowAll) {
  //         item.classList.add("hide");
  //       } else {
  //         item.classList.remove("hide");
  //       }
  //     });
  //   }
  
  //   buttons.forEach((button) => {
  //     button.addEventListener("click", () => {
  //       const currentCategory = button.dataset.filter;
  //       console.log(currentCategory);
  //       filter(currentCategory, cards);
  //     });
  //   });
  // }
  
  // myapp();
  