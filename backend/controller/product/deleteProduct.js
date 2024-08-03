// // const productModel = require("../../models/productModel");
// // const uploadProductPermission = require("../../helpers/permission")

// // async function deleteProduct(req, res) {
// //     try {
// //         const { productId } = req.params;
// //         const sessionUserId = req.userId;

// //         if (!uploadProductPermission(sessionUserId)) {
// //             throw new Error("Permission denied");
// //         }

// //         const deletedProduct = await productModel.findByIdAndDelete(productId);

// //         if (!deletedProduct) {
// //             throw new Error("Product not found");
// //         }

// //         res.status(200).json({
// //             message: "Product deleted successfully",
// //             error: false,
// //             success: true,
// //             data: deletedProduct
// //         });
// //     } catch (err) {
// //         res.status(400).json({
// //             message: err.message || err,
// //             error: true,
// //             success: false
// //         });
// //     }
// // }

// // module.exports = deleteProduct

// const productModel = require("../../models/productModel");
// const uploadProductPermission = require("../../helpers/permission"); // Ensure this checks for admin role

// const deleteProduct = async (req, res) => {
//     try {
//         const { productId } = req.body;

//         if (!productId) {
//             return res.status(400).json({
//                 message: "Product ID is required",
//                 error: true,
//                 success: false
//             });
//         }

//         const sessionUserId = req.userId;

//         if (!uploadProductPermission(sessionUserId, 'admin')) {
//             return res.status(403).json({
//                 message: "Permission denied",
//                 error: true,
//                 success: false
//             });
//         }

//         const deletedProduct = await productModel.findByIdAndDelete(productId);

//         if (!deletedProduct) {
//             return res.status(404).json({
//                 message: "Product not found",
//                 error: true,
//                 success: false
//             });
//         }

//         res.status(200).json({
//             message: "Product deleted successfully",
//             error: false,
//             success: true,
//             data: deletedProduct
//         });
//     } catch (err) {
//         console.error("Error in deleteProduct:", err);
//         res.status(500).json({
//             message: err.message || "An error occurred",
//             error: true,
//             success: false
//         });
//     }
// };

// module.exports = deleteProduct;
const productModel = require("../../models/productModel");
const uploadProductPermission = require("../../helpers/permission"); // Ensure this checks for admin role

const deleteProduct = async (req, res) => {
    try {
        const { productId } = req.body;

        if (!productId) {
            return res.status(400).json({
                message: "Product ID is required",
                error: true,
                success: false
            });
        }

        const sessionUserId = req.userId;

        // Debugging output to ensure userId is correctly set
        console.log("Session User ID:", sessionUserId);

        if (!uploadProductPermission(sessionUserId, 'admin')) {
            return res.status(403).json({
                message: "Permission denied",
                error: true,
                success: false
            });
        }

        // Debugging output to ensure productId is correctly received
        console.log("Product ID:", productId);

        // Attempt to find and delete the product by ID
        const deletedProduct = await productModel.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({
                message: "Product not found",
                error: true,
                success: false
            });
        }

        res.status(200).json({
            message: "Product deleted successfully",
            error: false,
            success: true,
            data: deletedProduct
        });
    } catch (err) {
        console.error("Error in deleteProduct:", err);
        res.status(500).json({
            message: err.message || "An error occurred",
            error: true,
            success: false
        });
    }
};

module.exports = deleteProduct;
