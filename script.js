var vid_name = null;
var vid_src = null;
window.addEventListener('load',()=>{
    inht = document.body.innerHTML;
})
function botdbs()
{
    vid_src = "https://sherry65-code.github.io/homeflix.source1/bottom_of_the.mp4";
    vid_name = "MISSIO - Bottom of The Deep Blue Sea";
    open_video();
}
function open_video()
{
    document.head.title = "Playing - "+vid_name;
    document.getElementById('main').innerHTML = `<video autoplay controls class="vid">
    <source src="`+vid_src+`"></source>
    </video><br><br>
    <span class = "vidtitle">`+vid_name+`</span>
    `; 
}
function khvm()
{
    vid_src = "https://sherry65-code.github.io/homeflix.source1/kaise_hua.mp4";
    vid_name = "Kaise Hua - Vishal Mishra";
    open_video();
}
// Search start
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
//   Search end <ref w3schools.com>
function search_hide()
{
    document.getElementById('darkspace').style.display = "none";
}
function search_unhide()
{
    document.getElementById('darkspace').style.display = "block";
}
function wnta()
{
    vid_src = "https://6bt5age6nboutdggskfavw-on.drv.tw/homeflix.source2/wnta.mp4";
    vid_name = "We Don't Talk Anymore - Charlie Puth";
    open_video();
}