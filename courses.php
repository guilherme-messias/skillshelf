<?php

$database = new PDO("sqlite:courses.sqlite");

$query = $database->query("SELECT * FROM content_items");
$courses = $query->fetchAll();

// $courses = [
//     [
//         "id" => 1,
//         "title" => "React Avançado",
//         "platform" => "Udemy",
//         "tag" => "Frontend",
//         "thumbnail" => "https://picsum.photos/400/240?random=1",
//         "progress" => 80,
//     ],
//     [
//         "id" => 2,
//         "title" => "UX Design Essencial",
//         "platform" => "Alura",
//         "tag" => "UX",
//         "thumbnail" => "https://picsum.photos/400/240?random=2",
//         "progress" => 45,
//     ],
//     [
//         "id" => 3,
//         "title" => "Inglês para Programadores",
//         "platform" => "YouTube",
//         "tag" => "Inglês",
//         "thumbnail" => "https://picsum.photos/400/240?random=3",
//         "progress" => 60,
//     ],
//     [
//         "id" => 4,
//         "title" => "Node.js Completo",
//         "platform" => "Udemy",
//         "tag" => "Backend",
//         "thumbnail" => "https://picsum.photos/400/240?random=4",
//         "progress" => 30,
//     ],
//     [
//         "id" => 5,
//         "title" => "Figma do Zero",
//         "platform" => "Alura",
//         "tag" => "Design",
//         "thumbnail" => "https://picsum.photos/400/240?random=5",
//         "progress" => 90,
//     ],
//     [
//         "id" => 6,
//         "title" => "TypeScript Masterclass",
//         "platform" => "Udemy",
//         "tag" => "Frontend",
//         "thumbnail" => "https://picsum.photos/400/240?random=6",
//         "progress" => 10,
//     ],
//     [
//         "id" => 7,
//         "title" => "Banco de Dados SQL",
//         "platform" => "Alura",
//         "tag" => "Banco de Dados",
//         "thumbnail" => "https://picsum.photos/400/240?random=7",
//         "progress" => 55,
//     ],
//     [
//         "id" => 8,
//         "title" => "Docker para Iniciantes",
//         "platform" => "YouTube",
//         "tag" => "DevOps",
//         "thumbnail" => "https://picsum.photos/400/240?random=8",
//         "progress" => 20,
//     ],
// ];
