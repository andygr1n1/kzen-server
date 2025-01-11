package store

import (
	"context"
	"database/sql"
	"time"
)

type UserRole string

const (
	UserRoleAdmin UserRole = "admin"
	UserRoleUser  UserRole = "user"
	UserRoleGuest UserRole = "guest"
)

// model
type User struct {
	ID        string         `json:"id"`
	Name      string         `json:"name"`
	Phone     sql.NullString `json:"phone"`
	Email     string         `json:"email"`
	Avatar    sql.NullString `json:"avatar"`
	Password  string         `json:"password"`
	Coins     int64          `json:"coins"`
	BirthDate sql.NullTime   `json:"birth_date"`
	Role      UserRole       `json:"role"`
	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt sql.NullTime   `json:"deleted_at"`
}

type UserStore struct {
	db *sql.DB
}

func (s *UserStore) Create(ctx context.Context, user *User) (*User, error) {

	query := `
		INSERT INTO users (name, phone, email, avatar, password, coins, birth_date, role)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
		RETURNING id, created_at, updated_at
	`

	row := s.db.QueryRowContext(ctx, query, user.Name, user.Phone, user.Email, user.Avatar, user.Password, user.Coins, user.BirthDate, user.Role)

	err := row.Scan(&user.ID, &user.CreatedAt, &user.UpdatedAt)
	if err != nil {
		return nil, err
	}

	return user, nil
}
