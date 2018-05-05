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
  $("#btn").click(function(){
    $(this).fadeOut(1000);
    setTimeout(function(){
        $("#btn").parent("#cover").hide();
    },1000);
  });

    $(".note").click(function(){

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
        "url": "https://itunes.apple.com/search",
        "method": "GET",
        "data": params,
        "dataType": "jsonp",

      success: function(json){
        console.log(json);
        // var srcUrl = new Array(json.results.length);
        // srcTitle = new Array(json.results.length);
        // srcArt = new Array(json.results.length);
        // srcArtist = new Array(json.results.length);

        var random = Math.floor( Math.random() * 100 );
        // console.log(random);
        var mucic =  json.results[random].previewUrl,
            title =  json.results[random].trackName,
            art = json.results[random].artworkUrl100,
            src = json.results[random].artistName;
        $('#art').attr("src", art);
        $('#title').html(title);
        $('#itMic').attr("src", mucic);
        $('#music').show();
        // console.log(mucic);
        // console.log(art);
        // console.log(src);
        // for (var i=0;i<json.results.length;i++) {
        //   // srcUrl[i] = json.results[i].previewUrl; //preview
        //   // srcTitle[i] = json.results[i].trackName; //SNG name
        //   // srcArt[i] = json.results[i].artworkUrl100; //img
        //   // srcArtist[i] = json.results[i].artistName; //AT name
        //   // console.log(srcUrl[i]);
        // }

      }

      // error: function() {
      //   console.log("itunes api search error.", arguments);
      // },
    });

  });

}
