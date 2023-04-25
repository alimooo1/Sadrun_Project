export const passwordValidation = (password) => {
  if (password.trim()?.length === 0)
    return { isValid: false, message: "پسورد خود را وارد کنید." };
  if (password.trim()?.length < 10)
    return {
      isValid: false,
      message: "رمز عبور شما باید بیشتر از 10 عدد باشد.",
    };

  return { isValid: true };
};

export const nameValidation = (name) => {
  if (name.trim()?.length === 0)
    return {
      isValid: false,
      message: "نام و نام خانوادگی را به طور صحیح وارد کنید",
    };

  return { isValid: true };
};
export const emailValidation = (email) => {
  if (email.trim()?.length === 0)
    return { isValid: false, message: "ایمیل خود را وارد کنید" };

  return { isValid: true };
};
export const nationalCodeValidation = (nationalCode) => {
  if (nationalCode.trim()?.length === 0)
    return { isValid: false, message: "کد ملی خود را وارد کنید" };
  if (nationalCode.trim()?.length !== 10)
    return {
      isValid: false,
      message: "کد ملی شما باید شامل 10 عدد باشد.",
    };
  return { isValid: true };
};
export const mobileValidation = (mobile) => {
  if (mobile.trim()?.length === 0)
    return { isValid: false, message: "شماره همراه خود را وارد کنید" };
  if (mobile.trim()?.length !== 11)
    return {
      isValid: false,
      message: "شماره همراه باید شامل 11 رقم باشد",
    };
  return { isValid: true };
};

// ?. اگر وجود داشت برو بعدی
