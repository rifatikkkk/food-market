import type { FormEvent } from "react";

import ArrowRight from "@/shared/assets/icons/ArrowRight.svg?react";
import MailIcon from "@/shared/assets/icons/Mail.svg?react";
import PhoneIcon from "@/shared/assets/icons/Phone.svg?react";
import { AuthMethod } from "@/shared/config";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { AppIcon, Button, Input, PhoneInput, Tabs } from "@/shared/ui";

import styles from "./CredentialsStep.module.scss";

import { selectRegisterEmail } from "@/features/register/model/selectors/selectRegisterEmail/selectRegisterEmail";
import { selectRegisterError } from "@/features/register/model/selectors/selectRegisterError/selectRegisterError";
import { selectRegisterIsLoading } from "@/features/register/model/selectors/selectRegisterIsLoading/selectRegisterLoading";
import { selectRegisterMethod } from "@/features/register/model/selectors/selectRegisterMethod/selectRegisterMethod";
import { selectRegisterPhone } from "@/features/register/model/selectors/selectRegisterPhone/selectRegisterPhone";
import { registerActions } from "@/features/register/model/slice/registerSlice";
import { FormSteps } from "@/features/register/model/types/registerForm";

export const CredentialsStep = () => {
  const dispatch = useAppDispatch();

  const email = useAppSelector(selectRegisterEmail);
  const phone = useAppSelector(selectRegisterPhone);
  const isLoading = useAppSelector(selectRegisterIsLoading);
  const method = useAppSelector(selectRegisterMethod);
  const error = useAppSelector(selectRegisterError);

  const handleChangeEmail = (value: string) => {
    dispatch(registerActions.setEmail(value));
  };
  const handleChangePhone = (value: string) => {
    dispatch(registerActions.setPhone(value));
  };

  const handleTabChange = () => {
    dispatch(
      registerActions.setMethod(
        method === AuthMethod.EMAIL ? AuthMethod.PHONE : AuthMethod.EMAIL,
      ),
    );
    dispatch(registerActions.resetForm());
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerActions.setStep(FormSteps.PASSWORD));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Tabs onChange={handleTabChange} defaultValue={method}>
        <Tabs.List>
          <Tabs.Trigger value={AuthMethod.EMAIL}>
            <AppIcon Icon={MailIcon} />
            Email
          </Tabs.Trigger>
          <Tabs.Trigger value={AuthMethod.PHONE}>
            <AppIcon Icon={PhoneIcon} />
            Phone
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value={AuthMethod.EMAIL}>
          <Input
            disabled={isLoading}
            error={!!error}
            label="Email"
            type="email"
            onChange={handleChangeEmail}
            value={email}
            placeholder="Enter your email"
          />
        </Tabs.Content>
        <Tabs.Content value={AuthMethod.PHONE}>
          <PhoneInput
            disabled={isLoading}
            error={!!error}
            label="Phone"
            onChange={handleChangePhone}
            value={phone}
          />
        </Tabs.Content>
      </Tabs>
      {error && <div className={styles.error}>{error}</div>}
      <Button
        className={styles.button}
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
