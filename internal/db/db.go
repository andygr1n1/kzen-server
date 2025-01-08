package db

import (
	"context"
	"database/sql"
	"log"
	"time"

	_ "github.com/lib/pq"
)

func Connect(addr string, maxOpenConns int, maxIdleConns int, maxIdleTime time.Duration) (*sql.DB, error) {

	db, err := sql.Open("postgres", addr)

	db.SetMaxOpenConns(maxOpenConns)
	db.SetMaxIdleConns(maxIdleConns)
	db.SetConnMaxIdleTime(maxIdleTime)

	if err != nil {
		log.Fatal(err)
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	err = db.PingContext(ctx)
	if err != nil {
		log.Fatal("Unable to connect to the database:", err)
	}

	log.Printf("Successfully connected to PostgreSQL!")

	return db, nil
}
