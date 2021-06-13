module.exports = {
	getAction: async (req, res, next) => {
		try {
			const filters = req.query;

			const technologies = await setup.moduleServices['technologyMaster']['technologyMaster'][
				'getTechnologies'
			](filters);
			res.status(200).json(technologies);
		} catch (error) {
			next(error);
		}
	},
	getByIdAction: async (req, res, next) => {
		try {
			const { id } = req.params;

			if (!parseInt(id)) {
				throw new Error('Id must be a number');
			}

			const technology = await setup.moduleServices['technologyMaster']['technologyMaster'][
				'getTechnologyById'
			](id);

			res.status(200).json(technology);
		} catch (error) {
			next(error);
		}
	},
	addAction: async (req, res, next) => {
		try {
			const { technology } = req.body;

			const newTechnology = await setup.moduleServices['technologyMaster'][
				'technologyMaster'
			]['addTechnology'](technology);

			res.status(200).json(newTechnology);
		} catch (error) {
			next(error);
		}
	},
	putAction: async (req, res, next) => {
		try {
			const { technology } = req.body;
			const { id } = req.params;

			if (!parseInt(id)) {
				throw new Error('Id must be a number');
			}

			const updatedTechnology = await setup.moduleServices['technologyMaster'][
				'technologyMaster'
			]['putTechnology'](technology, id);

			res.status(200).json(updatedTechnology);
		} catch (error) {
			next(error);
		}
	},
	deleteAction: async (req, res, next) => {
		try {
			const { id } = req.params;

			if (!parseInt(id)) {
				throw new Error('Id must be a number');
			}

			const technology = await setup.moduleServices['technologyMaster']['technologyMaster'][
				'deleteTechnology'
			](id);

			res.status(200).json(technology);
		} catch (error) {
			next(error);
		}
	},
};
