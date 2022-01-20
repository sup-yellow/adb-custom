(function addFrames() {
  try {
    window.onresize = function (event) {
      var frameHeight = window.innerHeight - 104 - 48;
      document.getElementById(
        "chatBoxMainContainer"
      ).style.height = `${frameHeight}px`;
    };
    document.getElementById("player").style.width = "0px";
    document.querySelector("#chatContainer").insertAdjacentHTML(
      "afterbegin",
      `<div class="mod-head-side-bar-container">
         <div class="overflow-container-header">
               <ul class="header-wrapper" style="display: flex;justify-content: space-between;display: flex;flex-direction: row;align-items: center;justify-content: space-between;background-color: #fff;padding: 0;list-style: none;height: 3rem;border: 0.5px solid #ccc;border-left: 0;">
                  <div class="header-title" id="main-header-title" style="font-weight: 700; font-size: large;color: black;">TAMI</div>
                   <div style="display:flex;align-items:center;">
                   <div id="e11" class="icons-box"> 
                       <span class="header-bar-icon-box" title="minimize">-</span>
                   </div>
                   <div id="e10" style="cursor:pointer;"> 
                   <span class="header-bar-icon-box" title="maxamize"><img src="https://cdn.yellowmessenger.com/m65zoVM7Si3s1624952263631.png" style="width: 1.7rem; height: 20px;" /></span>
                   </div>
                   <div id="e9" class="icons-box"> 
                       <span class="header-bar-icon-box" title="Close">x</span>
                   </div>
              </div>
             </ul>
          </div> 
      </div> `
    );
  } catch (e) {
    console.log("failing while trying to insert add frame script", e);
  }
})();

function dynamicHeaderTitle(e) {
  e.preventDefault();
  var title = e.srcElement.getAttribute("title");
}
document.getElementById("e9").onclick = function () {
  parent.postMessage("CLOSE", "*");
};

document.getElementById("e10").onclick = function () {
  parent.postMessage("Maxamize", "*");
};

document.getElementById("e11").onclick = function () {
  parent.postMessage("MINIMIZE", "*");
};
