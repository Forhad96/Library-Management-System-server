
# LMS Server

A comprehensive backend API for managing library operations, including book cataloging, member registration, borrowing, and returning of books. Built with Node.js, Express, TypeScript, Prisma ORM, and PostgreSQL, this API provides seamless interactions for frontend applications.
---

## API Endpoints

| Feature               | Method | Endpoint                  | Description                                      |
|-----------------------|--------|---------------------------|--------------------------------------------------|
| **Book Management**   |        |                           |                                                  |
| Create Book           | POST   | `/api/books`             | Creates a new book record                        |
| Read All Books        | GET    | `/api/books`             | Retrieves a list of all books                    |
| Read Book by ID       | GET    | `/api/books/:bookId`     | Retrieves details of a specific book             |
| Update Book           | PUT    | `/api/books/:bookId`     | Updates information of a specific book           |
| Delete Book           | DELETE | `/api/books/:bookId`     | Deletes a book from the library                  |
| **Member Management** |        |                           |                                                  |
| Create Member         | POST   | `/api/members`           | Adds a new member to the library                 |
| Read All Members      | GET    | `/api/members`           | Retrieves a list of all members                  |
| Read Member by ID     | GET    | `/api/members/:memberId` | Retrieves details of a specific member           |
| Update Member         | PUT    | `/api/members/:memberId` | Updates information of a specific member         |
| Delete Member         | DELETE | `/api/members/:memberId` | Deletes a member from the library                |
| **Borrow & Return**   |        |                           |                                                  |
| Borrow a Book         | POST   | `/api/borrow`            | Records a book as borrowed by a member           |
| Return a Book         | POST   | `/api/return`            | Records the return of a borrowed book            |
| **Overdue List**      | GET    | `/api/borrow/overdue`    | Retrieves a list of overdue borrowed books       |

---

## Live URL
[Live API Deployment](https://your-deployed-api-url.com)

---

## Technology Stack & Packages

- **Node.js** - Server environment
- **Express.js** - Web framework for building APIs
- **TypeScript** - Typed JavaScript for reliability
- **Prisma ORM** - Database ORM for PostgreSQL integration
- **PostgreSQL** - Relational database
- **UUID** - To generate unique identifiers for records

---

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/LMS-Server.git
   cd LMS-Server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   NODE_ENV=development
   PORT=5000
   DATABASE_URL=mongodb+srv://forhad:AILWSgODyn2j9qo6@cluster0.shhvx1o.mongodb.net/PH_UM
   BCRYPT_SALT_ROUNDS=12
   DEFAULT_PASS=phuniversity!@#
   JWT_ACCESS_SECRET=091b2c529dec033b5ff4531e622ea3f93170e045222963319662b7e4a34f0cdd
   JWT_REFRESH_SECRET=41b991b21dc0a439cb45fed544992ba3fafa3f912d3c4dedebec3592d7d552fb74a86a4d69ea560bcf7bf988d173ddecaffa9815dd5a6661bcacd58c0cdb2dc5
   JWT_ACCESS_EXPIRES_IN=365d
   JWT_REFRESH_EXPIRES_IN=365d
   RESET_PASS_UI_LINK=http://localhost:5173/auth/reset-password
   CLOUDINARY_CLOUD_NAME=put_your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=put_your_cloudinary_api_key
   CLOUDINARY_API_SECRET=put_your_cloudinary_api_secret
   SUPER_ADMIN_PASSWORD=admin12345
   ```

4. **Generate Prisma client**
   ```bash
   npx prisma generate
   ```

5. **Run database migrations**
   ```bash
   npx prisma migrate dev
   ```

6. **Start the server**
   ```bash
   npm start
   ```

   The server should now be running at `http://localhost:5000`.

---

## Key Features & Functionality

- **Book Management**: CRUD operations for managing book records.
- **Member Management**: CRUD operations for managing member records.
- **Borrowing System**: Allows members to borrow and return books.
- **Overdue Tracking**: Lists books that are overdue based on a 14-day borrowing period.

---

## Known Issues/Bugs

- No known issues at this time.

---

## Contributing

1. Fork the repository
2. Create a new feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a pull request

---

## License

This project is licensed under the MIT License.