const nav = document.querySelector("nav");

nav.addEventListener("click", (e) => {
  // Hanya mengubah warna jika yang diklik adalah elemen <a>
  if (e.target.tagName === "A") {
    // Hapus kelas "active" dari semua elemen <a> di dalam <nav>
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => link.classList.remove("active"));

    // Tambahkan kelas "active" pada elemen <a> yang diklik
    e.target.classList.add("active");
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
   
   <div class="col-category col-6  mx-auto" style=" max-width: 17rem">
    <div class="card h-100 shadow-lg">
    <img src="${course.image}" class="card-img-top p-1 shadow-sm" alt="...">
    <div class="card-body d-flex flex-column justify-content-between">
      <h5 class="card-title">${course.coursename}</h5>
      <div class="card-text fw-bold
       ">${course.category}</div>
      <p class="card-text">${course.description}</p>
      <div class="d-flex justify-content-around align-items-center">
              <h2 class="" style="font-size: 18px">${course.price}</h2>

              <a href="detail-kelas.html?indexKelas=${index}" class="btn btn-primary " style="color:#ffff">Ikuti Kelas</a>

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

// --------------------- filter

async function filterAndDisplayCards() {
  try {
    // Fetch data from the API (replace with your actual API URL)
    const apiUrl = "https://65280fcd931d71583df1d176.mockapi.io/course";
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Get the category selected in the dropdown
    const categorySelect = document.getElementById("category-filter");
    const selectedCategory = categorySelect.value;

    // Filter cards based on the selected category from the dropdown
    // const filteredCards = selectedCategory === "all" ? data : data.filter((course) => course.category.trim() === selectedCategory.trim());

    const filteredCards = selectedCategory === "all" ? data : data.filter((course) => course.category === selectedCategory);
    console.log(filteredCards);
    // Display filtered cards in the container
    const cardsContainer = document.getElementById("apiData");
    cardsContainer.innerHTML = "";

    filteredCards.forEach((course) => {
      const card = document.createElement("div");
      // card.className = "col-category col-6";
      // card.style.maxWidth = "17rem";

      card.innerHTML = `  
   
       <div class="col mx-auto" style=" max-width: 17rem">
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
      cardsContainer.appendChild(card);
    });
  } catch (error) {
    console.log(error);
  }
}

document.getElementById("category-filter").addEventListener("change", filterAndDisplayCards);

