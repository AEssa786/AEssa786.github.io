document.addEventListener("DOMContentLoaded", () => {
    const name = "Abdullah Essa";
    const target = document.getElementById("nameHeader");
    let index = 0;
    const speed = 120;

    function type(){
        if(index < name.length){
            target.textContent += name.charAt(index);
            index++;
            setTimeout(type, speed)
        }
    }

    setTimeout(type, 450);

});