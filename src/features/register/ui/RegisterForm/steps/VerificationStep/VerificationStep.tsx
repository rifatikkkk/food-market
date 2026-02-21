import { useNavigate } from "react-router";

import { routePaths } from "@/shared/config";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { Button, OTPInput, Spinner } from "@/shared/ui";

import styles from "./VerificationStep.module.scss";

import { selectRegisterEmail } from "@/features/register/model/selectors/selectRegisterEmail/selectRegisterEmail";
import { selectRegisterError } from "@/features/register/model/selectors/selectRegisterError/selectRegisterError";
import { selectRegisterIsLoading } from "@/features/register/model/selectors/selectRegisterIsLoading/selectRegisterLoading";
import { selectRegisterPhone } from "@/features/register/model/selectors/selectRegisterPhone/selectRegisterPhone";
import { resendCode } from "@/features/register/model/services/resendCode";
import { verifyCode } from "@/features/register/model/services/verifyCode";

export const VerificationStep = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const email = useAppSelector(selectRegisterEmail);
  const phone = useAppSelector(selectRegisterPhone);
  const error = useAppSelector(selectRegisterError);
  const isLoading = useAppSelector(selectRegisterIsLoading);

  const onSubmit = async (code: string) => {
    const result = await dispatch(verifyCode({ email, phone, code }));
    if (verifyCode.fulfilled.match(result)) {
      navigate(routePaths.home);
    }
  };

  const handleResend = () => {
    dispatch(resendCode({ email, phone }));
  };

  return (
    <>
      <form className={styles.form}>
        <div className={styles.title}>
          Sent to <br />
          <span>{email || phone}</span>
        </div>
        <OTPInput disabled={isLoading} error={!!error} onComplete={onSubmit} />
        {error && <div className={styles.error}>{error}</div>}
        {isLoading && (
          <div className={styles.wrapper}>
            <Spinner size="md" />
          </div>
        )}
      </form>
      <div className={styles.resendCodeText}>
        <span>Code not received?</span>
        <Button
          className={styles.resendCodeButton}
          disabled={isLoading}
          theme="ghost"
          onClick={handleResend}
        >
          Resend
        </Button>
      </div>
    </>
  );
};
