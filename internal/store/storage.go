package store

import (
	"context"
	"database/sql"
)

type Storage struct {
	Users interface {
		Create(context.Context, *User) error
	}

	Achievements interface {
		Create(context.Context, *Achievement) error
	}
}

func NewStorage(db *sql.DB) Storage {
	return Storage{
		Users:        &UserStore{db},
		Achievements: &AchievementStore{db},
	}
}
