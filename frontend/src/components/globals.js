/* eslint-disable */

const globals = {};

globals.FB_USER_COLLECTION = "Users";
globals.FB_THEME_COLLECTION = "Themes";

globals.FB_KEY_USER_UID = "uid";
globals.FB_KEY_USER_NAME = "displayName";
globals.FB_KEY_USER_AVATAR = "avatar";
globals.FB_KEY_USER_ZENPOINTS = "zenpoints";
globals.FB_KEY_USER_OWNED_THEMES = "ownedThemes";
globals.FB_KEY_USER_SELECTED_THEME = "selectedTheme";

globals.FB_KEY_THEME_NAME = "name";
globals.FB_KEY_THEME_CREATOR = "creator";
globals.FB_KEY_THEME_FGCOLOR = "fgColor";
globals.FB_KEY_THEME_ACCENT_COLOR = "accentColor";
globals.FB_KEY_THEME_LAST_TOUCHED = "lastTouched";
globals.FB_KEY_THEME_PRICE = "price";

globals.FB_DEFAULT_THEME_KEY = "jQAoRePgO4sz8LgaNKu4";

/**
 * Authorization manager singleton. Do not instantiate this class - use globals.authManager instead.
 */
const _AuthManager = class {

    constructor() 
    {
        firebase.auth().onAuthStateChanged((user) => {
            const isSignedIn = !!user;
            this._user = user;
            const onLoginPage = !!document.querySelector("#loginPage");
            if (!onLoginPage && !isSignedIn) {
                location.href = "/login";
            }
            if (onLoginPage && isSignedIn) {
                location.href = "/";
            }
	    });
    }

    signIn() {
        // Auth key was generated via Rosefire and Firebase
        // We should probably store this somewhere else...
        Rosefire.signIn("91ca8bd9-3a3d-4bb6-b296-80ba167fff5b", (err, rfUser) => {
            if (err) {
                alert(`Rosefire error: ${err}`);
                return;
            }
            this._user = {
                uid: rfUser.username,
                name: rfUser.name
            };
            firebase.auth().signInWithCustomToken(rfUser.token).then((user) => {
                // nothing here
            });
        })
    }

    signOut() {
        firebase.auth().signOut().catch((error) => {
			var errorCode = error.code;
			var errorMessage = error.message;
			alert('Sign out error:', errorCode, errorMessage);
		});
    }

    beginListening(changeListener) {
		firebase.auth().onAuthStateChanged((user) => {
			changeListener(user);
		});
	}

    get isSignedIn() {
        return !!this._user;
    }

    get uid() {
        return this._user.uid;
    }

    get displayName() {
        return this._user.displayName;
    }

    get avatarUrl() {
        return this._user.photoURL;
    }

    getSelectedTheme() {
        return globals.userManager.getEquippedTheme(this.uid);
    }
}

/**
 * Authorization manager for Zenc.
 * When loaded, automatically redirect the user based on login status.
 */
globals.authManager = new _AuthManager();

/**
 * User manager for Zenc.
 */
