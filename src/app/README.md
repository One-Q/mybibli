#Routes API

##Auth:
POST    /api/auth/register
  {username, email, password}
  return token
POST    /api/auth/login
  {email, password}
  return token

##Books (need token):
GET     /api/books
  return book
POST    /api/books
  {isbn, title, description, author, releaseDate}
  return book
GET     /api/books/:isbn
  return book
PUT     /api/books/:isbn
  {title, description, author, releaseDate}
  return book
DELETE  /api/books/:isbn
  return book