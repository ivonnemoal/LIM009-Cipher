const getDatos = document.getElementById("get-datos");
getDatos.addEventListener("click", (election) => {
    const offset = parseInt(document.getElementById('number').value);
    if (election) {
        const name = document.getElementById('text').value;
        document.getElementById('text').value = '';
        document.getElementById('result').value = cipher.encode(offset, name);
    }
});
const getDatos2 = document.getElementById("get-datos2");
getDatos2.addEventListener("click", (election) => {
    const offset = parseInt(document.getElementById('number').value);
    if (election) {
        const name = document.getElementById('result').value;
        document.getElementById('result').value = '';
        document.getElementById('text').value = cipher.decode(offset, name);
    }
});