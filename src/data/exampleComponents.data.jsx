// import React from "react";

// const exampleComponents = {
//   components: {
//     id: 1,
//     items: [
//       {
//         id: 1,
//         name: "CustomButton",
//         component: (
//           <button className={"custom__button"}>Hey I'm CustomButton</button>
//         ),
//         codeSnippet: `
//     import React from 'react';

//     import './CustomButton.style.scss';

//     const CustomButton = ({ children, large, ...otherProps }) => (
//       <button
//         className={\`\${large ? 'custom__button--large' : ''} custom__button\`}
//         {...otherProps}
//       >
//         {children}
//       </button>
//     );

//     export default CustomButton;
//       `,
//         styleSnippet: `
//       .custom {
//         &__button {
//           cursor: pointer;
//           width: 150px;
//           background: #3f51b5;
//           color: whitesmoke;
//           border: 2px solid #3f51b5;
//           padding: 10px 5px;
//           border-radius: 4px;
//           box-shadow: none;
//           font-size: 1.1rem;
//           text-align: center;
//           transition: all 0.2s ease-in-out;
//           font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;

//           &--large {
//             width: 250px;
//           }

//           &:hover {
//             background: whitesmoke;
//             color: #0077ff;
//           }

//           &:focus {
//             outline: none;
//           }
//         }
//       }

//       .button {
//         &--disabled {
//           pointer-events: none;
//           cursor: not-allowed;
//         }
//       }
//         `,
//       },
//       {
//         id: "test1",
//         name: "test3",
//         component: "test2",
//         codeSnippet: "test4",
//         styleSnippet: "test5",
//       },
//     ],
//   },
//   articles: {
//     id: 2,
//     items: [],
//   },
//   article2s: {
//     id: 3,
//     items: [],
//   },
// };
// export default exampleComponents;
