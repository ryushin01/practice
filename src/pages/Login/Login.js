import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../svg/Logo.svg';
import { ReactComponent as LogoWecode } from '../../svg/logo_wecode.svg';
import './Login.scss';

function Login() {
  // 2. 입력되는 값을 저장할 변수와 상태 변화를 위한 useState 함수 선언
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  // 3. userInfo 변수 안에 저장될 key를 구조 분해 할당 진행
  const { email, password } = userInfo;

  // 13. 로그인 성공 여부에 따라 다음 스텝 처리를 위한 useState 함수 선언
  const [loginComplete, setLoginComplete] = useState(false);

  // 15. 로그인 성공 시 페이지 이동을 위한 useNavigate 함수 선언
  const navigate = useNavigate();

  // 1. 실제 입력되는 input이 무엇인지, 그리고 그 값을 받아오기 위한 함수 생성
  // 4. name과 value를 useState의 setter 함수를 통해 userInfo에 저장
  const typingSentry = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // 5. 입력되는 값의 유효성 검증을 위한 email validation check 함수 생성
  const emailValidationCheck = email => {
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    // 유효한 경우에 return 반환
    return regExp.test(email);
  };

  // 6. 입력되는 값의 유효성 검증을 위한 password validation check 함수 생성
  const passwordValidationCheck = password => {
    if (password.length >= 10) {
      return true;
    }
    return false;
  };

  // 7. submit button의 활성화 조건 판단
  const isDisabled = !(
    emailValidationCheck(email) && passwordValidationCheck(password)
  )
    ? true
    : false;

  // 8. form의 onSubmit과 submit button의 이벤트 핸들러에 fetch 메서드 연결
  const submitUserInfo = e => {
    e.preventDefault();

    fetch('/data/responseData.json', {
      // method: 'POST',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // 9. body 안에 구조 분해 할당한 email과 password 처리
      // body: JSON.stringify({
      //   email: email,
      //   password: password,
      // }),
    })
      .then(response => {
        // 10. 정상적으로 통신되면 응답의 결과물을 JavaScript로 변환
        if (response.status === 200) {
          return response.json();
        }
        // 11. 통신 실패 시 에러를 catch 메서드로 던져서 출력
        throw new Error('communication failure');
      })
      .then(result => {
        // 12. 약속된 message가 내려오면 local storage에 access token 저장
        if (result.message === 'login success') {
          localStorage.setItem('accessToken', result.accessToken);
          // 14. 로그인 성공 후 다음 스텝을 위해 setter 함수 발동
          setLoginComplete(true);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  // 16. loginComplete를 구독한 상태에서 리렌더링하여 조건 맞을 경우에만 콜백 함수 발동
  useEffect(() => {
    if (loginComplete === true) {
      // 17. 콜백 함수 안에서 useNavigate 처리로 페이지 이동
      navigate('/post');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginComplete]);

  return (
    <div className="login">
      <section className="splash">
        <hgroup>
          <h1>
            <Logo />
          </h1>
          <h2>
            <LogoWecode />
          </h2>
        </hgroup>
      </section>
      <section className="container">
        <form
          className="login-form"
          onChange={typingSentry}
          onSubmit={submitUserInfo}
        >
          <fieldset>
            <legend className="hidden">로그인 양식</legend>
            <div>
              <label>
                <input type="text" name="email" placeholder="이메일" />
              </label>
            </div>
            <div>
              <label>
                <input type="password" name="password" placeholder="비밀번호" />
              </label>
            </div>
            <button
              type="submit"
              onClick={submitUserInfo}
              disabled={isDisabled}
            >
              로그인
            </button>
          </fieldset>
        </form>
      </section>
    </div>
  );
}

export default Login;
