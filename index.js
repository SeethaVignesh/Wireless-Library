// These samples are intended for Web so this import would normally be
// done in HTML however using modules here is more convenient for
// ensuring sample correctness offline.
import firebase from "firebase/app";
import "firebase/auth";

// ==========================================================================================
// Docs: Snippets in this file are "general purpose" and are used on more than one docs page
// ==========================================================================================

function setLanguageCode() {
    // [START auth_set_language_code]
    firebase.auth().languageCode = 'it';
    // To apply the default browser preference instead of explicitly setting it.
    // firebase.auth().useDeviceLanguage();
    // [END auth_set_language_code]
  }
