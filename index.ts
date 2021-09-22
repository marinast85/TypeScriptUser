interface UserProps {
    firstName: string
    lastName: string
    userName: string
    email: string
    password: string
    cpf: string
    contact: number
    isAdmin: string
}

//o implements é o que vai fazer eu implementar informações na minha class Carro
class User implements UserProps{
    firstName!: string;
    lastName!: string;
    userName!: string;
    email!: string;
    password!: string;
    cpf!: string;
    contact!: number;
    isAdmin!: boolean;

    constructor(firstName: string, lastName: string, userName: string, email: string, password: string, cpf: number, contact: number, isAdmin: boolean) {

        this.firstName = firstName
        this.lastName = lastName
        this.userName = userName
        this.email = email
        this.password = password
        this.cpf = cpf
        this.contact = contact
        this.isAdmin = isAdmin
    }

    getfirstName(){
        return this.firtsName;
    }

    setfirtsName(firstName: string){
        this.firstName = firstName;
    }

    getlastName() {
        return this.lastName;
    }

    setlastName(lastName: string) {
        this.lastName = lastName;
    }

    getserName() {
        return this.userName;
    }

    setusername(userName: string) {
        this.userName = userName;
    }

    getemail() {
        return this.email;
    }

    setemail(email: string) {
        this.email = email;
    }

    getpassword() {
        return this.password;
    }

    setpassword(password: string) {
        this.password = password;
    }

    getcpf() {
        return this.cpf;
    }

    setcpf(cpf: string) {
        this.cpf = cpf;
    }

    getcontacto() {
        return this.contact;
    }

    setcontacto(contact: number) {
        this.contact = contact;
    }


    getisAdmin() {
        return this.isAdmin;
    }

    setisAdmin(isAdmin: boolean) {
        this.isAdmin = isAdmin;
    }
}

let usuario = new User ("Marina", "Silveira Toledo", "marinast85", "m.stoledo85@gmail.com", "1234567890", "111.111.111-99", 5511939305757, true);

console.log(usuario);
