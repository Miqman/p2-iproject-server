# Minfonime API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `GET /anime`
- `GET /popular`

Routes below need authentication:

- `GET /anime/:id`
- `GET /fav`
- `POST /fav/:fId`
- `GET /profile`
- `DELETE /delete/:id`

Routes below need authentication & use middleware multer:

- `POST /profileAdd`

&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Password is required"
}
```

&nbsp;

## 2. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string",
  "id": "integer",
  "username": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 3. GET /anime

Description:

- Fetch all anime from database api jikan and filtered based on the age of 17 years

_Response (200 - OK)_

```json
[
    {
        "mal_id": 7,
        "url": "https://myanimelist.net/anime/7/Witch_Hunter_Robin",
        "images": {
            "jpg": {},
            "webp": {}
        },
        "trailer": {},
        "title": "Witch Hunter Robin",
        "title_english": "Witch Hunter Robin",
        "title_japanese": "Witch Hunter ROBIN (ウイッチハンターロビン)",
        "title_synonyms": [
            "WHR"
        ],
        "type": "TV",
        "source": "Original",
        "episodes": 26,
        "status": "Finished Airing",
        "airing": false,
        "aired": {
            "from": "2002-07-02T00:00:00+00:00",
            "to": "2002-12-24T00:00:00+00:00",
            "prop": {
                "from": {
                    "day": 2,
                    "month": 7,
                    "year": 2002
                },
                "to": {
                    "day": 24,
                    "month": 12,
                    "year": 2002
                }
            },
            "string": "Jul 2, 2002 to Dec 24, 2002"
        },
        "duration": "25 min per ep",
        "rating": "PG-13 - Teens 13 or older",
        "score": 7.26,
        "scored_by": 41315,
        "rank": 2652,
        "popularity": 1665,
        "members": 104556,
        "favorites": 558,
        "synopsis": "Witches are individuals with special powers like ESP, telekinesis, mind control, etc. Robin, a 15-year-old craft user, arrives from Italy to Japan to work for an organization named STN Japan Division (STN-J) as a replacement for one of STN-J's witch hunters who was recently killed. Unlike other divisions of STN, STN-J tries to capture the witches alive in order to learn why and how they became witches in the first place. (Source: ANN)",
        "background": null,
        "season": "summer",
        "year": 2002,
        "broadcast": {
            "day": null,
            "time": null,
            "timezone": null,
            "string": "Tuesdays at Unknown"
        },
        "producers": [
            {
                "mal_id": 16,
                "type": "anime",
                "name": "TV Tokyo",
                "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
            },
            {
                "mal_id": 23,
                "type": "anime",
                "name": "Bandai Visual",
                "url": "https://myanimelist.net/anime/producer/23/Bandai_Visual"
            },
            {
                "mal_id": 53,
                "type": "anime",
                "name": "Dentsu",
                "url": "https://myanimelist.net/anime/producer/53/Dentsu"
            },
            {
                "mal_id": 123,
                "type": "anime",
                "name": "Victor Entertainment",
                "url": "https://myanimelist.net/anime/producer/123/Victor_Entertainment"
            }
        ],
        "licensors": [
            {
                "mal_id": 102,
                "type": "anime",
                "name": "Funimation",
                "url": "https://myanimelist.net/anime/producer/102/Funimation"
            },
            {
                "mal_id": 233,
                "type": "anime",
                "name": "Bandai Entertainment",
                "url": "https://myanimelist.net/anime/producer/233/Bandai_Entertainment"
            }
        ],
        "studios": [
            {
                "mal_id": 14,
                "type": "anime",
                "name": "Sunrise",
                "url": "https://myanimelist.net/anime/producer/14/Sunrise"
            }
        ],
        "genres": [
            {
                "mal_id": 1,
                "type": "anime",
                "name": "Action",
                "url": "https://myanimelist.net/anime/genre/1/Action"
            },
            {
                "mal_id": 8,
                "type": "anime",
                "name": "Drama",
                "url": "https://myanimelist.net/anime/genre/8/Drama"
            },
            {
                "mal_id": 7,
                "type": "anime",
                "name": "Mystery",
                "url": "https://myanimelist.net/anime/genre/7/Mystery"
            },
            {
                "mal_id": 37,
                "type": "anime",
                "name": "Supernatural",
                "url": "https://myanimelist.net/anime/genre/37/Supernatural"
            }
        ],
        "explicit_genres": [],
        "themes": [
    {
        "mal_id": 39,
        "type": "anime",
        "name": "Detective",
        "url": "https://myanimelist.net/anime/genre/39/Detective"
    }
        ],
        "demographics": []
    }
  ...,
]
```

&nbsp;

## 4. GET /popular

Description:

- Fetch all anime from database api jikan filtered base on popular

_Response (200 - OK)_

```json
[

    {
        "title": "PV 1",
        "entry": {
            "mal_id": 16498,
            "url": "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/10/47347t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/10/47347l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/10/47347.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/10/47347t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/10/47347l.webp"
                }
            },
            "title": "Shingeki no Kyojin"
        },
        "trailer": {
            "youtube_id": "KKzmOh4SuBc",
            "url": "https://www.youtube.com/watch?v=KKzmOh4SuBc",
            "embed_url": "https://www.youtube.com/embed/KKzmOh4SuBc?enablejsapi=1&wmode=opaque&autoplay=1",
            "images": {
                "image_url": "https://img.youtube.com/vi/KKzmOh4SuBc/default.jpg",
                "small_image_url": "https://img.youtube.com/vi/KKzmOh4SuBc/sddefault.jpg",
                "medium_image_url": "https://img.youtube.com/vi/KKzmOh4SuBc/mqdefault.jpg",
                "large_image_url": "https://img.youtube.com/vi/KKzmOh4SuBc/hqdefault.jpg",
                "maximum_image_url": "https://img.youtube.com/vi/KKzmOh4SuBc/maxresdefault.jpg"
            }
        }
    },
  ...,
]
```

&nbsp;

## 5. GET /anime/:id

Description:

- Fetch one data anime from database API jikan

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
    "mal_id": 7,
    "url": "https://myanimelist.net/anime/7/Witch_Hunter_Robin",
    "images": {
        "jpg": {},
        "webp": {}
    },
    "trailer": {},
    "title": "Witch Hunter Robin",
    "title_english": "Witch Hunter Robin",
    "title_japanese": "Witch Hunter ROBIN (ウイッチハンターロビン)",
    "title_synonyms": [
        "WHR"
    ],
    "type": "TV",
    "source": "Original",
    "episodes": 26,
    "status": "Finished Airing",
    "airing": false,
    "aired": {
        "from": "2002-07-02T00:00:00+00:00",
        "to": "2002-12-24T00:00:00+00:00",
        "prop": {
            "from": {
                "day": 2,
                "month": 7,
                "year": 2002
            },
            "to": {
                "day": 24,
                "month": 12,
                "year": 2002
            }
        },
        "string": "Jul 2, 2002 to Dec 24, 2002"
    },
    "duration": "25 min per ep",
    "rating": "PG-13 - Teens 13 or older",
    "score": 7.26,
    "scored_by": 41315,
    "rank": 2652,
    "popularity": 1665,
    "members": 104556,
    "favorites": 558,
    "synopsis": "Witches are individuals with special powers like ESP, telekinesis, mind control, etc. Robin, a 15-year-old craft user, arrives from Italy to Japan to work for an organization named STN Japan Division (STN-J) as a replacement for one of STN-J's witch hunters who was recently killed. Unlike other divisions of STN, STN-J tries to capture the witches alive in order to learn why and how they became witches in the first place. (Source: ANN)",
    "background": null,
    "season": "summer",
    "year": 2002,
    "broadcast": {
        "day": null,
        "time": null,
        "timezone": null,
        "string": "Tuesdays at Unknown"
    },
    "producers": [
        {
            "mal_id": 16,
            "type": "anime",
            "name": "TV Tokyo",
            "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
        },
        {
            "mal_id": 23,
            "type": "anime",
            "name": "Bandai Visual",
            "url": "https://myanimelist.net/anime/producer/23/Bandai_Visual"
        },
        {
            "mal_id": 53,
            "type": "anime",
            "name": "Dentsu",
            "url": "https://myanimelist.net/anime/producer/53/Dentsu"
        },
        {
            "mal_id": 123,
            "type": "anime",
            "name": "Victor Entertainment",
            "url": "https://myanimelist.net/anime/producer/123/Victor_Entertainment"
        }
    ],
    "licensors": [
        {
            "mal_id": 102,
            "type": "anime",
            "name": "Funimation",
            "url": "https://myanimelist.net/anime/producer/102/Funimation"
        },
        {
            "mal_id": 233,
            "type": "anime",
            "name": "Bandai Entertainment",
            "url": "https://myanimelist.net/anime/producer/233/Bandai_Entertainment"
        }
    ],
    "studios": [
        {
            "mal_id": 14,
            "type": "anime",
            "name": "Sunrise",
            "url": "https://myanimelist.net/anime/producer/14/Sunrise"
        }
    ],
    "genres": [
        {
            "mal_id": 1,
            "type": "anime",
            "name": "Action",
            "url": "https://myanimelist.net/anime/genre/1/Action"
        },
        {
            "mal_id": 8,
            "type": "anime",
            "name": "Drama",
            "url": "https://myanimelist.net/anime/genre/8/Drama"
        },
        {
            "mal_id": 7,
            "type": "anime",
            "name": "Mystery",
            "url": "https://myanimelist.net/anime/genre/7/Mystery"
        },
        {
            "mal_id": 37,
            "type": "anime",
            "name": "Supernatural",
            "url": "https://myanimelist.net/anime/genre/37/Supernatural"
        }
    ],
    "explicit_genres": [],
    "themes": [
{
    "mal_id": 39,
    "type": "anime",
    "name": "Detective",
    "url": "https://myanimelist.net/anime/genre/39/Detective"
}
    ],
    "demographics": []
}
},

  ...,

```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

