import crypto from 'crypto';

const encrypt = value => crypto.createHmac('sha256', value).digest('hex');

export default encrypt;
