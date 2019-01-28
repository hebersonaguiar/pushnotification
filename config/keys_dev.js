module.exports = {
//i used mlab database for fast and realiable pace development enviroment
   mongoURI: 'mongodb://web-push:webpush123@ds213053.mlab.com:13053/web-push',
   privateKey: 'svPBL7I9Aaq1iJUxoywo_ghax55U8wu-KIqNoU4dU0o' || process.env.VAPID_PRIVATE_KEY,
   publicKey: 'BLLYeG-5mZZpfzTbFnVqPPGwr-dBVkqeX6RA2YRu3SZ1HBFz3OeBqNPJ81_SkCU_tdRlT9BFllYZ12MHApb2pgA' || process.env.VAPID_PUBLIC_KEY
}