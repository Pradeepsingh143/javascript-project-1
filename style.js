const courses = [
    {
        name : 'Complete JavaScript Course',
        price : 20
    },
    {
        name : 'Complete C++ Course',
        price : 30
    },
    {
        name : 'Complete Java Course',
        price : 10
    },
    {
        name : 'Complete React Js Course',
        price : 50
    },
    {
        name : 'Complete Angular Course',
        price : 20
    },
]


function generateList() {
    const courseList = document.querySelector('.courseList');
    courseList.innerHTML = '';
    courses.forEach((courses)=>{
        // const ul = document.createElement('ul');
        // ul.classList.add('list-items', 'flex', 'justify-between', 'p-3', 'px-6', 'bg-slate-600', 'hover:bg-slate-500', 'rounded-xl');

        // const coursesName = document.createElement('li');
        // coursesName.classList.add('list-item');
        // ul.appendChild(coursesName);

        // const coursesPrice = document.createElement('li');
        // coursesPrice.classList.add('list-item');
        // ul.appendChild(coursesPrice);

        // const Name = document.createTextNode(courses.name);
        // coursesName.appendChild(Name);

        // const Price = document.createTextNode(courses.price);
        // coursesPrice.appendChild(Price);

        // courseList.appendChild(ul);

   courseList.innerHTML += 
        `<ul class="list-items flex justify-between p-3 px-6 bg-slate-600 hover:bg-slate-500 rounded-xl">
        <li class="list-item">${courses.name}</li>
        <li class="list-item">${courses.price}</li>
      </ul>`
    })
}
generateList();

const sortPriceHighToLow = document.getElementById('btn-sort-l/h');
sortPriceHighToLow.addEventListener('click', ()=>{
    courses.sort((a, b) => a.price - b.price);
    generateList();
});

const sortPriceLowToHigh = document.getElementById('btn-sort-h/l');
sortPriceLowToHigh.addEventListener('click', ()=>{
    courses.sort((a, b) => b.price - a.price);
    generateList();
});
