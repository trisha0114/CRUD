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
  // GET: Display all books
  index: async (req, res) => {
    try {
      const books = await Book.findAll();
      res.json(books);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // POST: Add a new book
  store: async (req, res) => {
    try {
      const { BookTitle, Author, Genre, Quantity } = req.body;

      if (
        !BookTitle ||
        !Author ||
        !Genre ||
        Quantity === undefined ||
        Quantity === null ||
        Quantity === ""
      ) {
        return res.status(400).json({
          message: "All book fields are required",
        });
      }

      const book = await Book.create({
        BookTitle,
        Author,
        Genre,
        Quantity,
      });

      res.status(201).json({
        message: "Book added successfully",
        book,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // PUT: Update a book
  update: async (req, res) => {
    try {
      const { id } = req.params;

      const [updated] = await Book.update(req.body, {
        where: { id },
      });

      if (updated === 0) {
        return res.status(404).json({
          message: "Book not found or no changes made",
        });
      }

      const book = await Book.findByPk(id);

      res.json({
        message: "Book updated successfully",
        book,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // DELETE: Delete a book
  destroy: async (req, res) => {
    try {
      const { id } = req.params;

      const deleted = await Book.destroy({
        where: { id },
      });

      if (deleted === 0) {
        return res.status(404).json({
          message: "Book not found",
        });
      }

      res.json({
        message: "Book deleted successfully",
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export { bookcontroller };
