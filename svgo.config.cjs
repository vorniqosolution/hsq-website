module.exports = {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false, // keep responsive scaling
          cleanupIDs: false     // don't break refs/animations
        }
      }
    },
    "removeDimensions" // remove width/height attributes so CSS can control sizing
  ]
};