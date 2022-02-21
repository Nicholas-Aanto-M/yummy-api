-- CREATE A DATABASE NAME yummdb.db --
sqlite3 yummydb.db

--To get name of columns and its data type--
PRAGMA table_info(yummydb_recipes);
PRAGMA table_info(yummydb_recipes_images);

-- CREATE A TABLE --

-- CREATE A TABLE yummydb_recipes--
CREATE TABLE yummydb_recipes (
    recipe_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE,
    recipe_name VARCHAR(256),
    food_type VARCHAR(256)  
);

-- CREATE A TABLE yummydb_recipe_image --
CREATE TABLE yummydb_recipes_images(
    image_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE,
    recipe_id INTEGER NOT NULL UNIQUE,
    image_url VARCHAR(256),
    image_alt VARCHAR(256),
    FOREIGN KEY(recipe_id) REFERENCES yummydb_recipes(recipe_id) 
);

--create recipe info table--
CREATE TABLE yummy_recipes_info (
    info_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE,
    recipe_id INTEGER NOT NULL UNIQUE,
    ingridients_req TEXT,
    prep_steps TEXT,
    recipe_desc TEXT,
    FOREIGN KEY(recipe_id) REFERENCES yummydb_recipes(recipe_id) 
);

--Droping the  Tables--

--Droping the yummydb_recipes Table--
DROP TABLE yummydb_recipes;

--Droping the yummydb_recipes_images--
DROP TABLE yummydb_recipes_images;

--Droping the yummy_recipes_info--
DROP TABLE yummy_recipes_info ;



-- Adding Values to Tables--
Insert INTO yummydb_recipes (recipe_name,food_type) VALUES ("Mushroom biryani","V"),("chicken Gravy","NV"),("Chicken Biryani","NV");

Insert INTO yummydb_recipes_images (recipe_id,image_url,image_alt) VALUES (1,"/mushroom_biriyani.png","mushroom_biriyani_image"),(2,"/chicken_Gravy.png","chicken_Gravy_image"),(3,"/Chicken_Biryani.png","Chicken_Biryani_image");

Insert INTO yummy_recipes_info (recipe_id,ingridients_req,prep_steps,recipe_desc) 
VALUES (1,"mushroom and masala","wash and cook it","its a spicy gravy with good aroma");

DELETE FROM yummydb_recipes_images WHERE recipe_id = 1;