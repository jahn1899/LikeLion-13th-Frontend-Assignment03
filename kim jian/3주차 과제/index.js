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

const signupBtn = document.querySelector('.submit-btn');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const pwInput = document.querySelector('#pw1');
const pwCheckInput = document.querySelector('#pw2');
const pwError = document.querySelectorAll('.pw-error');

signupBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const pw = pwInput.value;
  const pwCheck = pwCheckInput.value;

  let isValid = true;

  // 이름 검사
  if (!name) {
    nameInput.style.border = '2px solid red';
    pwError[0].textContent = '이름을 입력하세요';
    isValid = false;
  } else {
    nameInput.style.border = '2px solid green';
    pwError[0].textContent = '';
  }

  // 이메일 검사
  if (!email.includes('@') || !email.includes('.')) {
    emailInput.style.border = '2px solid red';
    pwError[1].textContent = '유효한 이메일을 입력하세요';
    isValid = false;
  } else {
    emailInput.style.border = '2px solid green';
    pwError[1].textContent = '';
  }

  // 비밀번호 검사
  if (pw.length < 6) {
    pwInput.style.border = '2px solid red';
    pwError[2].textContent = '비밀번호는 최소 6자입니다.';
    isValid = false;
  } else {
    pwInput.style.border = '2px solid green';
    pwError[2].textContent = '';
  }

  // 비밀번호 확인 검사
  if (pw !== pwCheck || !pwCheck) {
    pwCheckInput.style.border = '2px solid red';
    pwError[3].textContent = '비밀번호가 일치하지 않습니다.';
    isValid = false;
  } else {
    pwCheckInput.style.border = '2px solid green';
    pwError[3].textContent = '';
  }

  if (isValid) {
    alert('회원가입 완료!');
  }
});