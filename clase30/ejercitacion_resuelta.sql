use movies_db;

## Micro desafío - Paso 1:
SELECT series.title, genres.name FROM series
INNER JOIN genres ON  genre_id = genres.id;

SELECT actors.first_name, actors.last_name 
FROM episodes
INNER JOIN actor_episode ON actor_episode.episode_id = episodes.id
INNER JOIN actors ON  actor_episode.actor_id = actors.id;

## Micro desafío - Paso 2:
SELECT DISTINCT actors.first_name, actors.last_name FROM movies
INNER JOIN actor_movie ON actor_movie.movie_id = movies.id
INNER JOIN actors ON  actor_movie.actor_id = actors.id
WHERE title LIKE "%guerra%";

## Micro desafío - Paso 3:
select movies.title, coalesce(genres.name, "No tiene genero") as titulo
from movies
left join genres on movies.genre_id = genres.id;

## Micro desafío - Paso 4:
SELECT title, DATEDIFF(end_date, release_date) AS duracion 
FROM series;

## Micro desafío - Paso 5:
select * from actors 
where length(first_name) > 6 order by last_name asc;

select count(*) from episodes;

select series.title, count(seasons.id) as noTemporadas
from series
inner join seasons on series.id = seasons.serie_id
group by series.title;

select genres.name, count(*) as noPeliculas
from movies
inner join genres on genres.id = movies.genre_id
group by genres.name
having count(*) >= 3;

## Ver informacion del motor de base de datos
select @@version;
