let userName = prompt("Adınız Nedir?");
 document.getElementById("myName").innerHTML; `${userName}`;

 if (userName.length > 0) {
    myName.innerHTML = `${userName}`;
}else{
    alert("Lütfen bir isim giriniz.")
    location.reload(); // sayfayı yeniliyor 
}

const days = ["Pazar","Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

const d = new Date();

let hour= d.getHours();
    minutes= d.getMinutes();
    second=d.getSeconds();
    day = days[d.getDay()];
document.getElementById("myClock").innerHTML = `${hour}: ${minutes}: ${second}: ${day}`;

