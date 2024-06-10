let c =""
function test() {
    let b = document.getElementsByTagName("input")[0].value;
    let a = `<li>${b}</li>`;
    c += a;
    document.getElementsByTagName("ul")[0].innerHTML=c
}