const DB_NAME = 'monApplicationDB';
const DB_VERSION = 1;
let db;

export const initDB = () => {
    console.log('Initialisation database...');
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = () => {
            reject('Erreur lors de l\'ouverture de la base de données : ' + request.error);
        };

        request.onsuccess = () => {
            db = request.result;
            resolve('Base de données ouverte avec succès.');
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            const store = db.createObjectStore('utilisateurs', { keyPath: 'id', autoIncrement: true });
            store.createIndex('nom', 'nom', { unique: false });
            store.createIndex('prenom', 'prenom', { unique: false });
            store.createIndex('pseudo', 'pseudo', { unique: false });
            store.createIndex('email', 'email', { unique: true });
            store.createIndex('motDePasse', 'motDePasse', { unique: false });
            resolve('Base de données mise à niveau avec succès.');
        };
    });
};

export const recupererUtilisateurs = () => {
    return new Promise((resolve, reject) => {
        if (!db) {
            reject('Base de données non initialisée.');
            return;
        }

        const transaction = db.transaction(['utilisateurs'], 'readonly');
        if (!transaction) {
            reject('Transaction non définie.');
            return;
        }

        const store = transaction.objectStore('utilisateurs');
        if (!store) {
            reject('Store non défini.');
            return;
        }

        const request = store.getAll();

        request.onsuccess = () => {
            resolve(request.result);
        };

        request.onerror = () => {
            reject('Erreur lors de la récupération des utilisateurs : ' + request.error);
        };
    });
};