const _UserManager = class {
    constructor() {
        this._ref = firebase.firestore().collection(globals.FB_USER_COLLECTION); 
        this._doc = null;
		this._unsubscribe = null;
    }

    beginListening(uid, changeListener) {
		const userRef = this._ref.doc(uid);
		this._unsubscribe = userRef.onSnapshot((doc) => {
			if (doc.exists) {
				this._doc = doc;
				changeListener();
			} else {
				console.log("No user found! (this is bad)");
			}
		});
	}

    stopListening() {
		this._unsubscribe();
	}

    addNewUserMaybe(uid, name, photoUrl) {
		// Check if user is in Firebase already
		const userRef = this._ref.doc(uid);
		return userRef.get().then((doc) => {
			if (doc.exists) {
				// Do nothing - there is already a user
				return false;
			} else {
				// doc.data() will be undefined in this case
				return userRef.set({
					[globals.FB_KEY_USER_NAME]: name,
					[globals.FB_KEY_USER_AVATAR]: photoUrl,
                    [globals.FB_KEY_USER_ZENPOINTS]: 0,
                    [globals.FB_KEY_USER_OWNED_THEMES]: [globals.FB_DEFAULT_THEME_KEY],
                    [globals.FB_KEY_USER_SELECTED_THEME]: globals.FB_DEFAULT_THEME_KEY
				})
				.then(() => {
					return true;
				})
				.catch((error) => {
					return false;
				});
			}
		}).catch((error) => {
            return false;
		});
	}

    /**
     * Updates the user with the given UID with the object given.
     * @param {uid} uid the user ID to update
     * @param {Object} newData the data to update the user with
     * @returns the promise of the server being updated 
     */
    updateUser(uid, newData) {
        const userRef = this._ref.doc(uid);
        return userRef.update(newData);
    }

    /**
     * @param {uid} uid the user ID to check
     * @param {Theme} theme the theme to check
     * @returns true if the account with the given UID can afford `theme`, false otherwise.
     */
    canBuyTheme(uid, theme) {
        const userRef = this._ref.doc(uid);
        let zenpoints = userRef.get(globals.FB_KEY_USER_ZENPOINTS);
        return zenpoints >= theme.price;
    }

    /**
     * Buys a theme for the user. This does not check if the user can afford the theme,
     * nor does it automatically equip it.
     * 
     * @param {uid} uid the user ID buying the theme
     * @param {Theme} theme the theme to check
     * @returns the promise of the server being updated
     */
    buyTheme(uid, theme) {
        const userRef = this._ref.doc(uid);
        let zenpoints = userRef.get(globals.FB_KEY_USER_ZENPOINTS);
        zenpoints -= theme.price;
        const userThemes = userRef.get(globals.FB_KEY_USER_OWNED_THEMES);
        userThemes.push(theme.id);
        return userRef.update({
            [globals.FB_KEY_USER_OWNED_THEMES]: userThemes,
            [globals.FB_KEY_USER_ZENPOINTS]: zenpoints
        });
    }

    /**
     * Equips a theme for the user. This does not check if the user owns the theme.
     * 
     * @param {uid} uid the user ID equipping the theme
     * @param {Theme} theme the theme to equip
     * @returns the promise of the server being updated
     */
    equipTheme(uid, theme) {
        const userRef = this._ref.doc(uid);
        return userRef.update({
            [globals.FB_KEY_USER_SELECTED_THEME]: theme.id
        });
    }

    /**
     * Gives the user with the given UID a certain amount of zenpoints.
     * @param {string} uid the user to give zenpoints to
     * @param {number} amount the amount of zenpoints to give
     */
    grantZenpoints(uid, amount) {
        const userRef = this._ref.doc(uid);
        let zenpoints = userRef.get(globals.FB_KEY_USER_ZENPOINTS);
        zenpoints += amount;
        return userRef.update({
            [globals.FB_KEY_USER_ZENPOINTS]: zenpoints
        });
    }

    /**
     * Gets the equipped theme for uid.
     * @param {string} uid the user ID to check
     * @returns a promise that returns the user's selected theme
     */
    getEquippedTheme(uid) {
        const userRef = this._ref.doc(uid);
        return userRef.get().then((doc) => {
            return doc.get(globals.FB_KEY_USER_SELECTED_THEME);
        }).then(async(themeId) => {
            return await globals.themeManager.getThemeFromID(themeId);
        }).catch(() => {
            return null;
        });
    }
}

globals.userManager = new _UserManager();
globals.authManager.beginListening(() =>
    globals.userManager.addNewUserMaybe(globals.authManager.uid, globals.authManager.displayName, globals.authManager.avatarUrl)
);

globals.Theme = class {
    /**
     * Creates a theme class.
     * 
     * @param {id} id the ID of the theme 
     * @param {Object} params the parameters used to create the theme:
     *  - name: the name of the theme, in English.
     *  - creator: the UID of the person who created the theme.
     *  - fgColor: the foreground color of the theme.
     *  - accentColor: the accent color of the theme.
     *  - lastTouched: the date and time the theme was last modified.
     *  - price: how much the theme costs in zenpoints.
     */
    constructor(id, params) {
        this.id = id
        this.name = params.name || "Untitled Theme";
        this.creator = params.creator;
        this.fgColor = params.fgColor || "#000000";
        this.accentColor = params.accentColor || "#ffffff";
        this.lastTouched = params.lastTouched;
        this.price = params.price || 0;
    }
}

