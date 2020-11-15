export default {
  get: jest.fn(() => Promise.resolve({ data: { name: "Pei" } })),
  post: jest.fn(() => Promise.resolve({ data: { result: "success" } })),
};
