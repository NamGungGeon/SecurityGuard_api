import { hashSync } from 'bcryptjs';

const hashPassword = (rawPassword) => hashSync(rawPassword, 10);
export default hashPassword;