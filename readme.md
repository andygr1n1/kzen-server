## init

```
go mod init github.com/yourusername/yourprojectname
go mod tidy
```

```
go get -u github.com/gorilla/mux

https://github.com/go-chi/chi
go get -u github.com/go-chi/chi/v5
```

```
go get github.com/lib/pq
```

```
go get github.com/joho/godotenv
```

## run

```
go run cmd/api/*.go
***
air
```

### Documentation
https://gowebexamples.com/
https://gowebexamples.com/mysql-database/

#### ORM

```
gorm
sqlx
sqlboiler
```

#### Migration

```
golang-migrate/migrate
goose
```

```
migrate create -seq -ext sql -dir ./cmd/migrate/migrations create_heroes  

migrate -path ./cmd/migrate/migrations -database postgres://postgres:grini@localhost:6008/kzen\?sslmode=disable up

```
