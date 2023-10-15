export class SessionsController{

    static redirectLogin = (req,res)=>{
        res.redirect("/profile");
    }
    static signup = (req,res)=>{
        res.render("login",{message:"usuario registrado"});
    }
    static failSignup = (req,res)=>{
        res.render("signup",{error:"No se pudo registrar el usuario"});
    }
    static failLogin = (req,res)=>{
        res.render("login",{error:"Credenciales invalidas"});
    }
    static changePassword = async(req,res)=>{
        try {
            const form = req.body;
            const user = await usersService.getByEmail(form.email);
            if(!user){
                return res.render("changePassword",{error:"No es posible cambiar la contraseña"});
            }
            user.password = createHash(form.newPassword);
            console.log(user);
            await usersService.update(user._id,user);
            return res.render("login",{message:"Contraseña restaurada"})
        } catch (error) {
            res.render("changePassword",{error:error.message});
        }
    }
    static loginGitHub = (req,res)=>{
        res.redirect("/profile");
    }
    static logout = (req,res)=>{
        req.logOut(error=>{
            if(error){
                return res.render("profile",{user: req.user, error:"No se pudo cerrar la sesion"});
            } else {
                //req.session.destroy elimina la sesion de la base de datos
                req.session.destroy(error=>{
                    if(error) return res.render("profile",{user: req.session.userInfo, error:"No se pudo cerrar la sesion"});
                    res.redirect("/");
                })
            }
        })
    }
}