const $gifArea = $("#gif-area");
const $searchInput = $("#search");

function addGif(results) {
    let multResults = results.data.length;
    if (multResults) {
        let randomGif = Math.floor(Math.random() * multResults)
        let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
        let $newGif = $("<img>", {
            src: results.data[randomGif].images.original.url,
            class: "w-100" 
    });
    $newCol.append($newGif);
    $gifArea.append($newCol);
    }
}

$("form").on("submit", async function(evt) {
    evt.preventDefault();
  
    let searchTerm = $searchInput.val();
    $searchInput.val("");
  
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
      params: {
        q: searchTerm,
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
      }
    });
    addGif(response.data);
  });
  
  $("#remove").on("click", function() {
    $gifArea.empty();
  });