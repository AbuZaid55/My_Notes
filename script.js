let addnoteClose = document.getElementById("addnotesClose")
let addnotepage = document.getElementById("addnotespage")
let addnotes = document.getElementById("addnotes")
let savenote = document.getElementById("savenote")
let noteshtml = document.getElementById("noteshtml")
let arr
if(JSON.parse(localStorage.getItem('data'))!=null){
    arr=JSON.parse(localStorage.getItem('data'))
}else{
    arr=[]
}



addnoteClose.addEventListener('click',function(){
    addnotepage.classList.add("d-none")
    addnotepage.classList.remove("d-flex")
})
addnotes.addEventListener("click",function(){
    addnotepage.classList.add("d-flex")
    addnotepage.classList.remove("d-none")
})
savenote.addEventListener("click",function(){
    addtextvalue = document.getElementById('addtext').value 
    arr.push(addtextvalue)
    localStorage.setItem('data',JSON.stringify(arr))
    window.location.reload(true)
})

arr.forEach(function(element,index){
    noteshtml.insertAdjacentHTML("afterbegin",`<div  style="height:300px;width: 300px;">
    <div class="w-100 text-end bg-warning border rounded-top border-bottom-0 border-warning"><i id="editSave" class="fa-solid fa-file-pen p-2 fs-3" style="cursor: pointer;"></i><i id="deletenotes" class="fa-solid fa-trash p-2 fs-3 " style="cursor: pointer;"></i></div>
    <div class="position-relative w-100">
        <div id="addtext" class="w-100 p-4 z-1 bg-secondary-subtle position-absolute top-0 start-0 border rounded-bottom order-top-0 border-warning overflow-y-scroll" style="height:170px ">${element}</div>
        <textarea id="textareaa" style="height:170px" class="w-100 d-none position-absolute top-0 start-0 border rounded-bottom border-top-0 border-warning  bg-light z-2" name="" id="" cols="30" rows="7">${element}</textarea>

    </div>
</div>`)
let editSave=document.getElementById("editSave");
let addtext = document.getElementById("addtext");
let textarea = document.getElementById("textareaa");
let deletenotes = document.getElementById("deletenotes");
editSave.addEventListener('click',function(){
    if(textarea.classList.contains('d-none')){
    textarea.classList.remove('d-none')
    
    }else{
        textarea.classList.add('d-none')
        let textinput = textarea.value
        arr[index]=textinput
        localStorage.setItem('data',JSON.stringify(arr))
        window.location.reload(true)
    }      
})
deletenotes.addEventListener('click',function(){
    if(confirm("Do you want to delete this notes?")){
        arr.splice(index,1)
        localStorage.setItem('data',JSON.stringify(arr))
        window.location.reload(true)
    }
})
})