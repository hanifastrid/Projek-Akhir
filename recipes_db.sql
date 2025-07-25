-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 18, 2025 at 07:30 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipes_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int NOT NULL,
  `spoonacular_id` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `comment` text NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `spoonacular_id`, `name`, `comment`, `created_at`) VALUES
(1, '631747', 'Anonymous', 'kjbcakjb', '2025-07-15 13:08:32'),
(2, '638729', 'Anonymous', 'apa ngo', '2025-07-15 13:16:32');

-- --------------------------------------------------------

--
-- Table structure for table `feedback_likes`
--

CREATE TABLE `feedback_likes` (
  `id` int NOT NULL,
  `spoonacular_id` varchar(50) NOT NULL,
  `liked_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `feedback_likes`
--

INSERT INTO `feedback_likes` (`id`, `spoonacular_id`, `liked_at`) VALUES
(1, '631747', '2025-07-15 12:27:46'),
(2, '631747', '2025-07-15 12:27:50'),
(3, '631747', '2025-07-15 12:32:48'),
(4, '631747', '2025-07-15 12:38:13'),
(5, '631747', '2025-07-15 12:38:16'),
(6, '631747', '2025-07-15 12:39:23'),
(7, '631747', '2025-07-15 12:39:27'),
(8, '631747', '2025-07-15 12:42:46'),
(9, '631747', '2025-07-15 12:42:49'),
(10, '631747', '2025-07-15 12:45:15');

-- --------------------------------------------------------

--
-- Table structure for table `recipes`
--

CREATE TABLE `recipes` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `summary` text,
  `image` text,
  `spoonacular_id` int DEFAULT NULL,
  `likes` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `recipes`
--

INSERT INTO `recipes` (`id`, `title`, `summary`, `image`, `spoonacular_id`, `likes`) VALUES
(2, 'Dutch Oven Paella,pollll', 'Dutch Oven Paellan is a main course that serves 6. For <b>$4.74 per serving</b>, this recipe <b>covers 31%</b> of your daily requirements of vitamins and minerals. One serving contains <b>670 calories</b>, <b>43g of protein</b>, and <b>24g of fat</b>. 6 people found this recipe to be yummy and satisfying. If you have garlic cloves, flat parsely, chicken thighs, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. This recipe is typical of European cuisine. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is a good option if you\'re following a <b>dairy free</b> diet. Taking all factors into account, this recipe <b>earns a spoonacular score of 78%</b>, which is good. <a href=\"https://spoonacular.com/recipes/dutch-oven-paella-1438817\">Dutch Oven Paella</a>, <a href=\"https://spoonacular.com/recipes/dutch-oven-paella-1479225\">Dutch Oven Paella</a>, and <a href=\"https://spoonacular.com/recipes/dutch-oven-cobbler-423365\">Dutch Oven Cobbler</a> are very similar to this recipe.', 'https://img.spoonacular.com/recipes/631747-556x370.jpg', 631747, 3),
(3, 'Chinese Veg Fried rice', 'The recipe Chinese Veg Fried rice could satisfy your Chinese craving in about <b>45 minutes</b>. One portion of this dish contains around <b>7g of protein</b>, <b>8g of fat</b>, and a total of <b>431 calories</b>. This recipe serves 4. For <b>$1.19 per serving</b>, this recipe <b>covers 8%</b> of your daily requirements of vitamins and minerals. This recipe is liked by 1 foodies and cooks. This recipe from Foodista requires basmati rice, pepper powder, chillis, and pepper flakes. Only a few people really liked this hor d\'oeuvre. It is a good option if you\'re following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. Overall, this recipe earns a <b>not so spectacular spoonacular score of 34%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/veg-fried-rice-how-to-make-vegetable-fried-rice-rice-s-1227723\">veg fried rice , how to make vegetable fried rice | rice s</a>, <a href=\"https://spoonacular.com/recipes/veg-fried-rice-how-to-make-vegetable-fried-rice-rice-s-1200535\">veg fried rice , how to make vegetable fried rice | rice s</a>, and <a href=\"https://spoonacular.com/recipes/veg-fried-rice-how-to-make-vegetable-fried-rice-rice-s-1222461\">veg fried rice , how to make vegetable fried rice | rice s</a>.', 'https://img.spoonacular.com/recipes/638729-556x370.jpg', 638729, 0),
(4, 'Crab Stacks', 'Crab Stacks is a <b>gluten free, dairy free, and pescatarian</b> main course. This recipe serves 3 and costs $6.46 per serving. One portion of this dish contains about <b>56g of protein</b>, <b>26g of fat</b>, and a total of <b>730 calories</b>. 2 people have tried and liked this recipe. It is brought to you by Foodista. Head to the store and pick up roma tomato, quinoa, orange juice, and a few other things to make it today. From preparation to the plate, this recipe takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 90%</b>. This score is amazing. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/crab-stacks-1396277\">Crab Stacks</a>, <a href=\"https://spoonacular.com/recipes/crab-savoury-baked-crab-with-bread-crumbs-and-cheese-202821\">Crab Savoury (Baked Crab with Bread Crumbs and Cheese)</a>, and <a href=\"https://spoonacular.com/recipes/crab-rangoons-crab-puffs-with-sweet-and-sour-sauce-196339\">Crab Rangoons (Crab Puffs) With Sweet and Sour Sauce</a>.', 'https://img.spoonacular.com/recipes/640321-556x370.jpg', 640321, 0),
(5, 'Fried Udon With Dried Shrimp', 'Fried Udon With Dried Shrimp is a main course that serves 3. One serving contains <b>234 calories</b>, <b>18g of protein</b>, and <b>17g of fat</b>. For <b>62 cents per serving</b>, this recipe <b>covers 8%</b> of your daily requirements of vitamins and minerals. 1 person were glad they tried this recipe. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. This recipe from Foodista requires udon noodles, garlic, coriander/parsley/chili to garnish, and preserved radish. It is a good option if you\'re following a <b>dairy free</b> diet. Overall, this recipe earns a <b>not so spectacular spoonacular score of 23%</b>. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/fried-udon-wrapped-shrimp-256923\">Fried Udon-Wrapped Shrimp</a>, <a href=\"https://spoonacular.com/recipes/yaki-udon-easy-stir-fried-udon-noodles-1497949\">Yaki Udon (Easy Stir Fried Udon Noodles)</a>, and <a href=\"https://spoonacular.com/recipes/simple-stir-fried-udon-111027\">Simple Stir-fried Udon</a>.', 'https://img.spoonacular.com/recipes/643823-556x370.jpg', 643823, 0),
(6, 'Super Food Trail Mix', 'Super Food Trail Mix is a Mediterranean side dish. This recipe serves 4 and costs $1.24 per serving. Watching your figure? This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe has <b>205 calories</b>, <b>6g of protein</b>, and <b>16g of fat</b> per serving. Head to the store and pick up walnut halves, blueberries, goji berries, and a few other things to make it today. 1 person has tried and liked this recipe. It is brought to you by Foodista. From preparation to the plate, this recipe takes about <b>5 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 47%</b>. This score is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/tropical-foods-trail-mix-brittle-663857\">Tropical Food’s Trail Mix Brittle</a>, <a href=\"https://spoonacular.com/recipes/tropical-foods-trail-mix-brittle-1631505\">Tropical Food’s Trail Mix Brittle</a>, and <a href=\"https://spoonacular.com/recipes/super-chunky-trail-mix-cookies-white-whole-wheat-flour-171751\">Super Chunky Trail Mix Cookies (White Whole Wheat Flour)</a>.', 'https://img.spoonacular.com/recipes/1095817-556x370.jpg', 1095817, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feedback_likes`
--
ALTER TABLE `feedback_likes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `spoonacular_id` (`spoonacular_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `feedback_likes`
--
ALTER TABLE `feedback_likes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