## 6. GET /fav

Description:

- Show anime chosen as favorite

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
  "code": 200,
  "data": [
    {
      "id": integer,
      "UserId": integer,
      "PostId": integer,
      "createdAt": date,
      "updatedAt": date,
      "post": {
          "name": STRING,
          "synopsis": TEXT,
          "score": STRING,
          "rank": STRING,
          "episodes": STRING,
          "favorite": STRING,
          "season": STRING,
          "genres": STRING,
          "year": STRING,
          "titleJ": STRING,
          "licencor": STRING,
          "img_url": STRING,
      },
      "User": {
          "username": STRING,
          "email": STRING,
          "password": STRING,
      }
    },
    ...
  ]
}
```

&nbsp;

## 7. POST /fav/:fId

Description:

- Add one anime to the favorite

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (201 - OK)_

```json
{
  "data": [
    {
      "id": integer,
      "UserId": integer,
      "PostId": integer,
      "createdAt": date,
      "updatedAt": date,
    },
    ...
  ]
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

## 8. GET /profile

Description:

- show user profile

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
  {
    "data": [
      {
        "id": integer,
        "name": string,
        "bio": string,
        "quote": string,
        "UserId": integer,
        "imageUrl": string,
        "createdAt": date,
        "updatedAt": date,
      },
      ...
    ]
  }

```

&nbsp;

## 3. DELETE /delete/:id

Description:

- remove a data Faforite based on given id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "data with id (ex: 5) success to delete"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

## 10. POST /profileAdd

Description:

- Add profile for new user

Request:

- Headers
  ```json
  {
    "Content-Type": "application/form-data"
  }
  ```
- Body

  ```json
  {
    "name": string,
    "bio": string,
    "imageUrl": file,
  }
  ```

- headers:

```json
{
  "access_token": "string"
}
```

_Response (201 - OK)_

```json
{
  "data": [
    {
        "id": integer,
        "name": string,
        "bio": string,
        "quote": string,
        "UserId": integer,
        "imageUrl": string,
        "createdAt": date,
        "updatedAt": date,
    },
    ...
  ]
}
```

&nbsp;

### Global Error

#### Response

_500 - Internal Server Error_

- Body
  ```json
  {
    "statusCode": 500,
    "error": {
      "message": "Internal Server Error"
    }
  }
  ```
  _Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```
