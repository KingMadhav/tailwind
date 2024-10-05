let main = document.querySelector("#main");
let card = "";
let data = [
    { money: "120", title: "Senior UI Developer", companyicon: '<i class="ri-amazon-line font-bold text-4xl mx-4"></i>', bg: "bg-purple-200" },
    { money: "150", title: "Senior Backend Developer", companyicon: '<i class="ri-google-fill font-bold text-4xl mx-4 "></i>', bg: "bg-amber-500" },
    { money: "125-145", title: "Azure Data Engineer", companyicon: '<i class="ri-google-fill font-bold text-4xl mx-4 "></i>', bg: "bg-lime-600" },
    { money: "125-145", title: "Azure Data Engineer", companyicon: '<i class="ri-google-fill font-bold text-4xl mx-4 "></i>', bg: "bg-amber-500" },
    { money: "150", title: "Senior Backend Developer", companyicon: '<i class="ri-flutter-fill font-bold text-4xl mx-4 "></i>', bg: "bg-lime-600" },
    { money: "120", title: "Senior UI Developer", companyicon: '<i class="ri-flutter-fill font-bold text-4xl mx-4 "></i>', bg: "bg-purple-200" }
]
data.forEach(function (e) {
    card += ` <div class="card1 mt-5 h-72 w-72 bg-white p-1 mx-auto rounded-2xl">
                <div class="h-56 ${e.bg} mx-auto p-5 rounded-2xl ">
                    <nav class="flex justify-between">
                        <div class="money font-bold">$${e.money}/hr</div>
                        <div><i class="ri-bookmark-line font-bold text-2xl"></i></div>
                    </nav>
                    <div class="titlehead flex items-end justify-between">
                        <h1 class="mt-5 text-3xl font-semibold w-2/3">${e.title}</h1>
                        <i class="ri-arrow-right-line  font-bold text-2xl "></i>
                    </div>
                    <div class="bubbles flex justify-center gap-1 mt-14">
                        <div class="bulbula rounded-full h-3 w-3 bg-slate-400"></div>
                        <div class="bulbula rounded-full h-3 w-3 bg-slate-300"></div>
                        <div class="bulbula rounded-full h-3 w-3 bg-slate-300"></div>
                        <div class="bulbula rounded-full h-3 w-3 bg-slate-300"></div>
                    </div>
                </div>
                <div class="flex justify-center justify-between items-center h-14 ">
                    <div class="companyicon">${e.companyicon}</i></div>
                    <h2 class="w-1/3 mx-2 font-bold">${e.title}</h2>
                    <button class="bg-black w-1/5 py-1 rounded-2xl text-white">View</button>
                </div>
            </div>`
})
document.querySelector("#main").innerHTML = card;