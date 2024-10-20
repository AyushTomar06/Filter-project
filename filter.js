
const data = [
    // {
    //     id: 1,
    //     name: "Invicta Men's Pro Diver",
    //     img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    //     price: 74,
    //     cat: "Dress",
    // },
    {
        id: 1,
        name: "Invicta Men's Pro Diver 2",
        img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price: 74 ,
        cat: "Dress",
    },
    {
        id: 2,
        name: "Timex Men's Expedition Scout ",
        img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
        price: 40,
        cat: "Modern",
    },
    {
        id: 3,
        name: "Breitling Superocean Heritage",
        img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
        price: 200,
        cat: "Luxury",
    },
    {
        id: 4,
        name: "Casio Classic Resin Strap ",
        img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
        price: 16,
        cat: "Sport",
    },
    {
        id: 5,
        name: "Garmin Venu Smartwatch ",
        img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
        price: 74,
        cat: "Casual",
    },
];
const search = document.querySelector(".search");
const types = document.querySelector(".types");
const pricerange = document.querySelector(".pricernge");

const pricenumber = document.querySelector(".pricenumber");
const content = document.querySelector(".content");

function display(data) {

    content.innerHTML = data.map((watch) =>
        `
        <div class="img">
                <img src="${watch.img}" alt="">
                <span>
                    ${watch.name}
                </span>
                <span>
                    ${watch.price} $
                </span>

            </div>
        
        `
    )

}

search.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();//value=words
   

    if (value) {
        display(data.filter(e => e.name.toLowerCase().indexOf(value) !== -1))

    }
    else {
        display(data);
    }



});
function categories(data) {

    const allcats = data.map((e) => e.cat,
    );
    const categories=["All",...allcats];
    types.innerHTML = categories.map(e =>
        `  
            <span class="cats">  ${e}   </span>
        `

        // console.log(e.cat)
        
    ).join("");

    types.innerHTML = categories
    .map(
      (cat) =>
        `
      <span class="cat">${cat}</span>
    `
    )
    .join("");

  types.addEventListener("click", (e) => {
    const selectedCat = e.target.textContent;
    console.log(selectedCat)

    selectedCat === "All"
      ? display(data)
      : display(data.filter((item) => item.cat === selectedCat));
  });
};
function priceset(){
    const prices=data.map(e=> e.price);
    const maxprice=Math.max(...prices);
    const minprice=Math.min(...prices);
  
    pricerange.min=minprice;
    pricerange.max=maxprice;
    pricerange.value=maxprice;
    //value mtlb kis point pr rhega slider dot
    
    pricenumber.textContent="$"+maxprice

    pricerange.addEventListener("input",(e)=>{
        console.log(e.target.value)
        pricenumber.textContent="$"+e.target.value;
        display(data.filter(item=>
            item.price <= e.target.value
        ))
    })
   
}
priceset();
 
display(data);
categories(data);

