let div = document.createElement("div");
div.id = "countdown";

div.style.width = "500px";
div.style.height = "250px";
div.style.margin = "auto"; 
div.style.display = "flex";
div.style.alignItems = "center"; 
div.style.justifyContent = "center";
div.style.border="120px"

div.style.transform = "translate(-50%, -50%)"; 



let b = setTimeout(() => {
  div.innerText = "10";
  setTimeout(() => {
    div.innerText = "9";
    setTimeout(() => {
      div.innerText = "8";
      setTimeout(() => {
        div.innerText = "7";
        setTimeout(() => {
          div.innerText = "6";
          setTimeout(() => {
            div.innerText = "5";
            setTimeout(() => {
              div.innerText = "4";
              setTimeout(() => {
                div.innerText = "2";
                setTimeout(() => {
                  div.innerText = "1";
                  setTimeout(() => {
                    div.innerText = "Happy Independence Day";
                    
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

div.innerText = `${b}`;

document.body.append(div);
