const Pool = require('pg').Pool
const pool = new Pool({
	user: 'sxbtxaggihuyvu',
	host: 'ec2-54-225-72-238.compute-1.amazonaws.com',
	database: 'dcq5d9454pptr1'.
	password: '696be80e0a36ef3058e3e57eae9e69eb953b8073a45bba7a65468e0921761828',
	port: 5432
})

const getProfiles = (request, response) => {
	pool.query('SELECT * FROM profile ORDER BY id ASC', (error, results) => {
		if (error) {
			throw error
		}
		response.status(200).json(results.rows)
	})
}

const getProfileByUsername = (request, response) => {
	const username = request.params.username

	pool.query('SELECT * FROM profile WHERE username = $1', [username], (error, results) => {
		if (error) {
			throw error
		}
		response.status(200).json(results.rows)
	})
}

const createProfile = (request, response) => {
	const { username, password, first_name, last_name, type } = request.body

	pool.query('INSERT INTO profile (username, password, first_name, last_name, type) VALUES ($1, $2, $3, $4, $5)',
		[username, password, first_name, last_name, type], (error, results) => {
			if (error) {
				throw error
			}
			response.status(201).send(`User added with ID: ${result.insertId}`)
		})
}

module.exports = {
	getProfiles,
	getProfileByUsername,
	createProfile
}