const _ThemeManager = class {
    constructor() {
		this._documentSnapshots = [];
		this._ref = firebase.firestore().collection(globals.FB_THEME_COLLECTION);
		this._unsubscribe = null;
        this.beginListening();
		// this.uid = uid; -- maybe add this later
	}

    /**
     * Adds a new theme to the server.
     * 
     * @param {string} name the name of the theme, in English
     * @param {string} fgColor the foreground color
     * @param {string} accentColor the accent color
     * @param {number} price the price of the theme in zenpoints
     * @returns a promise for the theme being added to the server
     */
	add(name, fgColor, accentColor, price) {
		return this._ref.add({
            [globals.FB_KEY_THEME_NAME]: name,
			[globals.FB_KEY_THEME_CREATOR]: globals.authManager.uid,
            [globals.FB_KEY_THEME_FGCOLOR]: fgColor,
            [globals.FB_KEY_THEME_ACCENT_COLOR]: accentColor,
            [globals.FB_KEY_THEME_PRICE]: price,
			[globals.FB_KEY_THEME_LAST_TOUCHED]: firebase.firestore.Timestamp.now()
		});
	}

	beginListening(changeListener) {
		let query = this._ref.orderBy("lastTouched", "desc").limit(50);
		if (this.uid) {
			query = query.where(rhit.FB_KEY_AUTHOR, "==", this.uid);
		}

		this._unsubscribe = query.onSnapshot((querySnapshot) => {
			this._documentSnapshots = querySnapshot.docs; // better than for loop, O(1)
			if (changeListener) {
				changeListener();
			}
		});
	}

	stopListening() {
		this._unsubscribe();
	}

    /**
     * Updates a theme with a given ID.
     * 
     * @param {string} id the id of the theme on the server
     * @param {string} name the name of the theme, in English
     * @param {string} fgColor the foreground color
     * @param {string} accentColor the accent color
     * @param {number} price the price of the theme in zenpoints
     * @returns a promise for the theme being updated onto the server
     */
    update(id, name, fgColor, accentColor, price)
    {
        const updateRef = this._ref.doc(id);
        return updateRef.update({
            [globals.FB_KEY_THEME_NAME]: name,
			[globals.FB_KEY_THEME_CREATOR]: globals.authManager.uid,
            [globals.FB_KEY_THEME_FGCOLOR]: fgColor,
            [globals.FB_KEY_THEME_ACCENT_COLOR]: accentColor,
            [globals.FB_KEY_THEME_PRICE]: price,
			[globals.FB_KEY_THEME_LAST_TOUCHED]: firebase.firestore.Timestamp.now()
		});
    }

    /**
     * 
     * @param {string} id 
     * @returns a promise for the theme being deleted from the server
     */
    delete(id) {
        const deleteRef = this._ref.doc(id);
        return deleteRef.delete();
    }

    /**
     * @param {number} index the index to get the theme of
     * @returns a new Theme object representing the Theme at the index
     */
	getThemeAtIndex(index) {
		const docSnapshot = this._documentSnapshots[index];
		if (!docSnapshot) {
			return null;
		}
		const theme = new globals.Theme(docSnapshot.id, {
            name: docSnapshot.get(globals.FB_KEY_THEME_NAME),
            creator: docSnapshot.get(globals.FB_KEY_THEME_CREATOR),
            fgColor: docSnapshot.get(globals.FB_KEY_THEME_FGCOLOR),
            accentColor: docSnapshot.get(globals.FB_KEY_THEME_ACCENT_COLOR),
            lastTouched: docSnapshot.get(globals.FB_KEY_THEME_LAST_TOUCHED),
            price: docSnapshot.get(globals.FB_KEY_THEME_PRICE),
        });
		return theme;
	}

    /**
     * @param {string} ID the ID to get the theme of
     * @returns a new Theme object representing the Theme at the stored ID
     */
    getThemeFromID(id) {
        const docRef = this._ref.doc(id);
        return docRef.get()
        .then((doc) => {
            const theme = new globals.Theme(doc.id, {
                name: doc.get(globals.FB_KEY_THEME_NAME),
                creator: doc.get(globals.FB_KEY_THEME_CREATOR),
                fgColor: doc.get(globals.FB_KEY_THEME_FGCOLOR),
                accentColor: doc.get(globals.FB_KEY_THEME_ACCENT_COLOR),
                lastTouched: doc.get(globals.FB_KEY_THEME_LAST_TOUCHED),
                price: doc.get(globals.FB_KEY_THEME_PRICE)
            });
            return theme;
        });
	}

    /**
     * The total number of themes.
     */
    get length() {
		return this._documentSnapshots.length;
	}
}

globals.themeManager = new _ThemeManager();

const _StorageManager = class {
    /**
     * Uploads a theme image onto the server, received via an input of type "file".
     * @example
     * ```
     *  document.querySelector("#inputFile").addEventListener("change", (event) => {
     *      globals.storageRef.uploadThemeImage(<theme index>, event.target.files[0]);
     *  }
     * ```
     * @param {Theme} theme the theme the background image belongs to
     * @param {File} file the file to upload onto the server
     */
    uploadThemeImage(themeId, file) {
        const storageRef = firebase.storage().ref().child("backgroundImages/" + themeId); // Create new child in Firebase storage
        return storageRef.put(file);
    }
    
    getImageUrl(themeId) {
        const storageRef = firebase.storage().ref().child("backgroundImages/" + themeId);
        return storageRef.getDownloadURL();
    }
}

globals.storageManager = new _StorageManager();

export default globals;