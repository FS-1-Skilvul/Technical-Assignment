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



async function filterkategori(){
  let kategori = document.getElementById(category)
    const apiUrl = await fetch("https://65280fcd931d71583df1d176.mockapi.io/course");
    let item = await apiUrl.json();
    const filterData = item.filter((course) => course.category === kategori.value
    )

    filterData.forEach((course) => {
      let listCourse = document.getElementById("apiData");
      let card = ``;

      
    })
  }