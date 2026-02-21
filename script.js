// ================= BOOKING FORM =================

const bookingForm = document.querySelector(".booking-form form");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = bookingForm.querySelector("input[type='text']").value;
        const email = bookingForm.querySelector("input[type='email']").value;
        const phone = bookingForm.querySelector("input[type='tel']").value;
        const destination = bookingForm.querySelector("select").value;
        const date = bookingForm.querySelector("input[type='date']").value;

        const bookingData = {
            name,
            email,
            phone,
            destination,
            date
        };

        let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
        bookings.push(bookingData);
        localStorage.setItem("bookings", JSON.stringify(bookings));

        alert("Booking Confirmed Successfully!");
        bookingForm.reset();
    });
}

// ================= CONTACT FORM =================

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Message Sent Successfully!");
        contactForm.reset();
    });
}

// ================= ADMIN PANEL =================

const bookingTableBody = document.querySelector("#bookingTableBody");

if (bookingTableBody) {

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    bookingTableBody.innerHTML = "";

    bookings.forEach((booking, index) => {

        const row = `
            <tr>
                <td>${booking.name}</td>
                <td>${booking.email}</td>
                <td>${booking.phone}</td>
                <td>${booking.destination}</td>
                <td>${booking.date}</td>
                <td>
                    <button onclick="deleteBooking(${index})">Delete</button>
                </td>
            </tr>
        `;

        bookingTableBody.innerHTML += row;
    });
}

// ================= DELETE FUNCTION =================

function deleteBooking(index) {

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.splice(index, 1);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    location.reload();
}
const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");

    index++;
    if (index >= slides.length) {
        index = 0;
    }
}

if (slides.length > 0) {
    setInterval(showSlide, 3000);
}
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("bookingForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const destination = document.getElementById("destination").value;
        const date = document.getElementById("date").value;

        if (name === "" || email === "" || phone === "" || destination === "" || date === "") {
            alert("Please fill all required fields.");
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (phone.length < 10) {
            alert("Please enter a valid phone number.");
            return;
        }

        alert("🎉 Booking Confirmed Successfully!");
        form.reset();
    });

});
// ===== CONTACT FORM VALIDATION =====

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("cname").value.trim();
            const email = document.getElementById("cemail").value.trim();
            const message = document.getElementById("cmessage").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill all fields.");
                return;
            }

            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.match(emailPattern)) {
                alert("Please enter a valid email.");
                return;
            }

            alert("✅ Message Sent Successfully!");
            contactForm.reset();
        });

    }

});