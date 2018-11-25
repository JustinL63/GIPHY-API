var topics =["Dogs", "Cows", "Bill Murray", "Funny"];
var queryURL ="http://api.giphy.com/GET/v1/gifs/search";
var apiKey ="EnosWMBIefEd1afXMRy2ux3VPH588E0L"
var subject = "";

$("#giphy-input").on("click", function() {





$.ajax({
    url: queryURL,
    method: "Get"
});
.then(function(response){

})
var imageUrl = response.data.image_original_url;

});