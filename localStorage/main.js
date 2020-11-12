let wisdom = JSON.parse(localStorage.wisdom || "[]");
let i= wisdom.length || 1 
const render = function (data) {
    $(".cdiv").empty()
    for (let dat of data) {
      $(".cdiv").append(`<div><button class="delete" data-id=${dat.id}>X</button>${dat.text}</div>`);
    }
  };

const clicked = function () {
  const advice = $("#input").val();
  wisdom.push({ text: advice, id:  i++});
  if (!(wisdom.length % 2)) {
    const strAdvice = JSON.stringify(wisdom);
    localStorage["wisdom"] = strAdvice;
  }
  render(wisdom);
};
$(".cdiv").on("click", ".delete", function(){
    const id = $(this).data().id
    for(let y in wisdom){
        if(wisdom[y].id == id){
            wisdom.splice(y, 1)
            localStorage.clear()
            localStorage["wisdom"] = JSON.stringify(wisdom)
            render(wisdom)
        }
    }
})
const clear1 = function(){
    localStorage.clear()
    wisdom = []
    render(wisdom)
}

render(wisdom);


