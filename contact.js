var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var exit = document.getElementById("exit")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function()
{
    sidenav.style.right=0

})
exit.addEventListener("click",function()
{
    sidenav.style.right="-50%"
})