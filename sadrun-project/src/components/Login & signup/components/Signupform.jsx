import { Link } from "react-router-dom";
import signup from "../assets/SVGs/images/signup.png";
import Input from "./inputs/Input";
import Button from "./button/Button";
import DateInput from "./inputs/DateInput";
import "./button/Button.scss";
import { useState } from "react";
import {
  emailValidation,
  mobileValidation,
  nameValidation,
  nationalCodeValidation,
  passwordValidation,
} from "./utils/validation";

const initialFormInputs = {
  name: "",
  email: "",
  password: "",
  nationalCode: "",
  mobile: "",
  date: "",
};

const initialErrorInputs = {
  nameError: "",
  emailError: "",
  passwordError: "",
  nationalCodeError: "",
  mobileError: "",
  dateError: "",
};

const SignupForm = () => {
  const [formInputs, setFormInputs] = useState(initialFormInputs);
  const [errorForm, setErrorForm] = useState(initialErrorInputs);

  const { name, email, password, nationalCode, mobile, date } = formInputs;
  const {
    nameError,
    emailError,
    passwordError,
    nationalCodeError,
    mobileError,
    dateError,
  } = errorForm;

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formInputs);

    // Validation

    if (!nameValidation(name).isValid)
      return setErrorForm({
        ...errorForm,
        nameError: nameValidation(name).message,
      });
    if (!emailValidation(email).isValid)
      return setErrorForm({
        ...errorForm,
        emailError: emailValidation(email).message,
      });
    if (!passwordValidation(password).isValid)
      return setErrorForm({
        ...errorForm,
        passwordError: passwordValidation(password).message,
      });
    if (!nationalCodeValidation(nationalCode).isValid)
      return setErrorForm({
        ...errorForm,
        nationalCodeError: nationalCodeValidation(nationalCode).message,
      });
    if (!mobileValidation(mobile).isValid)
      return setErrorForm({
        ...errorForm,
        mobileError: mobileValidation(mobile).message,
      });
  };

  // @Dev tracking the values of the inputs
  const handleChange = (event) => {
    setErrorForm(initialErrorInputs)
    const { name, value } = event.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  //@Dev reset sing up inptus
  return (
    <div className="w-full overflow-hidden rounded-xl shadow-xl" 
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-duration="1500" >
      <div className="container mx-auto flex justify-center items-center rounded-xl bg-white h-[570px] shadow-xl border">
        <div className="flex flex-col items-center justify-center rounded-2xl ">
          <div className="pt-[26px]">
            <img className="w-10 mt-2" src={signup} alt="signup icon" />
          </div>
          <h1 className="font-vazirmatnBold text-lg text-center mb-[10px]">
            ثبت نام
          </h1>
          <form className="w-[380px] max-sm:flex max-sm:justify-center max-sm:flex-col max-sm:items-center" onSubmit={handleSubmit}>
            <Input
              placeholder="نام و نام خانوادگی"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              errorMessage={nameError}
            />

            <Input
              placeholder="ایمیل"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              errorMessage={emailError}
            />

            <Input
              placeholder="رمز عبور"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              errorMessage={passwordError}
            />

            <Input
              placeholder="کد ملی"
              type="text"
              name="nationalCode"
              value={nationalCode}
              onChange={handleChange}
              errorMessage={nationalCodeError}
            />

            <Input
              placeholder="شماره موبایل"
              type="text"
              name="mobile"
              value={mobile}
              onChange={handleChange}
              errorMessage={mobileError}
            />

            <DateInput name="date" value={date} placeholder="تاریخ تولد" />

            <Button className='w-[380px] max-sm:w-[350px] h-8 rounded-lg bg-[#36c54e] text-white' buttonType={"form-sign-up-button"}>ثبت نام</Button>
          </form>
          <Link
            to="/Login"
            className="text-sm font-vazirmatnLight mt-2 mb-4 text-[#C200BC]"
          >
            ورود به حساب کاربری
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;

