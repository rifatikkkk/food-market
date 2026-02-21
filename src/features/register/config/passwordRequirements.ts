interface PasswordRequirements {
  key: string;
  test: (password: string) => boolean;
}

export const passwordRequirements: PasswordRequirements[] = [
  {
    key: "Minimal length",
    test: (password: string) => password.length >= 8,
  },
  {
    key: "Contains atleast 1 uppercase symbol",
    test: (password: string) => /[A-Z]/.test(password),
  },
  {
    key: "No spaces allowed",
    test: (password: string) => !/\s/.test(password),
  },
  {
    key: "Contains atleast 1 number",
    test: (password: string) => /\d/.test(password),
  },
];
