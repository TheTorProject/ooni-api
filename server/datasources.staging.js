module.exports = {
  "db": {
    "host": "127.0.0.1",
    "port": "5432",
    "database": "ooni_data_api",
    "username": "operator",
    "password": "seCure",
    "name": "postgres",
    "debug": true,
    "connector": "postgresql",
    "ssl": true
  },
  "mem": {
    "name": "mem",
    "connector": "memory"
  }
}
