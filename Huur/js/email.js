function SendMail() {
    var params = {
        name_id: document.getElementById("name_id").value,
        message_id: document.getElementById("message_id").value,
        email_id: document.getElementById("email_id").value,
        begin_date_id: document.getElementById("begin_date_id").value,
        end_date_id: document.getElementById("end_date_id").value,
        huis: "1",
    }
    emailjs.send("service_hou8ki8", "template_t5yo1e8", params);
    location.reload();
}
function SendMail2() {
    var params = {
        name_id: document.getElementById("name_id").value,
        message_id: document.getElementById("message_id").value,
        email_id: document.getElementById("email_id").value,
        begin_date_id: document.getElementById("begin_date_id").value,
        end_date_id: document.getElementById("end_date_id").value,
        huis: "2",
    }
    emailjs.send("service_hou8ki8", "template_t5yo1e8", params);
    location.reload();
}