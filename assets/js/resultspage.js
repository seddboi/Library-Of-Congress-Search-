var tempSearchResults = "basketball";
var tempFormat = "search";
var website = "https://www.loc.gov/"

function search(){
    var webFormat = website + tempFormat + "/?q=" + tempSearchResults + "&fo=json";
    fetch(webFormat).then(function(response){
        if(response.ok){
            response.json().then(function(data){
                console.log(data.breadcrumbs);
            })
        }
        else{
            console.log("not working")
        }
    })
}

search();