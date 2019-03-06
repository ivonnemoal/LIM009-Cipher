const getDatos = (election) => {
    const offset = parseInt(document.getElementById('number').value);
    if(election){
        const name = document.getElementById('text').value; 
        document.getElementById('text').value = '';
        document.getElementById('result').value = cipher.encode(offset, name);
    }else{
        const name = document.getElementById('result').value;
        document.getElementById('result').value = '';
        document.getElementById('text').value = cipher.decode(offset, name);
    }
}