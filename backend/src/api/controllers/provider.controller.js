import * as providerRepo from '../../infrastructure/repositories/provider.repository.js';

export const create = async (req, res) => {
    try {
        const provider = await providerRepo.createProvider({
            ...req.body,
            createdBy: req.user._id
        });
        res.status(201).json(provider);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getAll = async (req, res) => {
    try {
        const providers = await providerRepo.getProvidersByUserId(req.user._id);
        res.status(200).json(providers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getById = async (req, res) => {
    try {
        const provider = await providerRepo.getProviderByIdAndUser(req.params.id, req.user._id);
        if (!provider) return res.status(404).json({ message: 'Not found or unauthorized' });
        res.status(200).json(provider);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const update = async (req, res) => {
    try {
        const provider = await providerRepo.updateProvider(req.params.id, req.user._id, req.body);
        if (!provider) return res.status(404).json({ message: 'Not found or unauthorized' });
        res.status(200).json(provider);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const remove = async (req, res) => {
    try {
        const provider = await providerRepo.deleteProvider(req.params.id, req.user._id);
        if (!provider) return res.status(404).json({ message: 'Not found or unauthorized' });
        res.status(200).json({ message: 'Provider deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};