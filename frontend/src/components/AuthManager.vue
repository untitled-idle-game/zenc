<template>
    <p></p>
</template>
<script>
/* eslint-disable */
export default {
name: "AuthManager",
data: () => { return {
    user: () => undefined,
    name: () => this.user.displayName,
    avatar: () => this.user.photoURL
}},
created() {
    firebase.auth().onAuthStateChanged((user) => {
        const isSignedIn = !!user;
		this.user = user;
        const onLoginPage = !!document.querySelector("#loginPage");
        if (!onLoginPage && !isSignedIn) {
            location.href = "/login";
        }
        if (onLoginPage && isSignedIn) {
            location.href = "/";
        }
	});
},
methods: {
    beginListening(changeListener) {
		firebase.auth().onAuthStateChanged((user) => {
			changeListener(user);
		});
	},
    signIn() {
        console.log("Sign in");
        // Auth key was generated via Rosefire and Firebase
        // We should probably store this somewhere else...
        Rosefire.signIn("91ca8bd9-3a3d-4bb6-b296-80ba167fff5b", (err, rfUser) => {
            if (err) {
                alert(`Rosefire error: ${err}`);
                return;
            }
            this._name = rfUser.name;
            console.log(`Logged in as ${this._name}`);
            firebase.auth().signInWithCustomToken(rfUser.token);
        })
    },
    signOut() {
        firebase.auth().signOut().catch((error) => {
			var errorCode = error.code;
			var errorMessage = error.message;
			alert('Sign out error:', errorCode, errorMessage);
		});
    }
}};
</script>