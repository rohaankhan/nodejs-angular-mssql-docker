require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_CONN_STR, {
	useUnifiedTopology: true,
	useNewUrlParser: true
});

app.get("/documents", (req, res) => {
	// TODO: Document model declaration
	// const docs = Document.findMany({});
	let docs = null;
	return docs || [];
});

const PORT = process.env.PORT || 4200;

app.listen(PORT, () => console.log(`listening on: localhost:${PORT}`));