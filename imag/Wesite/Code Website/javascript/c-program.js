// find char function use in input.SerchBar
function myFunction() {
    var input, filter, ul, li, h2, i, txtValue;
    input = document.getElementById('SerchBar');
    filter = input.value.toUpperCase();
    ul = document.getElementById('cProgram');
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        h2 = li[i].getElementsByTagName("h2")[0];
        txtValue = h2.textContent || h2.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = "none";
            
        }
    }
}