/*
    MIT License
    
    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
    Mindoro State University - Philippines

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    */



import Book from "../models/Book.js";

const bookcontroller = {
  // Display books in browser
  async page(req, res) {
    try {
      const books = await Book.findAll({
        order: [["id", "DESC"]]
      });

      res.render("books", { books });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error loading books.");
    }
  },

  // Show Add Book page
  insertPage(req, res) {
    res.render("insert");
  },

  // Save a new book
  async store(req, res) {
    try {
      const { BookTitle, Author, Genre, Quantity } = req.body;

      if (
        !BookTitle?.trim() ||
        !Author?.trim() ||
        !Genre?.trim() ||
        Quantity === undefined ||
        Quantity === "" ||
        !Number.isInteger(Number(Quantity)) ||
        Number(Quantity) < 0
      ) {
        return res.status(400).send("Please enter valid book details.");
      }

      await Book.create({
        BookTitle: BookTitle.trim(),
        Author: Author.trim(),
        Genre: Genre.trim(),
        Quantity: Number(Quantity)
      });

      res.redirect("/books");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error saving book.");
    }
  },

  // Show Edit Book page
  async editPage(req, res) {
    try {
      const book = await Book.findByPk(req.params.id);

      if (!book) {
        return res.status(404).send("Book not found.");
      }

      res.render("edit", { book });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error loading book.");
    }
  },

  // Update book from browser form
  async updatePage(req, res) {
    try {
      const { BookTitle, Author, Genre, Quantity } = req.body;

      if (
        !BookTitle?.trim() ||
        !Author?.trim() ||
        !Genre?.trim() ||
        Quantity === undefined ||
        Quantity === "" ||
        !Number.isInteger(Number(Quantity)) ||
        Number(Quantity) < 0
      ) {
        return res.status(400).send("Please enter valid book details.");
      }

      const book = await Book.findByPk(req.params.id);

      if (!book) {
        return res.status(404).send("Book not found.");
      }

      await book.update({
        BookTitle: BookTitle.trim(),
        Author: Author.trim(),
        Genre: Genre.trim(),
        Quantity: Number(Quantity)
      });

      res.redirect("/books");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error updating book.");
    }
  },

  // Delete book from browser
  async deletePage(req, res) {
    try {
      const book = await Book.findByPk(req.params.id);

      if (!book) {
        return res.status(404).send("Book not found.");
      }

      await book.destroy();
      res.redirect("/books");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error deleting book.");
    }
  },

  /// Existing JSON API endpoint
async index(req, res) {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving books." });
  }
},

// Activity 2: Update book through API
async update(req, res) {
  try {
    const book = await Book.findByPk(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found." });
    }

    const { BookTitle, Author, Genre, Quantity } = req.body;

    await book.update({
      BookTitle,
      Author,
      Genre,
      Quantity: Number(Quantity)
    });

    res.json({
      message: "Book updated successfully.",
      book
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating book." });
  }
},

// Activity 2: Delete book through API
async destroy(req, res) {
  try {
    const book = await Book.findByPk(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found." });
    }

    await book.destroy();

    res.json({ message: "Book deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting book." });
  }
}
};

export { bookcontroller };