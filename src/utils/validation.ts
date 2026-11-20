export const isValidPhone = (phone: string) => {
  return /^[6-9]\d{9}$/.test(phone);
};

export const isValidAddress = (address: string) => {
  return address.trim().length >= 10;
};