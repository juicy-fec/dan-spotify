# Top Tracks API Documentation

## Routes:

### GET /toptracks/tracks

| Atrributes  | Values                                                                                                                 |
| ----------- | ---------------------------------------------------------------------------------------------------------------------- |
| Type        | GET                                                                                                                    |
| Route       | /toptracks/tracks                                                                                                      |
| Access      | Public                                                                                                                 |
| Queries     | None                                                                                                                   |
| Parameters  | None                                                                                                                   |
| Body        | None                                                                                                                   |
| Description | This route will fetch and return the full list of Top Tracks, sorted by playcount and limited to the top five listings |

### POST /toptracks/tracks

| Atrributes  | Values                                                                                                                                                                       |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type        | POST                                                                                                                                                                         |
| Route       | /toptracks/tracks                                                                                                                                                            |
| Access      | Authorized                                                                                                                                                                   |
| Queries     | None                                                                                                                                                                         |
| Parameters  | None                                                                                                                                                                         |
| Body        | Object { name: String [required], artist: String [required], image: URL string [required], playcount: Number [default 0], length: Time-formatted string (mm:ss) [required] } |
| Description | This route will allow authorized users to post a new track to the database                                                                                                   |

### PUT /toptracks/tracks/:id

| Atrributes  | Values                                                                                                                                                                      |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type        | PUT                                                                                                                                                                         |
| Route       | /toptracks/tracks/:id                                                                                                                                                       |
| Access      | Authorized                                                                                                                                                                  |
| Queries     | None                                                                                                                                                                        |
| Parameters  | Track ID [ID]                                                                                                                                                               |
| Body        | Object { name: String [optional], artist: String [optional], image: URL string [optional], playcount: Number [optional], length: Time-formatted string (mm:ss) [optional] } |
| Description | This route will allow authorized users to update a track's attributes in the database                                                                                       |

### DELETE /toptracks/tracks/:id

| Atrributes  | Values                                                                     |
| ----------- | -------------------------------------------------------------------------- |
| Type        | DELETE                                                                     |
| Route       | /toptracks/tracks/:id                                                      |
| Access      | Authorized                                                                 |
| Queries     | None                                                                       |
| Parameters  | Track ID [ID]                                                              |
| Body        | None                                                                       |
| Description | This route will allow authorized users to delete a track from the database |
