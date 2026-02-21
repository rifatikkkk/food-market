import { useState, type FormEvent } from "react";

import ArrowRight from "@/shared/assets/icons/ArrowRight.svg?react";
import CheckIcon from "@/shared/assets/icons/Check.svg?react";
import { cn, useAppDispatch, useAppSelector } from "@/shared/lib";
import { AppIcon, Button, Input } from "@/shared/ui";

import styles from "./CreatePasswordStep.module.scss";

import { passwordRequirements } from "@/features/register/config/passwordRequirements";
import { selectRegisterEmail } from "@/features/register/model/selectors/selectRegisterEmail/selectRegisterEmail";
import { selectRegisterIsLoading } from "@/features/register/model/selectors/selectRegisterIsLoading/selectRegisterLoading";
import { selectRegisterPassword } from "@/features/register/model/selectors/selectRegisterPassword/selectRegisterPassword";
import { selectRegisterPhone } from "@/features/register/model/selectors/selectRegisterPhone/selectRegisterPhone";
import { register } from "@/features/register/model/services/register";
import { registerActions } from "@/features/register/model/slice/registerSlice";

export const CreatePasswordStep = () => {
  const dispatch = useAppDispatch();

  const [validationError, setValidationError] = useState(false);

  const email = useAppSelector(selectRegisterEmail);
  const phone = useAppSelector(selectRegisterPhone);
  const isLoading = useAppSelector(selectRegisterIsLoading);
  const password = useAppSelector(selectRegisterPassword);

  const handleChangePassword = (value: string) => {
    dispatch(registerActions.setPassword(value));

    const isValid = passwordRequirements.every((requirement) =>
      requirement.test(value),
    );

    setValidationError(!isValid ? true : false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validationError) {
      dispatch(register({ email, password, phone }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        disabled={isLoading}
        label="Password"
        type="password"
        className={styles.input}
        placeholder="Enter your password"
        onChange={handleChangePassword}
        value={password}
      />
      <div className={styles.requirementsList}>
        {passwordRequirements.map((requirement) => {
          const isMet = requirement.test(password);
          return (
            <div key={requirement.key} className={styles.requirement}>
              <AppIcon
                size={16}
                className={cn(styles.requirementIcon, { [styles.met]: isMet })}
                Icon={CheckIcon}
              />
              <span className={styles.requirementText}>{requirement.key}</span>
            </div>
          );
        })}
      </div>
      <Button
        className={styles.button}
        disabled={validationError}
        isLoading={isLoading}
        type="submit"
        fullWidth
        size="md"
      >
        Continue
        <AppIcon Icon={ArrowRight} />
      </Button>
    </form>
  );
};
