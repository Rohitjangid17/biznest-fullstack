import Provider from '../db/models/provider.model.js'

export const createProvider = async (data) => await Provider.create(data);

export const getProvidersByUserId = async (userId) =>
    await Provider.find({ createdBy: userId });

export const getProviderByIdAndUser = async (id, userId) =>
    await Provider.findOne({ _id: id, createdBy: userId });

export const updateProvider = async (id, userId, data) =>
    await Provider.findOneAndUpdate({ _id: id, createdBy: userId }, data, { new: true });

export const deleteProvider = async (id, userId) =>
    await Provider.findOneAndDelete({ _id: id, createdBy: userId });