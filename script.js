const summary = document.querySelector('.wrapper-sum')
const averageEl = document.querySelector('.percent')

let sum = 0
fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
      for (const i of data) {
        summary.innerHTML += `
         <section class="category">
          <div class="type">
            <img 
              src="${i.icon}" alt="${i.category} icon">
            <h3 class="name" id="${i.category.toLowerCase()}">${i.category}</h3>
          </div>
          <div class="score">
            <h4 class="point"> ${i.score >=0 ? i.score : 'N/A'}</h4>
            <em>/</em>
            <em>100</em>
          </div>
        </section>

      `
        sum += i.score ? i.score : 0
      }
      
      let averageScore = Math.floor(
        sum / data.length)
        
      averageEl.textContent = averageScore
      
      summary.insertAdjacentHTML(
        "beforeend",
        `        
        <p class="wrapper-btn">
          <button class="continue-btn">
            Continue
          </button>
        </p>
       `)
      })