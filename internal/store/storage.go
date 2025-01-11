package store

import (
	"context"
	"database/sql"
)

type Storage struct {
	Users interface {
		Create(context.Context, *User) (*User, error)
	}
	Workspaces interface {
		Create(context.Context, *Workspace) (*Workspace, error)
	}
	UserWorkspaces interface {
		Create(context.Context, *UserWorkspace) error
	}

	Achievements interface {
		Create(context.Context, *Achievement) error
	}
}

func NewStorage(db *sql.DB) Storage {
	return Storage{
		Users:          &UserStore{db},
		Workspaces:     &WorkspaceStore{db},
		UserWorkspaces: &UserWorkspaceStore{db},
		Achievements:   &AchievementStore{db},
	}
}
