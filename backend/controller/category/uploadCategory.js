const Category = require("../../models/categoryModal")

async function uploadCategory(req, res) {
    try {
        const { category } = req.body;

        if (!category) {
            throw new Error("Category name is required");
        }

        // Create a new category instance
        const newCategory = new Category({
            category
        });

        // Save the category to the database
        const savedCategory = await newCategory.save();

        res.status(201).json({
            message: "Category uploaded successfully",
            error: false,
            success: true,
            data: savedCategory
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = {
    uploadCategory
};


// const Category = require("../../models/categoryModal");

// async function getCategories(req, res) {
//     try {
//         const categories = await Category.find({}, 'category'); // Fetch all categories, only returning the 'category' field

//         res.json({
//             data: categories,
//             message: "List of categories",
//             success: true,
//             error: false
//         });
//     } catch (err) {
//         res.status(400).json({
//             message: err.message || err,
//             error: true,
//             success: false
//         });
//     }
// }

// module.exports = {
//     uploadCategory,
//     getCategories  // Add this function to exports
// };
