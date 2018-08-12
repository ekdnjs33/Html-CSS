$(function(){
  var $frm = $(".login_f");
  $frm.on("submit", function(e){
    e.preventDefault(); //submit 눌러고 action으로 이동X
    var myData = $frm.serialize(); //폼 입력 요소에 작성한 값을 쿼리스트링 형식의 데이터로 변환하여 대입

    $.ajax({
      type:"POST",
      url:$frm.attr("action"),
      data:myData,
      success:function(res){
        if(res){
          var jsonData = JSON.parse(res); //res에 요청한 데이터를 받아옴, res를 json형식으로 변형하여 대입
          var message = jsonData.user_name+"("+jsonData.user_id+")"+"님 반갑습니다.";
          $(".login_wrap").html(message);
        }
      }
    });
  });
});
