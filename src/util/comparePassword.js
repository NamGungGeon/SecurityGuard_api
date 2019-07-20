import { compareSync } from 'bcryptjs';

const comparePassword = (rawPassword, password) => compareSync(rawPassword, password);
export default comparePassword;