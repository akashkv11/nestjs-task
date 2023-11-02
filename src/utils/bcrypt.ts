import * as bcrypt from 'bcrypt';
export  function createHash(pass: string): string | undefined {
  const saltOrRounds = 10;
  const password = pass;
  const hash = bcrypt.hashSync(password, saltOrRounds)
  return  hash;
}
export function comparePassword(rawPassword:string, hash:string) {
  return  bcrypt.compareSync(rawPassword, hash);
}
