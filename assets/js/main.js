function audioAjax(){
  var msg="birthday song"; //検索ワード
  var params = {
  "term": msg,
  "limit": 100, //データ数の上限
  "entry": "music",
  "media": "music",
  "country":"US",
  "primaryGenreName": "Pop",
  };

  $.ajax({
    "url":"https://itunes.apple.com/search",
    "method": "GET",
    "data": params,
    "dataType": "jsonp",

    success: function(json){
      console.log(json);
      var random = Math.floor( Math.random() * 100 );
      var music =  json.results[random].previewUrl,
          title =  json.results[random].trackName,
          art = json.results[random].artworkUrl100,
          src = json.results[random].artistName,
          iTunesUrl = json.results[random].collectionViewUrl;
          console.log(iTunesUrl);
      $('#art').attr("src", art);
      $('#title').html(title);
      $('#music').show();
      $('#dowload a').attr("href", iTunesUrl + ' target="new"');

      if(audio != null){
        audio.pause();
       }
        audio.src = music;
        audio.load();
        audio.play();

    },error: function () {
      alert("Loading failed, Please try again");
    }
  });
}

var audio = document.getElementById("player");
console.log(audio);
//Date
window.onload = function(){
  var today = new Date();
  var year = today.getFullYear();
  var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October ", "November",  "December"][today.getMonth()];
  var day = today.getDate();
  document.getElementById('date').innerHTML = year + '/' + month + '/' + day + "th";

// balloon
  $("#balloon").click(function(){
    $(this).animate({top: '-50%'}, {duration: 2000});
  });
  // $("#btn").click(function(){
  //   $(this).fadeOut(1000);
  //   setTimeout(function(){
  //       $("#btn").parent("#cover").hide();
  //   },1000);
  // });

  $(".note").click(function(){
    audioAjax();
    $(this).addClass('spin');
    $('.fa-step-backward').click(function() {
      audio.pause();
    });
    $('.fa-times').click(function() {
      audio.pause();
      $('#music').hide();
      $(".note").removeClass('spin');
    });
    $('.fa-play').click(function() {
      audio.play();
    });
  });

}
