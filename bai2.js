let a = ["Nguyễn Văn A", "Phạm Thị B", "Nguyễn Thị C"];
function names() {
    let b = "";
    for (let index = 0; index <a.length; index++) {
        b += `<li>${a[index]}</li>`        
    }
    document.getElementsByClassName("2")[0].innerHTML=b;
}
names();