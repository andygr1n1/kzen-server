CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL CHECK (name <> ''),
    phone VARCHAR(255) NULL,
    email citext UNIQUE NOT NULL CHECK (email <> ''),
    avatar TEXT NULL,
    birth_date TIMESTAMP NULL,
    coins INT DEFAULT 0,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'guest',
    created_at timestamp(0) with time zone NOT NULL DEFAULT NOW(),
    updated_at timestamp(0) with time zone NOT NULL DEFAULT NOW(),
    deleted_at timestamp(0) with time zone NULL
)