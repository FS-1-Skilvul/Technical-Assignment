// async function filterByCategory(category) {
//   const apiUrl = await fetch("https://65280fcd931d71583df1d176.mockapi.io/course");

//   let item = await apiUrl.json();

//   const filterItems = item.filter((items) => items.category === category);

//   let cardContainer = document.getElementById("apiData");
//   filterItems.forEach((item) => {
//     let card = `
//         <div class="card">
//             <h5 class="card-title">${item.name}</h5>
//             <p class="card-text">${item.description}</p>
//         </div>
//     `;
//     cardContainer.innerHTML += card;
//   });
// }
// document.getElementById("pemasaran").addEventListener("click", function () {
//   filterByCategory("Category 1");
// });

// fetch("https://65280fcd931d71583df1d176.mockapi.io/course")
//   .then((response) => response.json())
//   .then((data) => {
//     const desiredCategory = "Pemasaran";
//     const filteredCourses = data.filter((course) => course.category === desiredCategory);

//     // Gunakan data yang telah difilter, misalnya, dengan menampilkan dalam elemen HTML
//     const courseList = document.getElementById("apiFilter");
//     filteredCourses.forEach((course) => {
//       const listItem = document.createElement("li");
//       listItem.textContent = course.name;
//       courseList.appendChild(listItem);
//     });
//   })
//   .catch((error) => {
//     console.error("Terjadi kesalahan dalam mengambil data dari API", error);
//   });


document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");

  async function getData() {
    try {
      const response = await fetch("https://65280fcd931d71583df1d176.mockapi.io/course");
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
    const cardsContainer = document.getElementById("apiFilter");
    cardsContainer.innerHTML = "";

    
    // Filter cards based on the specified category
    const filteredCards = dataKelas.filter((course) => course.category === category);
    
        const judul = document.createElement("h1")
        // judul.textContent = ${course.coursename}

    filteredCards.forEach((course) => {
      `<h1 class="">${course.coursename}</h1>`
      let card = `
      
                    <div class="col-category col-6 " style="max-width: 17rem">
                        <div class="card h-100 shadow-lg">
                            <img src="${course.image}" class="card-img-top p-1 shadow-sm" alt="...">
                            <div class="card-body d-flex flex-column justify-content-between">
                                <h5 class="card-title">${course.coursename}</h5>
                                <div class="card-text fw-bold">${course.category}</div>
                                <p class="card-text">${course.description}</p>
                                <div class="d-flex justify-content-around align-items-center">
                                    <h2 class="" style="font-size: 18px">${course.price}</h2>
                                    <a href="#" class="btn btn-primary" style="color:#ffff">Ikuti Kelas</a>
                                </div>
                            </div>
                        </div>
                     
                    </div>`;
      cardsContainer.innerHTML += card;
    });
  });
});


// async function filterAndDisplayCards(category) {
//   try {
//     // Fetch data from the API (replace with your actual API URL)
//     const apiUrl = "https://65280fcd931d71583df1d176.mockapi.io/course";
//     const response = await fetch(apiUrl);
//     const data = await response.json();

//     // Filter cards based on the category
//     const filteredCards = data.filter((course) => course.category === category);

//     // Display filtered cards in the container
//     const cardsContainer = document.getElementById("apiFilter");
//     cardsContainer.innerHTML = "";

//     filteredCards.forEach((course) => {
//       let card = `
//         <div class="col-category col-6 " style="max-width: 17rem">
//           <div class="card h-100 shadow-lg">
//             <img src="${course.image}" class="card-img-top p-1 shadow-sm" alt="...">
//             <div class="card-body d-flex flex-column justify-content-between">
//               <h5 class="card-title">${course.coursename}</h5>
//               <div class="card-text fw-bold">${course.category}</div>
//               <p class="card-text">${course.description}</p>
//               <div class="d-flex justify-content-around align-items-center">
//                 <h2 class="" style="font-size: 18px">${course.price}</h2>
//                 <a href="#" class="btn btn-primary" style="color:#ffff">Ikuti Kelas</a>
//               </div>
//             </div>
//           </div>
//         </div>`;
//       cardsContainer.innerHTML += card;
//     });
      
//        const newUrl = `filter.html?category=${category}`;
//        window.history.pushState({ category: category }, null, newUrl);
//   } catch (error) {
//     console.log(error);
//   }
// }

// // Event listener for category links
// document.querySelectorAll(".category-link").forEach((link) => {
//   link.addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent the default behavior of the link
//     const selectedCategory = this.getAttribute("data-category");
//     filterAndDisplayCards(selectedCategory);
//   });
// });

// async function filterAndDisplayCards() {
//   try {
//     // Fetch data from the API (replace with your actual API URL)
//     const apiUrl = "https://65280fcd931d71583df1d176.mockapi.io/course";
//     const response = await fetch(apiUrl);
//     const data = await response.json();

//     // Get the category selected in the dropdown
//     const categorySelect = document.getElementById("category-filter");
//     const selectedCategory = categorySelect.value;

//     const filteredCards = selectedCategory === "all" ? data : data.filter((course) => course.category === selectedCategory);
//     console.log(filteredCards);

//     // Display filtered cards in the container
//     const cardsContainer = document.getElementById("apiFilter");
//     cardsContainer.innerHTML = "";

//     filteredCards.forEach((course) => {
//       const card = document.createElement("div");

//       card.innerHTML = `  
     
//       <div class="col-category col-6 " style=" max-width: 17rem">
//     <div class="card h-100 shadow-lg">
//     <img src="${course.image}" class="card-img-top p-1 shadow-sm" alt="...">
//     <div class="card-body d-flex flex-column justify-content-between">
//       <h5 class="card-title">${course.coursename}</h5>
//       <div class="card-text fw-bold
//        ">${course.category}</div>
//       <p class="card-text">${course.description}</p>
//       <div class="d-flex justify-content-around align-items-center">
//         <h2 class="" style="font-size: 18px">${course.price}</h2>
//         <a href="#" class="btn btn-primary " style="color:#ffff">Ikuti Kelas</a>
//             </div>
//     </div>
//     </div>
//     </div>`;
//       cardsContainer.appendChild(card);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// // Call the function when the page loads and when the category dropdown changes
// document.getElementById("category-filter").addEventListener("change", filterAndDisplayCards);
