function hitungLuas(panjang, lebar) {
    return panjang * lebar;
}

function hitungLuasUI() {
    var panjang = parseFloat(document.getElementById("panjangInput").value);
    var lebar = parseFloat(document.getElementById("lebarInput").value);

    if (isNaN(panjang) || isNaN(lebar) || panjang <= 0 || lebar <= 0) {
        alert("Masukkan angka yang valid untuk panjang dan lebar (lebih dari 0)!");
        return;
    }

    var luas = hitungLuas(panjang, lebar);

    var inputInfo = document.getElementById("inputInfo");
    inputInfo.innerHTML = "<p><strong>Panjang:</strong> " + panjang + " cm</p>" +
                          "<p><strong>Lebar:</strong> " + lebar + " cm</p>";

    var resultBox = document.getElementById("resultBox");
    document.getElementById("hasilLuas").textContent = "Luas = " + luas + " cm²";
    resultBox.style.display = "block";

    var outputArea = document.getElementById("outputArea");
    var outputHTML = "<p><strong>hitungLuas(" + panjang + ", " + lebar + ") = " + luas + " cm²</strong></p>" +
                     " <p><strong>Panjang:</strong> " + panjang + " cm</p>" +
                     "<p><strong>Lebar:</strong> " + lebar + " cm</p>";
    outputArea.innerHTML = outputHTML + outputArea.innerHTML.replace(/<p class='empty-output'>[\s\S]*?<\/p>/, "");
}

function resetForm() {
    document.getElementById("panjangInput").value = "";
    document.getElementById("lebarInput").value = "";
    document.getElementById("inputInfo").innerHTML = "<p><strong>Masukkan panjang dan lebar persegi panjang di bawah ini.</strong></p>";
    document.getElementById("resultBox").style.display = "none";
    document.getElementById("outputArea").innerHTML = "<p class='empty-output'>Belum ada perhitungan yang dilakukan.</p>";
}

window.hitungLuasUI = hitungLuasUI;
window.resetForm = resetForm;