
import Usuario from '../models/usuario';

export const index = async (req, res) => {
    const usuario = await Usuario.findAll({});
    res.json({ data: usuario.map((usuario) => usuario.toJSON()) });
};

export const show = async (req, res) => {

    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
        res.json({ data: usuario.toJSON() });
    } else {
        res
            .status(404)
            .json({ message: `No se encontro el usuario con el id ${req.params.id}` });
    }
};

export const create = async (req, res) => {

    try {
        if (req.body.nombre !== undefined &&
            req.body.direccion !== undefined &&
            req.body.telefono !== undefined &&
            req.body.mail !== undefined &&
            req.body.dni !== undefined &&
            req.body.idRol !== undefined) {
            const usuario = await Usuario.create({
                nombre: req.body.nombre,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                mail: req.body.mail,
                dni: req.body.dni,
                idRol: req.body.idRol
            });
            res.status(200).send({ id: usuario.id });
        }
        else {
            if (req.body.nombre === undefined) {
                res.status(400).json('Nombre no recibido');
            }
            if (req.body.direccion === undefined) {
                res.status(400).json('direccion no recibido');
            }
            if (req.body.telefono === undefined) {
                res.status(400).json('telefono no recibido');
            }
            if (req.body.mail === undefined) {
                res.status(400).json('mail no recibido');
            }
            if (req.body.dni === undefined) {
                res.status(400).json('dni no recibido');
            }
            if (req.body.idRol === undefined) {
                res.status(400).json('idRol no recibido');
            }

        }

    } catch (err) {
        return res.status(500).send(err);
    }
};

export const update = async (req, res) => {

    try {
        if (req.body.nombre !== undefined &&
            req.body.direccion !== undefined &&
            req.body.telefono !== undefined &&
            req.body.mail !== undefined &&
            req.body.dni !== undefined &&
            req.body.idRol !== undefined) {
            const usuario = await Usuario.findByPk(req.params.id);
            console.log(usuario.toJSON());
            usuario.nombre = req.body.nombre;
            usuario.direccion = req.body.direccion;
            usuario.telefono = req.body.telefono;
            usuario.mail = req.body.mail;
            usuario.dni = req.body.dni;
            usuario.idRol = req.body.idRol;
            await usuario.save();

            res.status(200).send({ id: usuario.id });
        }
        else {
            if (req.body.nombre === undefined) {
                res.status(400).json('Nombre no recibido');
            }
            if (req.body.direccion === undefined) {
                res.status(400).json('direccion no recibido');
            }
            if (req.body.telefono === undefined) {
                res.status(400).json('telefono no recibido');
            }
            if (req.body.mail === undefined) {
                res.status(400).json('mail no recibido');
            }
            if (req.body.dni === undefined) {
                res.status(400).json('dni no recibido');
            }
            if (req.body.idRol === undefined) {
                res.status(400).json('idRol no recibido');
            }

        }

    } catch (err) {
        return res.status(500).send(err);
    }
};

