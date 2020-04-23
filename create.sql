-- noinspection SqlDialectInspectionForFile

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

CREATE TYPE genre AS ENUM (
    'Electronic',
    'Rock',
    'Hip-Hop',
    'Rap',
    'Folk',
    'Country',
    'Jazz',
    'Blues',
    'R&B',
    'Pop',
    'Classical',
    'Funk',
    'Reggae',
    'Techno',
    'House',
    'Indie'
);

CREATE TABLE user (
    user_id SERIAL PRIMARY KEY,
    username text NOT NULL,
    password text NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text,
    fav_genre genre,
    friendlist_id smallint NOT NULL,
    activebool boolean DEFAULT true NOT NULL,
    create_date date DEFAULT ('now'::text)::date NOT NULL,
    last_update timestamp with time zone DEFAULT now(),
    active integer
);

CREATE TABLE comment (
    comment_id SERIAL PRIMARY KEY,
    user_id int,
    message text NOT NULL,
    sent timestamp with time zone
);

CREATE TABLE photo (
    photo_id SERIAL PRIMARY KEY,
    name text NOT NULL,
    href text,
    last_update timestamp with time zone DEFAULT now()
);

CREATE TABLE video (
    video_id SERIAL PRIMARY KEY,
    name text NOT NULL,
    href text,
    duration_ms integer,
    last_update timestamp with time zone DEFAULT now()
);

CREATE TABLE playlist (
    playlist_id SERIAL PRIMARY KEY,
    user_id int,
    track_ids --,
    tracks.data --,
    genre text,
    duration_ms integer,
    last_update timestamp with time zone DEFAULT now()
);

CREATE TABLE track (
    track_id SERIAL PRIMARY KEY,
    title text NOT NULL,
    artist text NOT NULL,
    genre text,
    spotify_url text,
    duration_ms integer,
    last_update timestamp with time zone DEFAULT now()
);

CREATE TABLE artist (
    artist_id SERIAL PRIMARY KEY,
    artist_name text NOT NULL,
    music_type genre,
    activebool boolean DEFAULT true NOT NULL,
    create_date date DEFAULT ('now'::text)::date NOT NULL,
    last_update timestamp with time zone DEFAULT now(),
    active integer
);

