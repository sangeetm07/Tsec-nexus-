
// ===============================
// Navbar Shadow
// ===============================

window.addEventListener("scroll",()=>{

    const nav=document.querySelector("nav");

    if(window.scrollY>80){

        nav.style.background="rgba(8,21,46,.95)";

        nav.style.boxShadow="0 10px 30px rgba(0,0,0,.3)";

    }

    else{

        nav.style.background="rgba(255,255,255,.08)";

        nav.style.boxShadow="none";

    }

});

// ===============================
// Counter Animation
// ===============================

const counters=document.querySelectorAll(".box h2");

counters.forEach(counter=>{

    const update=()=>{

        const text=counter.innerText;

        const target=parseInt(text.replace(/[^0-9]/g,""));

        let current=parseInt(counter.dataset.count)||0;

        const increment=Math.ceil(target/80);

        if(current<target){

            current+=increment;

            counter.dataset.count=current;

            if(text.includes("K")){

                counter.innerText=current+"K+";

            }

            else if(text.includes("Cr")){

                counter.innerText="₹"+current+"Cr";

            }

            else{

                counter.innerText=current+"+";

            }

            requestAnimationFrame(update);

        }

        else{

            counter.innerText=text;

        }

    }

    update();

});

// ===============================
// Scroll Reveal
// ===============================

const reveal=document.querySelectorAll(

".building,.feature-card,.story-card,.box,.company"

);

function revealItems(){

    reveal.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        const windowHeight=window.innerHeight;

        if(top<windowHeight-100){

            item.style.opacity="1";

            item.style.transform="translateY(0)";

        }

    });

}

reveal.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(40px)";

    item.style.transition=".7s";

});

window.addEventListener("scroll",revealItems);

revealItems();

// ===============================
// Building Click Effects
// ===============================

document.querySelectorAll(".building").forEach(building=>{

    building.addEventListener("click",()=>{

        building.style.transform="scale(.95)";

        setTimeout(()=>{

            building.style.transform="";

        },150);

    });

});

// ===============================
// Donation Button
// ===============================

const donate=document.querySelector(".donate-btn");

if(donate){

    donate.addEventListener("click",()=>{

        alert("Thank you for supporting TSEC ❤️");

    });

}

// ===============================
// Contact Form
// ===============================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Message Sent Successfully!");

form.reset();

});

}

// ===============================
// Floating Effect
// ===============================

setInterval(()=>{

document.querySelectorAll(".building").forEach(card=>{

card.style.transform="translateY(-5px)";

setTimeout(()=>{

card.style.transform="translateY(0px)";

},800);

});

},4000);

// ===============================
// OPEN MODALS
// ===============================

const jobsBuilding = document.querySelector(".jobs");
const alumniBuilding = document.querySelector(".alumni");
const donateBuilding = document.querySelector(".donate");
const eventsBuilding = document.querySelector(".events");
const networkBuilding = document.querySelector(".network");

if(jobsBuilding){
    jobsBuilding.onclick = () =>{
        document.getElementById("jobsModal").style.display="flex";
    };
}

if(alumniBuilding){
    alumniBuilding.onclick = () =>{
        document.getElementById("alumniModal").style.display="flex";
    };
}

if(donateBuilding){
    donateBuilding.onclick = () =>{
        document.getElementById("donateModal").style.display="flex";
    };
}

if(eventsBuilding){
    eventsBuilding.onclick = () =>{
        document.getElementById("eventsModal").style.display="flex";
    };
}

if(networkBuilding){
    networkBuilding.onclick = () =>{
        document.getElementById("networkModal").style.display="flex";
    };
}

// ===============================
// CLOSE MODALS
// ===============================

document.querySelectorAll(".close").forEach(btn=>{

    btn.onclick=()=>{

        btn.closest(".modal").style.display="none";

    };

});

// ===============================
// CLICK OUTSIDE TO CLOSE
// ===============================

window.onclick=(e)=>{

    document.querySelectorAll(".modal").forEach(modal=>{

        if(e.target===modal){

            modal.style.display="none";

        }

    });

};