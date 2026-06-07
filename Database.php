<?php
declare(strict_types=1);

class Database {
    private PDO $db;

    public function __construct(array $config) {
        if (!isset($config['driver']) || !isset($config['database'])) {
            throw new InvalidArgumentException('Database configuration must contain "driver" and "database".');
        }

        $dsn = $config['driver'] . ':' . $config['database'];

        try {
            $this->db = new PDO($dsn);
            $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            throw new RuntimeException('Failed to connect to the database: ' . $e->getMessage(), 0, $e);
        }
    }

    public function query(string $query, ?string $class = null, array $params = []): PDOStatement {
        $stmt = $this->db->prepare($query);

        if ($class) {
            $stmt->setFetchMode(PDO::FETCH_CLASS, $class);
        }
        $stmt->execute($params);
        return $stmt;
    }
}

if (isset($config)) {
    $dbConfig = $config['database'] ?? $config;
    $database = new Database($dbConfig);
}
