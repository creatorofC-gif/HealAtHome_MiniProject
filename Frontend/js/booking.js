const BookingForm = document.querySelector(".booking-form");

if (BookingForm) {
    BookingForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(BookingForm));

        try {
            // STEP 1: Map frontend data → backend format
            const requestBody = {
                user_id: 1, // TEMP: hardcoded user (later from login)
                service_id: getServiceId(data.service),
                date: data.date,
                time: data.time
            };

            // STEP 2: Send to backend
            const response = await fetch("http://localhost:5000/book", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            });

            const result = await response.json();

            if (response.ok) {
                alert("✅ Booking Confirmed!");
                BookingForm.reset();
            } else {
                alert("❌ Booking Failed");
                console.error(result);
            }

        } catch (err) {
            console.error(err);
            alert("Server error");
        }
    });
}


function getServiceId(serviceName) {
    const services = {
        "Caretaker": 2,
        "Nurse": 3,
        "Elderly Care": 2,
        "Physiotherapy": 1,
        "Baby Care": 4
    };

    return services[serviceName] || 1;
}