// Math.floor(Math.random()*(999-100+1)+100);

function sendData() {
    let title = document.getElementById('title');
    let paste = document.getElementById('paste');
    let db = firebase.database();
    let id;

    db.ref("id").once('value', (obj) => {
        id = obj.val().id;
    
        db.ref("paste/" + id).set({
            id: id,
            title: title.value,
            paste: paste.value
        });

        db.ref("id").set({
            id: ++id
        });
    });
}