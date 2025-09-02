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


document.getElementById("search").addEventListener("keyup", function() {
    let searchValue = this.value.toUpperCase();
    let products = document.querySelectorAll("#productcontainer > div");

    products.forEach(product => {
        let productName = product.querySelector("h3").textContent.toUpperCase();
        if (productName.includes(searchValue)) {
            product.style.display = "block"; // Show matching products
        } else {
            product.style.display = "none";  // Hide non-matching products
        }
    });
});