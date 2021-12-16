import React from "react";
import "./styles/loginStyles.scss";
import googleIcon from "./assets/GoogleIcon.svg";
import AsideImage from "./assets/PeopleLogin.svg";

type Login = {
  email: string;
  password: string;
  remember: boolean;
};

function App(): JSX.Element {
  const [{ email, password, remember }, setState] = React.useState<Login>({
    email: "",
    password: "",
    remember: false,
  });

  const changeState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div id="login-form">
      <aside>
        <img src={AsideImage} alt="Imagem do login" />
      </aside>
      <main>
        <div className="form">
          <h2>Bem vindo de volta</h2>
          <h1>Faça login na sua conta</h1>
          <span>E-mail</span>
          <input
            type="text"
            name="email"
            className="textField"
            value={email}
            onChange={changeState}
          />
          <span>Senha</span>
          <input
            type="password"
            name="password"
            className="textField"
            value={password}
            onChange={changeState}
          />
          <div className="rememberMe">
            <div>
              <input
                type="radio"
                name="remember"
                checked={remember}
                onChange={e =>
                  setState(prev => ({ ...prev, remember: e.target.checked }))
                }
              />
              <span>Lembre de mim </span>
            </div>
            <a href="">Esqueceu sua senha? </a>
          </div>
          <button>Entrar</button>
          <button className="googleAuth">
            <img src={googleIcon} alt="Logo do Google" />
            Ou faça login com o Google
          </button>
        </div>
        <div>
          <span>
            Não tem uma conta? <a href="">Cadastre-se</a>
          </span>
        </div>
      </main>
    </div>
  );
}

export default App;
