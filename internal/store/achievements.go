package store

import (
	"context"
	"database/sql"
	"time"
)

// model
type Achievement struct {
	ID          string         `json:"id"`
	UserID      string         `json:"owner_id"`
	Title       string         `json:"title"`
	Description sql.NullString `json:"description"`
	ImgPath     sql.NullString `json:"img_path"`
	IsFavorite  bool           `json:"is_favorite"`
	Archived    bool           `json:"archived"`
	Freezed     bool           `json:"freezed"`
	CreatedAt   time.Time      `json:"created_at"`
	UpdatedAt   time.Time      `json:"updated_at"`
	DeletedAt   sql.NullTime   `json:"deleted_at"`
}

type AchievementStore struct {
	db *sql.DB
}

func (s *AchievementStore) Create(ctx context.Context, achievement *Achievement) error {
	query := `
		INSERT INTO achievements (owner_id, title, description, img_path, is_favorite, archived, freezed)
		VALUES ($1, $2, $3, $4, $5, $6, $7)
		RETURNING id, created_at, updated_at
	`

	row := s.db.QueryRowContext(ctx, query,
		achievement.UserID,
		achievement.Title,
		achievement.Description,
		achievement.ImgPath,
		achievement.IsFavorite,
		achievement.Archived,
		achievement.Freezed,
	)

	if err := row.Scan(&achievement.ID, &achievement.CreatedAt, &achievement.UpdatedAt); err != nil {
		return err
	}

	return nil
}
