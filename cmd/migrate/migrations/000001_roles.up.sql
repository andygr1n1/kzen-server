-- Create a lookup table for roles
CREATE TABLE IF NOT EXISTS roles (
    id TEXT UNIQUE PRIMARY KEY,
    name TEXT UNIQUE NOT NULL
);

-- Insert enum-like values into the lookup table
INSERT INTO roles (id, name) VALUES ('admin', 'Admin'), ('super_hero', 'Super Hero'), ('hero', 'Hero'), ('guest', 'Guest');
