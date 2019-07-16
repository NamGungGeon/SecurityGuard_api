import { hashSync } from 'bcrypt';

const hashPassword = (rawPassword) => hashSync(rawPassword, 10);
export default hashPassword;