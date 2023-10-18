-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-10-2023 a las 05:52:06
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `biblioteca`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `autor` varchar(30) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `añopublicacion` date NOT NULL,
  `ISBN` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `nombre`, `autor`, `categoria`, `añopublicacion`, `ISBN`) VALUES
(1, 'Moby-Dick', 'Herman Melville', 'Aventura', '1851-10-18', '978-84-206-74'),
(2, 'Los Pilares de la Tierra', 'Ken Follett', 'Histórica', '1989-10-12', '978-84-08-002'),
(3, 'El Principito', 'Antoine de Saint-Exupéry', 'Ficción Infantil', '1943-04-06', '978-84-7888-3'),
(4, 'La Sombra del Viento', 'Carlos Ruiz Zafón', 'Misterio', '2001-06-29', '978-84-08-471'),
(5, 'El Gran Gatsby', 'F. Scott Fitzgerald', 'Novela', '1925-04-10', '978-84-9743-0'),
(6, 'Rayuela', 'Julio Cortázar', 'Experimental', '1963-01-01', '978-84-672-46'),
(7, 'La Ilíada', 'Homero', 'Épica', '0000-00-00', '978-84-7888-0'),
(8, 'Ulises', 'James Joyce', 'Experimental', '1922-02-02', '978-84-9623-6'),
(9, 'Cien Años de Soledad', 'Gabriel García Márquez', 'Realismo Mágico', '1967-05-30', '978-84-376-06');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
