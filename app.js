let openButton = document.querySelector(".btn").addEventListener("click", function(){
    let addedModal = document.querySelector(".added-modal");
    let Modal = document.querySelector(".modal");
    let overlay = document.querySelector(".underlay");
    addedModal.classList.add("open")
    Modal.classList.add("hide")
    overlay.classList.add("overlay")

   

    let closeButton = document.querySelector(".close").addEventListener("click", function(){
        addedModal.classList.remove("open")
        Modal.classList.remove("hide")
        overlay.classList.remove("overlay")
        
    })
    
})