import React from "react";

const exampleComponents = {
  components: {
    id: 1,
    items: [
      {
        id: 1,
        name: "CustomButton",
        component: (
          <button className={"custom__button"}>Hey I'm CustomButton</button>
        ),
        codeSnippet: `
    import React from 'react';

    import './CustomButton.style.scss';

    const CustomButton = ({ children, large, ...otherProps }) => (
      <button
        className={\`\${large ? 'custom__button--large' : ''} custom__button\`}
        {...otherProps}
      >
        {children}
      </button>
    );

    export default CustomButton;
      `,
        styleSnippet: `
      .custom {
        &__button {
          cursor: pointer;
          width: 150px;
          background: #3f51b5;
          color: whitesmoke;
          border: 2px solid #3f51b5;
          padding: 10px 5px;
          border-radius: 4px;
          box-shadow: none;
          font-size: 1.1rem;
          text-align: center;
          transition: all 0.2s ease-in-out;
          font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;

          &--large {
            width: 250px;
          }

          &:hover {
            background: whitesmoke;
            color: #0077ff;
          }

          &:focus {
            outline: none;
          }
        }
      }

      .button {
        &--disabled {
          pointer-events: none;
          cursor: not-allowed;
        }
      }
        `,
      },
      {
        id: 2,
        name: "GoogleSignInButton",
        component: "",
        codeSnippet: `
        import React from "react";

        import "./GoogleSignInButton.style.scss";

        import { GoogleIcon } from "../../assets";
        import { signInWithGoogle } from "../../firebase/firebase.utils";

        const GoogleSignInButton = () => (
          <button
            className="google__signin__button"
            onClick={() => {
              signInWithGoogle();
            }}
          >
            <GoogleIcon className="google__signin__icon" />
            <div className="google__signin__container">
              <div className="google__signin__text">Sign in with Google</div>
            </div>
          </button>
        );

        export default GoogleSignInButton;
        `,

        styleSnippet: `
      .google__signin {
        &__button {
          width: 300px;
          display: flex;
          padding: 0;
          border: 0;
          height: 50px;
          margin: 0 auto 1.5rem;
          cursor: pointer;
          border-radius: 4px;
        }

        &__container {
          height: 100%;
          display: flex;
          align-items: center;
          margin: 0 auto;
        }

        &__icon {
          position: absolute;
        }

        &__text {
          font-size: 1.2rem;
          text-align: center;
        }
      }
      `,
      },
      {
        id: 3,
        name: "Card",
        component: "test2",
        codeSnippet: `
        import React from 'react';

        import './Card.style.scss';

        const Card = () => (
          <div className="card__container">
            <div className="text__container">
              <h3 className="card__title">
                Insert Main text here
              </h3>
              <div className="card__subtitle">
                Subtitle Text!
              </div>
            </div>
          </div>
        );

        export default Card;
        `,
        styleSnippet: `
        .card {
            &__container {
              display: flex;
              justify-content: center;
              background-color: rgb(51, 75, 94);
              max-width: 20rem;
              margin: 2rem;
              padding: 2rem;
              border-radius: 8px;
              -webkit-box-shadow: 0px 0px 20px 3px rgba(120, 120, 120, 1);
              -moz-box-shadow: 0px 0px 20px 3px rgba(120, 120, 120, 1);
              box-shadow: 0px 0px 20px 3px rgba(120, 120, 120, 1);
            }
            &__title {
              font-size: 1.4rem;
              color: rgb(216, 112, 147);
            }
            &__subtitle {
              color: rgba(230, 163, 185, 0.9);
              font-size: 1.05rem;
              font-weight: 600;
            }
          }

          .text {
            &__container {
              text-align: left;
            }
          }

        `,
      },
      {
        id: 4,
        name: "FormInput",
        component: "",
        codeSnippet: `
      import React from "react";

      import "./FormInput.style.scss";

      const FormInput = ({ handleChange, label, value, ...otherProps }) => {
        return (
          <div className="form__group">
            <label className="form__label">{label}</label>
            <input className="form__input" onChange={handleChange} {...otherProps} />
          </div>
        );
      };

      export default FormInput;

      `,
        styleSnippet: `
        .form {
            &__group {
              font-family: "Roboto", sans-serif;
              position: relative;
              width: 100%;
            }

            &__input {
              display: block;
              font-size: 1.2rem;
              padding: 15px 10px 5px 0;
              margin-bottom: 15px;
              width: 100%;
              border: none;
              background: none;
              border-bottom: 1px solid rgb(129, 129, 129);
              color: var(--authentication-form-accent-color);

              &:focus {
                outline: none;
                background: none;
              }
            }

            &__label {
              pointer-events: none;

              font-size: 1rem;
              color: rgb(163, 163, 163);

              &.vanish {
                opacity: 0;
              }
            }
          }

          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          textarea:-webkit-autofill,
          textarea:-webkit-autofill:hover,
          textarea:-webkit-autofill:focus,
          select:-webkit-autofill,
          select:-webkit-autofill:hover,
          select:-webkit-autofill:focus {
            -webkit-text-fill-color: whitesmoke;

            -webkit-box-shadow: 0 0 0px 1000px var(--authentication-background-color)
              inset;
            transition: background-color 5000s ease-in-out 0s;
          }

        `,
      },
      {
        id: 5,
        name: "SignIn",
        component: "",
        codeSnippet: `
      // This assumes that you're using Firebase and their auth library. For implementation, please see 'Common Flows'

      import React, { useContext } from "react";
      import { Link } from "react-router-dom";
      import { auth } from "../../../firebase/firebase.utils";

      import "./SignIn.style.scss";

      import { FormInput } from "../../";
      import { CustomButton, GoogleSignInButton } from "../../../modules";
      import { SignInContext } from "../../../contexts";

      const SignIn = () => {
        const [signInData, setSignInData] = useState({
          displayName: "",
          email: "",
          password: "",
        });

        const { email, password } = signInData;

        const handleSubmit = async (event) => {
          event.preventDefault();

          try {
            await auth.signInWithEmailAndPassword(email, password);
            setSignInData({ email: "", password: "" });
          } catch (error) {
            console.error(error);
          }
        };

        const handleChange = (event) => {
          const { name, value } = event.target;
          setSignInData({
            ...signInData,
            [name]: value,
          });
        };

        return (
          <div className="signin__container">
            <div className="signin__title">Sign in!</div>
            <div className="signin__subtitle">
              Sign in using your Google account or email/password!
            </div>
            <form onSubmit={handleSubmit} className="signin__form">
              <FormInput
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                label="email"
                required
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                label="Password"
                required
              />

              <CustomButton type="submit">Sign In</CustomButton>
            </form>

            <GoogleSignInButton className />
            <div className="signin__link__wrapper">
              Don't have an account?{" "}
              <Link className="signin__link" to="/sign-up">
                Register here.
              </Link>
            </div>
          </div>
        );
      };

      export default SignIn;

      `,
        styleSnippet: `
      .signin {
        &__container {
          width: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;

          color: var(--authentication-text-color);
        }

        &__title {
          font-size: 2.5rem;
          text-align: center;
        }

        &__subtitle {
          font-size: 1.2rem;
          padding: 2rem 0;
          text-align: center;
        }

        &__form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        &__link__wrapper {
          text-align: center;
        }

        &__link {
          color: var(--authentication-link-color);
          font-size: 1.1rem;

          text-decoration: none;
        }
      }

      `,
      },
      {
        id: 6,
        name: "SignUp",
        component: "",
        codeSnippet: `
        import React, { useEffect, useContext } from "react";
        import { Link, withRouter } from "react-router-dom";

        import "./SignUp.style.scss";

        import { FormInput } from "../../";
        import { CustomButton } from "../../../modules";
        import { auth, createUserInFireStore } from "../../../firebase/firebase.utils";
        import { SignUpContext } from "../../../contexts";

        const SignUp = ({ history }) => {
          const { signUpData, setSignUpData } = useContext(SignUpContext);

          const { displayName, email, password, confirmPassword } = signUpData;

          const handleSubmit = async (event) => {
            event.preventDefault();
            const { displayName, email, password, confirmPassword } = signUpData;

            if (password !== confirmPassword) {
              alert("Passwords don't match :/");
              return;
            }

            try {
              const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
              );
              await createUserInFireStore(user, { displayName });

              setSignUpData({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
              });

              history.push("/");
            } catch (error) {
              console.error(error);
            }
          };

          const handleChange = async (event) => {
            const { name, value } = event.target;
            await setSignUpData({
              ...signUpData,
              [name]: value,
            });
          };

          useEffect(() => {
            console.log(signUpData);
          }, [signUpData]);

          return (
            <div className="signup__container">
              <div className="signup__title">Sign Up!</div>
              <div className="signup__subtitle">
                Hey there! Sign up using your email and password.
              </div>
              <form onSubmit={handleSubmit} className="signup__form">
                <FormInput
                  type="text"
                  name="displayName"
                  value={displayName}
                  onChange={handleChange}
                  label="Display Name"
                  required
                />
                <FormInput
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  label="email"
                  required
                />
                <FormInput
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  label="Password"
                  required
                />
                <FormInput
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  label="Confirm Password"
                  required
                />

                <CustomButton type="submit">Sign Up</CustomButton>
              </form>
              <div className="signup__link__wrapper">
                Already have an account?{" "}
                <Link className="signup__link" to="/">
                  Sign in here.
                </Link>
              </div>
            </div>
          );
        };

        export default withRouter(SignUp);
        `,
        styleSnippet: ``,
      },
      // if data is blank, will kick an error.
      // { id: 7, name: "", component: "", codeSnippet: ``, styleSnippet: `` },
    ],
  },
  commonFlows: {
    id: 2,
    items: [
      {
        id: 1,
        name: "FirebaseAuth",
        description:
          "This flow uses firebase's auth library to set up our initial use auth experience. Don't forget to make sure that the login types are enabled in firebase's console!",
        codeSnippet_1: `
        import firebase from "firebase/app";
        import "firebase/firestore";
        import "firebase/auth";

        const config = {
          // Enter your firebaseConfig object here
        };

        export const createUserInFireStore = async (userAuth, additionalData) => {
          if (!userAuth) return;

          const userRef = firestore.doc(\`users/\${userAuth.uid}\`);
          const snapShot = await userRef.get();

          if (!snapShot.exists) {
            // We have to use the reference for CRUD operations
            const { displayName, email } = userAuth;
            const createdAt = new Date();

            try {
              await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
              });
            } catch (error) {
              console.error("error creating user", error.message);
            }
          }

          return userRef;
        };

        firebase.initializeApp(config);

        export const auth = firebase.auth();
        export const firestore = firebase.firestore();

        const provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({ prompt: "select_account" });

        export const signInWithGoogle = () => auth.signInWithPopup(provider);

        export default firebase;

        `,
        codeSnippet_2: `
        const [currentUser, setCurrentUser] = useState(null);
        const isLoggedIn = localStorage.getItem("user");

        useEffect(() => {
          let unsubscribeFromAuth = null;
          unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
              const userRef = await createUserInFireStore(userAuth);

              userRef.onSnapshot(async (snapShot) => {
                localStorage.setItem(
                  "user",
                  JSON.stringify({ id: snapShot.id, data: snapShot.data() })
                );
                setCurrentUser({
                  id: snapShot.id,
                  ...snapShot.data(),
                });
              });
            } else {
              setCurrentUser(userAuth);
            }
          });

          return () => {
            unsubscribeFromAuth();
          };
        }, []);
      `,
      },
      {
        id: 2,
        name: "ThemeToggle",
        description:
          "An easy way to set up basic Dark/Lightmode toggles, using CSS variables and the Context API",
        codeSnippet: `

        Use on component that you'll have the style toggle on.
        For example, This is this site's implementation:

        --- <ThemeContext /> ---

        import { createContext } from "react";

        const ThemeContext = createContext(null);

        export default ThemeContext;

        --- <App /> ---

        function App() {
            const [themeData, setThemeData] = useState({
              isDarkMode: true,
            });

            return (
              <ThemeContext.Provider value={{ themeData, setThemeData }}>
                <div className="App">
                 insert App code here; maybe your <HomePage />
                </div>
              </ThemeContext.Provider>
            );
          }

          export default App;

        --- <TopBar /> ---

        const { themeData, setThemeData } = useContext(ThemeContext);

        if (!themeData.isDarkMode) {
          document.body.classList.add("light");
        } else {
          document.body.classList.remove("light");
        }

        return (
          <div className="topbar__container">
            <Link to="/" className="topbar__title">
              Blee's Box
            </Link>
            <div
              className="theme__toggle"
              onClick={() => {
                setThemeData({ isDarkMode: !themeData.isDarkMode });
              }}
            >
            <Sun /> and <Moon /> simply refer to SVGs
              {themeData.isDarkMode ? (
                <Sun className="theme__icon--sun" />
              ) : (
                <Moon className="theme__icon--moon" />
              )}
            </div>
          </div>
        );

        `,
        styleSnippet: `
        body {
            MacroSite stylings
            --barBackgroundColor: hsla(0, 0%, 23%, 1);
            --articleBackgroundColor: hsla(0, 0%, 23%, 0.8);
            --barTextColor: whitesmoke;
            --barTextAccent: white;
            --chevronColor: hsla(0, 0%, 76%, 0.8);
            --articleTextColor: whitesmoke;
            --transitionDelay: 0.7s;
            --scrollbar-thumb-background-color: #a70254;

            --theme-selector-color: hsl(24, 100%, 50%);
            --download-icon-color: hsl(41, 96%, 62%);

            background: var(--barBackgroundColor);
            transition: all var(--transitionDelay) ease;
          }
          .light {
            --barBackgroundColor: hsla(0, 0%, 83%, 1);
            --articleBackgroundColor: hsla(0, 0%, 83%, 0.8);
            --barTextColor: hsl(0, 0%, 33%);
            --barTextAccent: hsl(0, 0%, 27%);
            --articleTextColor: hsl(0, 0%, 33%);
            --chevronColor: hsla(0, 0%, 58%, 0.8);
            --scrollbar-thumb-background-color: #3a549b;
            --theme-selector-color: hsl(263, 76%, 39%);
            --download-icon-color: hsl(345, 98%, 63%);
          }
          `,
      },
      { id: 3, name: "", description: "", codeSnippet: ``, styleSnippet: `` },
      { id: 4, name: "", description: "", codeSnippet: ``, styleSnippet: `` },
    ],
  },
  projectStructure: {
    id: 3,
    items: [
      {
        id: 1,
        name: "AddFilesToFirestore",
        description:
          "An easy structure to follow to programmatically add files to firestore without losing your mind over it",
        codeSnippet_1: `
        // --- your data.js file ---
        const EXAMPLE_DATA = {
            section1: {
                id: 1,
                array of items that you want to add: [
                    {
                        // insert your object values here
                    },
                    {
                        // these objects represent your individual documents.
                    }
                ]
            },
            section2: {
                id: 2,
                subarray of other items: [{
                    // follow this basic structure for the following util and app level code to work.
                }]
            }
        }
        `,
        codeSnippet_2: `
        // firebase.util function

        export const migrateDocumentsToFirestore = async (
            collectionKey,
            objectsToAdd
          ) => {
            let collectionRef = firestore.collection(collectionKey);

            let batch = firestore.batch();

            objectsToAdd.forEach((object) => {
                // if you want firebase to assign custom document names, put the property you want them to be named after.
                // For instance, this site uses collectionRef.doc(object.name) which populates the "addFilesToFirestore" that you're seeing
                // as well as the url!
              let newDocumentRef = collectionRef.doc();
              batch.set(newDocumentRef, object);
            });

            return await batch.commit();
          };
        `,
        codeSnippet_3: `
        // Use this in App.js ONCE
        // This method requires the structure to be in line with what was shown above, so keep that in mind if you get any weird errors.

        let componentsArray = Object.keys(exampleComponents.components.items).map(
              (key) => exampleComponents.components.items[key]
            );
            console.log(componentsArray);
            useEffect(() => {
              migrateDocumentsToFirestore(
                "components",
                componentsArray.map(({ name, component, codeSnippet, styleSnippet }) => ({
                  name,
                  codeSnippet,
                  styleSnippet,
                }))
              );
            }, []);

        `,
      },
      // {
      //   id: 1,
      //   name: "",
      //   description: "",
      //   codeSnippet_1: ``,
      //   codeSnippet_2: ``,
      // },
    ],
  },
};
export default exampleComponents;
