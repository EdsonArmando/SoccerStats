const jwt = require('jsonwebtoken');
const {users, authentications,countries, quiniela_users} = require('../../database/models');
const Mailer = require('../external-services/email/mail');
const email_structure = require('../external-services/email/emails-structure')
const functions = require('../auxiliary-functions/functions')
const statuses = require('../auxiliary-functions/statuses')

const AWS = require('aws-sdk');
const aws_keys = require('../external-services/aws/awsKeys');
const s3 = new AWS.S3(aws_keys.s3);

function generateToken(user) {
    return jwt.sign(
        {
            id_usuario: user.id,
            id_rol: parseInt(user.rol),
        },
        'SiSaleSA_'
    );
}

function sendResponse(res, status, msg, data) {
    return res.status(status).send({status, msg, data});
}

const getClient = async (req, res) => {
    try {
        const { id } = req.params;
        let user;

        if (id != null) {
            user = await users.findOne({where: {id: id}})
        } else {
            user = await users.findAll();
        }

        if (user == null) {
            return sendResponse(res, 400, "No existe el usuario", []);
        }

        return sendResponse(res, 200, "Informacion personal", user);
    } catch (error) {
        return sendResponse(res, 400, "Error al obtener informacion del usuario", []);
    }
}

const login = async (req, res) => {
    try {
        let data;
        const { email, password } = req.body;

        const user = await users.findOne({ where: { email }})

        if (user == null) return sendResponse(res, 400, "Error de autenticación", []);

        if (functions.comparePassword(password, user.password)) {
            data = {
                token: generateToken(user),
                id_status: user.status,
                id_rol: parseInt(user.rol),
                id_user: user.id,
                has_membership: user.isMember ? 1 : 0
            }

            return sendResponse(res, 200, "", data);
        }
        return sendResponse(res, 200, "Error de autenticación.",[]);
    } catch (error) {
        return sendResponse(res, 200, "Error de autenticación.", []);
    }
}

const createClient = async (req, res) => {
    try {
        const { first_name, last_name, birth_date, password, email, phone, gender, location, isMember, idCountry, rol } = req.body;

        const [user, created] = await users.findOrCreate({
            where: { email: email },
            defaults: {
                first_name, last_name, birth_date, email, phone, gender, location, isMember, idCountry, status : 0, password: functions.encrypt(password), rol
            }
        })
        if( !created ) {
            return sendResponse(res, 400, "El usuario ya existe", user);
        }

        uploadPhoto(req, res, user.id);
        Mailer.sendMail(email_structure.verifyAccount(user.email, user.id));
        return sendResponse(res, 200, "Usuario creado, aún debe verificar el email", user);
    } catch (error) {
        return sendResponse(res, 400, "Error al crear el usuario", []);
    }
}

const updateClient = async (req, res) => {
    try {
        let { id_client, first_name, last_name, birth_date, phone, gender, location, isMember, idCountry, photo } = req.body;

        if (photo != null) {
            uploadPhoto(req, res, id_client);
        }

        const user = await users.update(
            { first_name, last_name, birth_date, phone, gender, location, isMember, idCountry},
            { where: { id: id_client }}
        );

        return sendResponse(res, 200, "Usuario modificado", user);
    } catch (error) {
        return sendResponse(res, 400, "Error al modificar un usuario", []);
    }
}

const deleteClient = async (req, res) => {
    try {
        let { id_client } = req.body;

        const user = await users.update(
            { status : 3},
            { where: { id: id_client }}
        );

        return sendResponse(res, 200, "Cuenta Eliminada", user);
    } catch (error) {
        return sendResponse(res, 400, "Error al eliminar el usuario.", []);
    }
}

const verifyEmail = async (req, res) => {
    try {
        const { id } = req.query;

        const result = await users.update(
            { status: 1 },
            { where: { id } }
        );

        return sendResponse(res, 200, "Cuenta Verificada", result);
    } catch (error) {
        return sendResponse(res, 400, "Error al verificar cuenta", []);
    }
}

const uploadPhoto = async (req, res, id) => {
    const { photo} = req.body;
    let decodedImage = Buffer.from(photo, 'base64');
    let bucket = 'sag12';
    let filepath = `SA/${id}.jpg`;

    let uploadParamsS3 = {
        Bucket: bucket,
        Key: filepath,
        Body: decodedImage,
        ACL: 'public-read',
    };

    s3.upload(uploadParamsS3, async function sync(err) {
        if (!err) {
            await users.update(
                { photo: `https://sag12.s3.amazonaws.com/${filepath}` },
                { where: { id }}
            );
        }
    });
}

const countri = async (req, res) => {
    try {
        let city= await countries.findAll({
            attributes: ['id','nicename']
        });
        return sendResponse(res, 200, "Informacion personal", city);
    } catch (error) {
        return sendResponse(res, 400, "Error al obtener informacion del usuario", []);
    }
}

const getidEmail = async (req, res) => {
    try {
        const { email } = req.body;

        let user;

        if (email != null) {
            user = await users.findOne({where: {email: email}})
        } else {
            user = await users.findAll();
        }

        if (user == null) {
            return sendResponse(res, 400, "No existe el usuario con ese email", []);
        }

        return sendResponse(res, 200, "Informacion personal con el email", user.id);
    } catch (error) {
        return sendResponse(res, 400, "Error al obtener informacion del usuario", []);
    }
}

const joinQuiniela = async (req, res) => {
    try {
        const { idUser, idQuiniela, resultTeam1, resultTeam2 } = req.body;
        const joinedQuiniela = await quiniela_users.create({
            idUser,
            idQuiniela,
            resultTeam1,
            resultTeam2
        });

        if (!joinedQuiniela){
            return sendResponse(res, 500, "Unido a quiniela", []);
        }
        
        return sendResponse(res, 200, "Unido a quiniela", []);
    } catch (error) {
        return sendResponse(res, 500, "Error al unirse a quiniela", []);
    }
}

module.exports = {
    getClient,
    login,
    createClient,
    updateClient,
    verifyEmail,
    countri,
    getidEmail,
    deleteClient,
    joinQuiniela
}