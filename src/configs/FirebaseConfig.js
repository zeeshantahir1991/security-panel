import firebase from 'firebase';
 const firebaseConfig = {
  apiKey:'AIzaSyAfOMtgqFquPTauBXdjXeLWQUrqq1QB0Bc',
  authDomain:'gspur-f88cd.web.app',
  databaseURL: 'https://emilus.firebaseio.com',
  projectName:'gspur',
  projectId:'gspur-f88cd',
  // storageBucket: 'emilus.appspot.com',
  messagingSenderId:'90475659970',
  appId: '1:807555350717:web:145ba7c21af47203a2f7d4',
  measurementId: 'G-8KE7HJB252'
};

firebase.initializeApp(firebaseConfig);
export default firebase;