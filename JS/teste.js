
const backToTopBttton = document.querySelector("button");
 
backToTopBttton.onclick = () => {
    document.documentElement.scroll({
        top: 0, behavior:"smooth"
    });
    window.onscroll = () => {
        backToTopBttton.hidden = !(document.documentElement.scrollTop >200 )
    }
}