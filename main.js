const items = document.querySelectorAll(".item");
let imageurls = [
    "dog-1.jpg",
    "dog-2.jpg",
    "dog-3.jpg",
    "dog-4.jpg",
    "dog-5.jpg",
];
let devicetype ="";
let events = {
    mouse:{
        start : "mouseover",
        end: "mouseout",
    },
    touch :{
        start : "touchstart",
        end : "touchend" ,
    },
};

const istouchdevice = () => {
    try{
        document.createEvent("TouchEvent");
        devicetype = "touch";
        return true ;
    }
    catch (e) {
        devicetype = "mouse";
        return false ;
    }
};
istouchdevice();

items.forEach((item , index) => {
    let img = document.createElement("img");
    img.setAttribute("src", imageurls[index]);
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    item.appendChild(img);

    item.style.flex = "1";
    item.style.transition = "flex 1s ease";

    item.addEventListener(events[devicetype].start, () =>{
        item.style.flex = "9";
    });
    item.addEventListener(events[devicetype].end, () =>{
        item.style.flex = "1";
    });
});
