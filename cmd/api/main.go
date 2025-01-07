package main

import (
	"log"
	"os"
)

func main() {
	loadEnv()
	port := os.Getenv("PORT")

	cfg := config{
		addr: ":" + port,
	}

	app := &application{
		config: cfg,
	}

	log.Fatal(app.run(app.mount()))
}
