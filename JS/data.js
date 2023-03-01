
fetch("https://api.alquran.cloud/v1/ayah/1/en.asad")
.then(res => res.json())
.then(data => console.log(data))


const surah = document.getElementById("surah__container").addEventListener('click', function (e) {
    const myTargetButton = e.target.parentNode.parentNode.childNodes[1].childNodes[1].innerText;
    // const myTargetContainer = e.target.parentNode.parentNode;
    console.log(myTargetButton)
 
    // console.log(e.target.parentNode.parentNode.childNodes)
    // const surahNumber = document.getElementById('surah_serial_id');
    // console.log(surahNumber)
    
})