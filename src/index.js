console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", function () {
    // Fetch and display dog breeds
    fetch(breedUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            if (Array.isArray(data.message)) {
                const breeds = data.message;
                const breedList = document.getElementById("dog-breeds");

                breeds.forEach((breed) => {
                    const breedListItem = document.createElement("li");
                    breedListItem.textContent = breed;
                    breedList.appendChild(breedListItem);

                    // Add the click event listener
                    breedListItem.addEventListener("click", function () {
                        breedListItem.style.color = "blue";
                    });
                });
            } else {
                console.error("Data.message is not an array as expected.");
            }
        })
        .catch((error) => {
            console.error("Error fetching dog breeds: " + error);
        });

    // Add the dropdown menu event listener
    const breedDropdown = document.getElementById("breed-dropdown");
    breedDropdown.addEventListener("change", function () {
        const selectedLetter = breedDropdown.value;
        const breedListItems = document.querySelectorAll("#dog-breeds li");

        breedListItems.forEach((breedListItem) => {
            if (breedListItem.textContent.startsWith(selectedLetter)) {
                breedListItem.style.display = "block";
            } else {
                breedListItem.style.display = "none";
            }
        });
    });
});
