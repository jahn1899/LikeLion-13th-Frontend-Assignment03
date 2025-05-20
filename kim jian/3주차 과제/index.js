const pwInput1 = document.querySelector('.pw1');
const pwInput2 = document.querySelector('.pw2');
const btn1 = document.querySelector('.toggle-btn1');
const btn2 = document.querySelector('.toggle-btn2');

btn1.addEventListener('click', function () {
  if (pwInput1.type === 'password') {
    pwInput1.type = 'text';
    btn1.textContent = '숨기기';
  } else {
    pwInput1.type = 'password';
    btn1.textContent = '보기';
  }
});

btn2.addEventListener('click', function () {
  if (pwInput2.type === 'password') {
    pwInput2.type = 'text';
    btn2.textContent = '숨기기';
  } else {
    pwInput2.type = 'password';
    btn2.textContent = '보기';
  }
});

   var form = document.querySelector("form");

    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var pw1Input = document.getElementById("pw1");
    var pw2Input = document.getElementById("pw2");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = nameInput.value;
      var email = emailInput.value;
      var pw1 = pw1Input.value;
      var pw2 = pw2Input.value;

      // 이름: 비어있지 않으면 성공
      if (name !== "") {
        nameInput.style.border = "2px solid green";
      } else {
        nameInput.style.border = "2px solid red";
      }

      // 이메일: @와 . 포함 시 성공 (간단 검사)
      if (email.indexOf("@") > -1 && email.indexOf(".") > -1) {
        emailInput.style.border = "2px solid green";
      } else {
        emailInput.style.border = "2px solid red";
      }

      // 비밀번호: 6자 이상
      if (pw1.length >= 6) {
        pw1Input.style.border = "2px solid green";
      } else {
        pw1Input.style.border = "2px solid red";
      }

      // 비밀번호 확인: 일치 여부
      if (pw1 === pw2 && pw2 !== "") {
        pw2Input.style.border = "2px solid green";
      } else {
        pw2Input.style.border = "2px solid red";
      }
    });