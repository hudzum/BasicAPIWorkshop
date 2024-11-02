// Define an asynchronous function named fetchData
async function fetchData() {


    try {
        // Get the value from the input field with ID "pokemonName"
        // Convert the name to lowercase to ensure case-insensitive matching with API data
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();


        // Send a GET request to the PokeAPI using the provided Pokémon name
        // The URL includes the pokemonName, which is specified by the user
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);


        // Check if the request was unsuccessful (status code is not in the 200 range)
        // If so, throw an error to be handled in the catch block
        if (!response.ok) {
            throw new Error("Could not fetch resource"); // Custom error message
        }


        // Parse the response as JSON, which contains various details about the Pokémon
        const data = await response.json();


        // Access the 'front_default' sprite URL in the data's sprites object
        // This URL points to an image of the Pokémon
        const pokemonSprite = data.sprites.front_default;


        // Get the image element where the Pokémon sprite will be displayed
        const imgElement = document.getElementById("pokemonSprite");


        // Set the src attribute of the img element to the Pokémon sprite URL
        imgElement.src = pokemonSprite;


        // Ensure the image element is visible by setting its display property to "block"
        imgElement.style.display = "block";
    }
    catch (error) {
        // Log any errors encountered during the fetch or data processing
        console.error(error);
    }
}
