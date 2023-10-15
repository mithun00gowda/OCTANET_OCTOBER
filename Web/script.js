const donationModal = document.getElementById("donationModal");
const openDonationModalButton = document.getElementById("openDonationModal");
const closeDonationModalButton = document.getElementById("closeDonationModal");

// Open the modal when the "Donate" button is clicked
openDonationModalButton.addEventListener("click", () => {
    donationModal.style.display = "block";
});

// Close the modal when the "Close" button is clicked
closeDonationModalButton.addEventListener("click", () => {
    donationModal.style.display = "none";
});