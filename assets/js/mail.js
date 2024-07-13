function sandMail() {
    let param = {
        name: document.getElementById("contact-name").value,
        email: document.getElementById("contact-email").value,
        phone: document.getElementById("contact-phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("contact-message").value,
    }
    emailjs.send("service_opyvv1h", "template_q63s224", param)
        .then(function (response) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "Message sent successfully!!"
            });
            document.getElementById("contact-name").value = "",
                document.getElementById("contact-email").value = "",
                document.getElementById("contact-phone").value = "",
                document.getElementById("subject").value = "",
                document.getElementById("contact-message").value = ""

        }, function (error) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "error",
                title: "Failed!! Try again..."
            });
        });
}