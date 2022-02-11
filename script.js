document.body.style.margin = "0";
document.body.style.backgroundColor = "hsl(217, 54%, 11%)";
document.body.style.fontFamily = "Outfit, sans-serif";
document.body.style.fontSize = "18px";

const wrapper = document.createElement("div");
wrapper.style.margin = "0 auto";
wrapper.style.display = "flex";
wrapper.style.justifyContent = "center";
wrapper.style.flexDirection = "column";

const card = document.createElement(div);
card.className = "card";
card.style.backgroundColor = "hsl(216, 50%, 16%)";
card.style.padding = "20px";
card.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, .2);";
card.style.borderRadius = "10%";

const imgTop = document.createElement("img");
imgTop.className = "top-img";
imgTop.src = "images/image-equilibirium.jpg";
imgTop.style.borderRadius = "10px";
imgTop.style.marginBottom = "18px";

const h2 = document.createElement("h2");
h2.innerText = "Equilibrium #3429";

const p = document.createElement("p");
p.innerText = "Our Equilibrium collection promotes balance and calm";

const items = document.createElement("div");
items.style.display = "flex";
items.style.justifyContent = "space-between";

const h3 = document.createElement("h3");
h3.innerText = "0.041 ETH";
h3.style.display = "inline-block";
h3.style.color = "hsl(178, 100%, 50%)";
h3.style.fontWeight = "bold";

const clockImg = document.createElement("img");
clockImg.src = "icon-clock.svg";

const p3 = document.createElement("p");
p3.className = "remainder";
p3.innerText = "3 days left";

const line = document.createElement("hr");
line.style.borderColor = "hsl(215, 32%, 27%)";
line.style.marginBottom = "8px";

const avatar = document.createElement("div");
avatar.className = "avatar";
avatar.style.marginTop = "22px";
avatar.style.display = "flex";
avatar.style.alignItems = "center";

const avatarImg = document.createElement("img");
avatarImg.className = "avatar-img";
avatarImg.src = "images/image-avatar.png";
avatarImg.style.maxWidth = "35px";
avatarImg.style.marginRight = "15px";
avatarImg.style.border = "2px solid white";

const avatarTxt = document.createElement("span");
avatarTxt.className = "avatar-text";
avatarTxt.innerText = "Creation of";
avatarTxt.style.fontSize = "17px";
avatarTxt.style.color = "hsl(215, 51%, 70%)";
avatarTxt.style.textAlign = "center";

document.body.appendChild(wrapper);
wrapper.appendChild(card);
card.appendChild(imgTop);
card.appendChild(h2);
card.appendChild(p);
card.appendChild(h3);
card.appendChild(clockImg);
card.appendChild(p3);
card.appendChild(line);
card.appendChild(avatar);
card.appendChild(avatarImg);
card.appendChild(avatarTxt);

alert("Я оцениваю свою работу на 80 баллов");
