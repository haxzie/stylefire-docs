/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// avoid webpack from messing with mapbox package
// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//     if (stage === "build-html") {
//         actions.setWebpackConfig({
//             module: {
//                 rules: [
//                     {
//                         test: /stylefire/,
//                         use: loaders.null(),
//                     },
//                     {
//                         test: /@haxzie/,
//                         use: loaders.null()
//                     }
//                 ],
//             },
//         })
//     }
// }
