
export class
Usuario {
  name?: string;
  email?: string;
  password?: string;
  _id?: string;
  status?: boolean

  constructor(_id?: string, usuario: Usuario = {}) {
    this._id = _id;
    this.name = usuario.name;
    this.email = usuario.email;
    this.password = usuario.password;
    this.status = usuario.status
    
  }
}


