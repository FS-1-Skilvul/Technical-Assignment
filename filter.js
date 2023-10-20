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
                                    <a href="detail-kelas.html?indexKelas=${parseInt(course.id) - 1}" class="btn btn-primary" style="color:#ffff">Ikuti Kelas</a>
                                </div>
                            </div>
                        </div>
                     
                    </div>`;
      cardsContainer.innerHTML += card;
    });
  });
});
