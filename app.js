//window.location.replace("hunt1.html");
$.getJSON("https://api.ipify.org?format=json", 
function(data) { 

    const form = document.querySelector('#para');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var address= data.ip;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        db.collection('data').doc(form.pname.value).set({
            name: form.pname.value,
            hname: form.hname.value,
            dname: form.dname.value,
            alink: form.link.value,
            page : form.route.value,
            img : form.img.value,
            ldate : form.ldate.value,
            time:Date().toString().substring(0, 24),
            ip:address,
        });
        form.pname.value = '';
        form.hname.value = '';
        form.dname.value = '';
        form.link.value = '';
        form.route.value = '';
        form.ldate.value = '';
        form.img.value = '';
        alert("Data entered successfully ");
    });

}) 

