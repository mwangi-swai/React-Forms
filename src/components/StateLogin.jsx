import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  //HOOKS
  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: emailHasError
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {value: passwordValue, handleInputChange: handlePasswordChange, handleInputBlur:handlePasswordBlur, hasError:passwordHasError}= useInput('', (value) => hasMinLength(value,8))



  // EVENT HANDLER FUNTION
  function handleSubmit(e) {
    e.preventDefault();

    if(emailHasError || passwordHasError){
      return
    }
    console.log(emailValue, passwordValue);

  }

  // JSX CODE
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="email"
          id="email"
          type="email"
          name="email"
          value={emailValue}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          error={emailHasError && "Please enter a valid email"}
        />
        <Input
          label="password"
          id="password"
          type="password"
          name="password"
          value={passwordValue}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          error={passwordHasError && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
