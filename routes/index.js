
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

// Import 5 Controllers
import { getCategories, storeCategory } from "../controllers/categoryController.js";
import { getCustomers, storeCustomer } from "../controllers/customerController.js";
import { getOrders, storeOrder } from "../controllers/orderController.js";
import { getProducts, storeProduct } from "../controllers/productController.js";
import { getSuppliers, storeSupplier } from "../controllers/supplierController.js";

// ==========================================
// 1 & 2: CATEGORY ROUTES
// ==========================================
router.get("/categories", getCategories);
router.post("/categories", storeCategory);

// ==========================================
// 3 & 4: CUSTOMER ROUTES
// ==========================================
router.get("/customers", getCustomers);
router.post("/customers", storeCustomer);

// ==========================================
// 5 & 6: ORDER ROUTES
// ==========================================
router.get("/orders", getOrders);
router.post("/orders", storeOrder);

// ==========================================
// 7 & 8: PRODUCT ROUTES
// ==========================================
router.get("/products", getProducts);
router.post("/products", storeProduct);

// ==========================================
// 9 & 10: SUPPLIER ROUTES
// ==========================================
router.get("/suppliers", getSuppliers);
router.post("/suppliers", storeSupplier);

export default router;