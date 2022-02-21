const db = require("better-sqlite3")("yummydb.db", {
  fileMustExist: true,
});
const { Router } = require("express");
const router = Router();

// //return all recipes in yummdb_reipies
// router.get(["/", "/recipes"], (req, res) => {
//   const recipes = db
//     .prepare(
//       `SELECT recipe_id ID,
//           recipe_name RECIPE,
//           food_type  Food_Type
//           FROM
//           yummydb_recipes;`
//     )
//     .all();
//   res.send(recipes);
// });

//return for home recipes container
router.get("/", (req, res) => {
  const recipes = db
    .prepare(
      `SELECT 
      rdb.recipe_id RecipeId,
      rdb.recipe_name RecipeName,
      rdb.food_type FoodType,
      ridb.image_url ImgUrl,
      ridb.image_alt ImgAlt,
      rifodb.recipe_desc Descriptions 
      FROM 
      yummydb_recipes rdb
      INNER JOIN yummydb_recipes_images ridb
      ON rdb.recipe_id= ridb.recipe_id 
      INNER JOIN yummy_recipes_info rifodb
      ON rdb.recipe_id= rifodb.recipe_id;`
    )
    .all();
  res.send(recipes);
});

router.get("/:id", (req, res) => {
  const recipes = db
    .prepare(
      `SELECT 
      rdb.recipe_id RecipeId,
      rdb.recipe_name RecipeName,
      rdb.food_type FoodType,
      ridb.image_url ImgUrl,
      ridb.image_alt ImgAlt,
      rifodb.recipe_desc Descriptions 
      FROM 
      yummydb_recipes rdb
      INNER JOIN yummydb_recipes_images ridb
      ON rdb.recipe_id= ridb.recipe_id 
      INNER JOIN yummy_recipes_info rifodb
      ON rdb.recipe_id= rifodb.recipe_id
      WHERE rdb.recipe_id =?;`
    )
    .get(req.params.id);
  if (!recipes) {
    return res.status(404).send({
      message: `${req.params.id} recipe not found`,
    });
  }
  res.send(recipes);
});

module.exports = router;
