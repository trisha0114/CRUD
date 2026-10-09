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

import { Studentmodel } from "../models/studentModel.js";

// GET: Display all students
const studentcontroller = {
  index: async (req, res) => {
    try {
      const students = await Studentmodel.findAll();
      res.render("insert", { students });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // POST: Add a student
  insert: async (req, res) => {
    try {
      await Studentmodel.create(req.body);
      res.redirect("/students");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // GET: Display one student for editing
  getStudent: async (req, res) => {
    try {
      const student = await Studentmodel.findByPk(req.params.id);

      if (!student) {
        return res.status(404).send("Student not found");
      }

      res.render("edit", { student });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // POST: Update a student
  update: async (req, res) => {
    try {
      const student = await Studentmodel.findByPk(req.params.id);

      if (!student) {
        return res.status(404).send("Student not found");
      }

      await student.update(req.body);
      res.redirect("/students");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // POST: Delete a student
  deleteStudent: async (req, res) => {
    try {
      const student = await Studentmodel.findByPk(req.params.id);

      if (!student) {
        return res.status(404).send("Student not found");
      }

      await student.destroy();
      res.redirect("/students");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export { studentcontroller };
