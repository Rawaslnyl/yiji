var phoneRe = /^1[3|5|6|7|8|9]{2}[0-9]{3}\d{4,11}/;
$('#email').blur(function() {
  var phone = $(this).val();
  if (phone === '') {
    return false;
  } else {
    if (!phoneRe.test(phone)) {
      $(this)
        .siblings('p')
        .text('请输入正确的手机号')
        .css('color', 'red');
      return false;
    } else {
      $(this)
        .siblings('p')
        .text('√')
        .css('color', 'green');
      return true;
    }
  }
});

//输入密码
var passRe = /^\d{6,9}$/;
var kong = /\s/;
$('#password').blur(function() {
  var pass = $(this).val();
  var len = pass.length;
  var kong = /\s/;
  if (pass === '') {
    return false;
  } else {
    if (len < 6 || len > 16) {
      $(this)
        .siblings('p')
        .text('必须由6-16个字符组成')
        .css('color', 'red');
      return false;
    } else {
      if (passRe.test(pass)) {
        $(this)
          .siblings('p')
          .text('密码过于简单 ')
          .css('color', 'red');
        return false;
      } else {
        if (
          pass === '0123456789' ||
          pass === '1234567890' ||
          pass === '9876543210'
        ) {
          $(this)
            .siblings('p')
            .text('密码过于简单 ')
            .css('color', 'red');
          return false;
        } else {
          if (kong.test(pass)) {
            $(this)
              .siblings('p')
              .text('不能包含空白格 ')
              .css('color', 'red');
            return false;
          } else {
            //正确了
            $(this)
              .siblings('p')
              .text('√')
              .css('color', 'green');
            return true;
          }
        }
      }
    }
  }
});

//登陆
$('#login').click(function(event) {
  var pass = $('#password').val();
  var phone = $('#email').val();
  if (pass === false || phone === false) {
    $('#login').prop('disabled', 'disabled');
    // event.preventDefault();
    // console.log(1);
  } else {
  }
});
