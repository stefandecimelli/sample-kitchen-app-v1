import swaggerAutogen from "swagger-autogen"

swaggerAutogen("../openapi.json", ["../index.ts"], {
	info: {
		title: 'Sample Kitchen App V1 API',
		description: 'Api for the Sample Kitchen App'
	},
	host: 'localhost:8080'
})
