import { styled } from "styled-components";
import { FaRegUser, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <HeaderStyle>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/assets">보유 자산</Link>
          </li>
          <li>
            <Link to="/transactions">거래 내역</Link>
          </li>
        </ul>
      </nav>
      <nav className="auth">
        {isLoggedIn ? (
          <ul>
            <li>
              <button>로그아웃</button>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/login">
                <FaSignInAlt />
                로그인
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <FaRegUser />
                회원가입
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 0px;
  .navigation {
    margin: 0;
    justify-self: center;
    ul {
      display: flex;
      gap: 50px;
      li {
        a,
        button {
          color: black;
          font-size: 25px;
          font-weight: 600;
          text-decoration: none;
        }
      }
    }
  }
  .auth {
    ul {
      justify-self: end;
      display: flex;
      gap: 20px;
      li {
        a,
        button {
          color: black;
          font-size: 18px;
          font-weight: 500;
          text-decoration: none;
          display: flex;
          align-items: center;
          line-height: 1;
          background: none;
          border: none;
          cursor: pointer;
          gap: 5px;
        }
      }
    }
  }
`;

export default Header;
