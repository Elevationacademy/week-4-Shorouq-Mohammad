let favoriteGifs = []

const fetch = function(){
  $.ajax({
    method: "GET",
    url:  `http://api.giphy.com/v1/gifs/search?q=${$("#search").val()}&api_key=rY7e2BpsmyM2bXD94OMxvbF9PCeWL84y&limit=5`,
    success: function(dat){
      const embedURL = dat.data.map(d => d.embed_url)
      $("#display").empty()
      embedURL.forEach(e => $("#display").append(`<div><button class="add">Add</button><iframe src="${e}"></iframe></div>`))
      
    }

  })
}
$("div").on("click", ".add", function(){
  const url = $(this).next().attr("src")
  favoriteGifs.push(url)
  $("#display").empty()

  favoriteGifs.forEach(f => $("#display").append(`<iframe src="${f}"></iframe>`))
})
