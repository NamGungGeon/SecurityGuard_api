import { compareSync } from 'bcrypt';

const comparePassword = (rawPassword, password) => compareSync(rawPassword, password);
export default comparePassword;