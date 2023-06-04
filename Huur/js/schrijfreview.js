const firebaseConfig = {
    apiKey: "AIzaSyB5Lt93eJqYmglYXv2mgMs_ZQAI8PkIHc4",
    authDomain: "huurwebsite.firebaseapp.com",
    databaseURL: "https://huurwebsite-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "huurwebsite",
    storageBucket: "huurwebsite.appspot.com",
    messagingSenderId: "1056341687751",
    appId: "1:1056341687751:web:7dca0185bbbaec9db8ede2",
    measurementId: "G-X0X000WH6T"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

var stars = [false, false, false, false, false];
var reviewText = "";
var reviewName = "";

function resetModalStars() {
    const starElements = document.querySelectorAll("#myModal .star-rating .star");
    starElements.forEach((star) => {
        star.classList.remove("selected");
    });
}

// Event listener for showing the modal
$('#myModal').on('show.bs.modal', function (e) {
    resetModalStars();
});

// ...

function setRating(rating) {
    for (let i = 0; i < stars.length; i++) {
        stars[i] = i < rating;
    }
    updateStars();

    // Update the stars in the modal as well
    const modalStarElements = document.querySelectorAll("#myModal .star-rating .star");
    modalStarElements.forEach((star, index) => {
        star.classList.toggle("selected", index < rating);
    });
}

function updateStars() {
    const starElements = document.querySelectorAll(".star-rating .star");
    for (let i = 0; i < starElements.length; i++) {
        starElements[i].classList.toggle("selected", stars[i]);
    }
}

function submitReview() {
    const rating = stars.filter(star => star).length;
    reviewText = document.getElementById("reviewText").value;
    reviewName = document.getElementById("reviewName").value;
    // Save the rating and reviewText to the Firebase database
    const reviewRef = database.ref("reviews/1").push();
    reviewRef.set({
        rating: rating,
        reviewText: reviewText,
        reviewName: reviewName
    });

    location.reload();

}

function fetchReviews() {
    const reviewsRef = database.ref("reviews/1");
    reviewsRef.on("value", (snapshot) => {
        const reviews = snapshot.val();
        const reviewsContainer = document.getElementById("reviewsContainer");
        reviewsContainer.innerHTML = "";

        for (const key in reviews) {
            if (reviews.hasOwnProperty(key)) {
                const review = reviews[key];
                const card = document.createElement("div");
                card.classList.add("revcard", "col-12", "col-lg-3");
                card.innerHTML = `
          <div class="card-body row">
            
            <div class="star-rating" col-12">
              ${generateStarRating(review.rating)}
            </div> 
            <div class="card-text col-12" style="font-weight: bold;">${review.reviewName}</div>
            <p class="card-text">${review.reviewText}</p>
          </div>
        `;
                reviewsContainer.appendChild(card);
            }
        }
    });
}

function generateStarRating(rating) {
    const filledStars = '<span class="star selected">&#9733;</span>'.repeat(rating);
    const emptyStars = '<span class="star">&#9733;</span>'.repeat(5 - rating);
    return filledStars + emptyStars;
}

fetchReviews();






