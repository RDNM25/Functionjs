function Sepeda(merk, jenis, warna) {
    this.merk = merk;
    this.jenis = jenis;
    this.warna = warna;
    this.getInfo = function() {
        return "Merk: " + this.merk + ", Jenis: " + this.jenis + ", Warna: " + this.warna;
    };
    this.tampilkanInfo = function() {
        var html = "<div class='sepeda-card'>";
        html += "<h3>Informasi Sepeda</h3>";
        html += "<p><strong>Merk:</strong> " + this.merk + "</p>";
        html += "<p><strong>Jenis:</strong> " + this.jenis + "</p>";
        html += "<p><strong>Warna:</strong> " + this.warna + "</p>";
        html += "</div>";
        return html;
    };
}

var outputContainer = document.getElementById("outputContainer");
var outputArea = document.getElementById("outputArea");
var sepedaList = [];

function inputSepeda() {
    var merk = document.getElementById("merkInput").value;
    var jenis = document.getElementById("jenisInput").value;
    var warna = document.getElementById("warnaInput").value;

    if (merk.trim() === "" || jenis.trim() === "" || warna.trim() === "") {
        alert("Semua field harus diisi!");
        return;
    }
    var sepedaBaru = new Sepeda(merk.trim(), jenis.trim(), warna.trim());
    sepedaList.push(sepedaBaru);
    var infoText = sepedaBaru.getInfo();
    var outputHTML = "<p><strong>Info (dari return):</strong> " + infoText + "</p>";
    outputArea.innerHTML = outputHTML + outputArea.innerHTML.replace(/<p class='empty-output'>.*<\/p>/, "");
    var emptyInfo = outputContainer.querySelector('.empty-info');
    if (emptyInfo) {
        emptyInfo.remove();
    }
    outputContainer.style.display = "block";
    outputContainer.innerHTML = sepedaBaru.tampilkanInfo();

    document.getElementById("merkInput").value = "";
    document.getElementById("jenisInput").value = "";
    document.getElementById("warnaInput").value = "";
}

function resetOutput() {
    sepedaList = [];
    outputContainer.style.display = "none";
    outputContainer.innerHTML = "";
    outputArea.innerHTML = "<p class='empty-output'>Belum ada data yang diinput.</p>";
}