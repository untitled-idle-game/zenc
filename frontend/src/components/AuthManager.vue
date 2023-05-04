<script>
function redirect(isSignedIn) {
    const onLoginPage = !!document.querySelector("#loginPage");
    if (onLoginPage && isSignedIn) {
        location.href = "/"
    }
    if (onLoginPage && !isSignedIn) {
        location.href = "/login"
    }
}

/* eslint-disable */
export default {
name: "AuthManager",
data: {
    user: () => this._user,
    name: () => this._user.displayName,
    avatar: () => this._user.photoURL
},
props: ["_user","_name", ],
setup() {
    firebase.auth().onAuthStateChanged((user) => {
		this._user = user;
        console.log(this._user);
        redirect(!!this._user);
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
    
}    
};
</script>