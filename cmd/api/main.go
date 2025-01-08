package main

import (
	"fmt"
	"log"
	"time"

	"github.com/andygr1n1/kzen-server/internal/db"
	"github.com/andygr1n1/kzen-server/internal/env"
	"github.com/andygr1n1/kzen-server/internal/store"
)

func main() {
	loadEnv()
	/* env */
	port := env.GetString("PORT", "8080")
	dbHost := env.GetString("DB_HOST", "localhost")
	dbPort := env.GetString("DB_PORT", "6008")
	dbUser := env.GetString("DB_USER", "postgres")
	dbPassword := env.GetString("DB_PASSWORD", "grini")
	dbName := env.GetString("DB_NAME", "public")
	/* db address */
	dbAddr := fmt.Sprintf("host=%s port=%s user=%s "+
		"password=%s dbname=%s sslmode=disable",
		dbHost, dbPort, dbUser, dbPassword, dbName)

	cfg := config{
		addr: ":" + port,
		db: dbConfig{
			addr:         dbAddr,
			maxOpenConns: env.GetInt("DB_MAX_OPEN_CONNS", 30),
			maxIdleConns: env.GetInt("DB_MAX_IDLE_CONNS", 30),
			maxIdleTime:  env.GetDuration("DB_MAX_IDLE_TIME", 15*time.Minute),
		},
	}

	db, err := db.Connect(cfg.db.addr, cfg.db.maxOpenConns, cfg.db.maxIdleConns, cfg.db.maxIdleTime)
	if err != nil {
		log.Panic("Unable to connect to the database:", err)
	}

	defer db.Close()

	store := store.NewStorage(db)

	app := &application{
		config: cfg,
		store:  store,
	}

	log.Fatal(app.run(app.mount()))
}
