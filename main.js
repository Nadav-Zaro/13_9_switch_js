var num = 3;

switch (num) {
    case 2:
        num = num * 2
        break;
    case 5:
        num = num * 5
        break;
    case 7:
        num = num * 7
        break;
    case 10:
        num = num * 10
        break;
    default: num;
}
console.log(num);

var nowDay = new Date().getDay();
var day;
switch (nowDay) {
    case 0:
        day = "sunday"
        break;
    case 1:
        day = "monday"
        break;
    case 2:
        day = "thusday"
        break;
    case 3:
        day = "wednesday"
        break;
    case 4:
        day = "thursday"
        break;
    case 5:
        day = "friday"
        break;
    case 6:
        day = "saturday"
        break;

    default: day
        break;
}
console.log(day);

var client = {
    clientName: "nadav",
    email: "nasd@gmail.com",
    clienType: "super admin"
}

switch (client.clienType) {
    case "admin":
        console.log("you are a admin");
        break;
    case "super admin":
        console.log("you are a super admin");
        break;
    default: console.log("you are loyal client");
        break;
}

const btn = document.getElementsByClassName("btn");
const fruit = document.getElementById("fruit");

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = () => {
        console.log(btn[i].innerText);
        fruit.innerHTML = ""
        fruit.innerHTML = `<p>${btn[i].innerText}</p>`
    }
}

var carArray = [
    {
        model: "Mercedez",
        price: 215000,
        year: 2021,
        discount: 25,
        carImg: "https://cdn.motor1.com/images/mgl/j7zJe/s3/is-mercedes-benz-working-on-1300-hp-hybrid-hypercar.jpg",
    },
    {
        model: "Volvo",
        price: 190000,
        year: 2019,
        discount: 22,
        carImg: "https://cms.autoscout24.ch/media/18830/volvo-v60-t6-2018-09.jpg",
    },
    {
        model: "tesla",
        price: 210000,
        year: 2022,
        discount: 15,
        carImg: "https://cdn.motor1.com/images/mgl/KXro0/s3/tesla-roadster-2020-1600-02.jpg",
    },
    {
        model: "lamborghini",
        price: 500000,
        year: 1999,
        discount: 33,
        carImg: "https://st.motortrend.com/uploads/sites/5/2019/01/Lamborghini-Huracan-Evo-front-three-quarters.jpg",
    },
    {
        model: "buggattie",
        price: 1000000,
        year: 1999,
        discount: 19,
        carImg: "http://www.thesupercars.org/wp-content/uploads/2008/09/2009-bugatti-164-veyron-fbg-par-hermes.jpg",
    },
]

const cars = document.getElementById("cars");

for (let i = 0; i < carArray.length; i++) {
    carArray[i].afterDis = carArray[i].price - (carArray[i].price * carArray[i].discount / 100);
    cars.innerHTML += `<img style="width:200px;height:200px;"src="${carArray[i].carImg}">
    <p>Model: ${carArray[i].model}</p>
    <p>price: ${carArray[i].price}$</p>
    <p>year: ${carArray[i].year}</p>
    <p>after discount: ${carArray[i].afterDis}$</p>
    `;
    switch (carArray[i].discount) {
        case 25:
            alert("crazy sell")
            break;
            case 10:
                alert("good deal for you")
                break;
                case 7:
                    alert("not bad")
                    break;
                    case 3:
                        alert("this is joke")
                        break;

        default:
            break;
    }
}
console.log(carArray);

