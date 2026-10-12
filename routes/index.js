
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
    



import express from "express";
const router = express.Router();

// Import Category Controller
import {
  getCategories,
  storeCategory,
  updateCategory,
  deleteCategory
} from "../controllers/categorycontroller.js";

// Import Customer Controller
import {
  getCustomers,
  storeCustomer,
  updateCustomer,
  deleteCustomer
} from "../controllers/customercontroller.js";

// Import Order Controller
import {
  getOrders,
  storeOrder,
  updateOrder,
  deleteOrder
} from "../controllers/ordercontroller.js";

// Import Product Controller
import {
  getProducts,
  storeProduct,
  updateProduct,
  deleteProduct
} from "../controllers/productcontroller.js";

// Import Supplier Controller
import {
  getSuppliers,
  storeSupplier,
  updateSupplier,
  deleteSupplier
} from "../controllers/suppliercontroller.js";

// Import Student Controller
import { studentcontroller } from "../controllers/studentController.js";

// Import Book Controller
import { bookcontroller } from "../controllers/bookcontroller.js";

// CATEGORY ROUTES
router.get("/categories", getCategories);
router.post("/categories", storeCategory);
router.put("/categories/:id", updateCategory);
router.delete("/categories/:id", deleteCategory);

// CUSTOMER ROUTES
router.get("/customers", getCustomers);
router.post("/customers", storeCustomer);
router.put("/customers/:id", updateCustomer);
router.delete("/customers/:id", deleteCustomer);

// ORDER ROUTES
router.get("/orders", getOrders);
router.post("/orders", storeOrder);
router.put("/orders/:id", updateOrder);
router.delete("/orders/:id", deleteOrder);

// PRODUCT ROUTES
router.get("/products", getProducts);
router.post("/products", storeProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

// SUPPLIER ROUTES
router.get("/suppliers", getSuppliers);
router.post("/suppliers", storeSupplier);
router.put("/suppliers/:id", updateSupplier);
router.delete("/suppliers/:id", deleteSupplier);

// STUDENT ROUTES
router.get("/students", studentcontroller.index);
router.post("/students", studentcontroller.insert);
router.get("/students/:id", studentcontroller.getStudent);
router.post("/students/:id", studentcontroller.update);
router.post("/students/:id/delete", studentcontroller.deleteStudent);


 // BOOK ROUTES
router.get("/books", bookcontroller.index);
router.post("/books", bookcontroller.store);
router.put("/books/:id", bookcontroller.update);
router.delete("/books/:id", bookcontroller.destroy);


export default router;
