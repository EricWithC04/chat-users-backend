import UserModel from "../models/user.model.js";

export const getAllUsers = async () => {
    const users = await UserModel.findAll();
    return users;
}

export const getUserById = async (id) => {
    const user = await UserModel.findByPk(id);
    return user;
}

export const createUser = async (data) => {
    const user = await UserModel.create(data);
    return user;
}

export const updateUser = async (id, data) => {
    const user = await UserModel.update(data, { where: { id } });
    return user;
}

export const deleteUser = async (id) => {
    const user = await UserModel.destroy({ where: { id } });
    return user;
}