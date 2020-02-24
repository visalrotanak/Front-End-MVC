
let insertForm = true;
let deleteForm = true;
let updateForm = true;
let viewForm = true;

function openInsertForm() {
    document.getElementById("myDeleteForm").style.display = "none";
    document.getElementById("myUpdateForm").style.display = "none";
    document.getElementById("myViewForm").style.display = "none";
    deleteForm = true;
    updateForm = true;
    viewForm = true;
    if(insertForm){
        document.getElementById("myInsertForm").style.display = "block"; 
        insertForm = false;
    }else{
        document.getElementById("myInsertForm").style.display = "none";
        insertForm = true;
    }
}  
function closeInsertForm() {
    insertForm = true;
    deleteForm = true;
    updateForm = true;
    viewForm = true;
    document.getElementById("myInsertForm").style.display = "none";
}
function openDeleteForm() {
    document.getElementById("myInsertForm").style.display = "none";
    document.getElementById("myUpdateForm").style.display = "none";
    document.getElementById("myViewForm").style.display = "none";
    insertForm = true;
    updateForm = true;
    viewForm = true;
    if(deleteForm){
        document.getElementById("myDeleteForm").style.display = "block";
        deleteForm = false;
    }else{
        document.getElementById("myDeleteForm").style.display = "none";
        deleteForm = true;
    }
}  
function closeDeleteForm() {
    insertForm = true;
    deleteForm = true;
    updateForm = true;
    viewForm = true;
    document.getElementById("myDeleteForm").style.display = "none";
}
function openUpdateForm() {
    document.getElementById("myViewForm").style.display = "none";
    document.getElementById("myInsertForm").style.display = "none";
    document.getElementById("myDeleteForm").style.display = "none";
    insertForm = true;
    deleteForm = true;
    viewForm = true;
    if(updateForm){
        document.getElementById("myUpdateForm").style.display = "block";
        updateForm = false;
    }else{
        document.getElementById("myUpdateForm").style.display = "none";
        updateForm = true;
    }
} 
function closeUpdateForm() {
    insertForm = true;
    deleteForm = true;
    updateForm = true;
    viewForm = true;
    document.getElementById("myUpdateForm").style.display = "none";
}
function openViewForm() {
    document.getElementById("myUpdateForm").style.display = "none";
    document.getElementById("myDeleteForm").style.display = "none";
    document.getElementById("myInsertForm").style.display = "none";
    insertForm = true;
    updateForm = true;
    deleteForm = true;
    if(viewForm){
        document.getElementById("myViewForm").style.display = "block";
        viewForm = false;
    }else{
        document.getElementById("myViewForm").style.display = "none";
        viewForm = true;
    }
} 
function closeViewForm() {
    insertForm = true;
    deleteForm = true;
    updateForm = true;
    viewForm = true;
    document.getElementById("myViewForm").style.display = "none";
}

// Inline popups
$('#inline-popups').magnificPopup({
    delegate: 'a',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function() {
         this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

